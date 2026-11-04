/**
 * Rate Limiter for Next.js API Routes.
 * Supports Upstash Redis REST when configured in environment,
 * with a reliable fallback in-memory cache for development/single-instance.
 */

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

// In-memory token bucket for development / fallback
const memoryStore = new Map<string, { count: number; resetAt: number }>();

export async function rateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000 // 10 minutes
): Promise<RateLimitResult> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  // Use Upstash Redis REST if credentials provided
  if (upstashUrl && upstashToken) {
    try {
      const key = `ratelimit:contact:${identifier}`;
      const res = await fetch(`${upstashUrl}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", key],
          ["PTTL", key],
        ]),
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        const currentCount = Number(data[0]?.result || 1);
        let ttlMs = Number(data[1]?.result || -1);

        if (ttlMs === -1 || ttlMs === -2) {
          // Key just created or expired; set expiration
          await fetch(`${upstashUrl}/PEXPIRE/${key}/${windowMs}`, {
            headers: { Authorization: `Bearer ${upstashToken}` },
          });
          ttlMs = windowMs;
        }

        const remaining = Math.max(0, limit - currentCount);
        return {
          success: currentCount <= limit,
          limit,
          remaining,
          reset: Date.now() + ttlMs,
        };
      }
    } catch (err) {
      console.warn("Upstash Redis rate limiter encountered an error; falling back to memory store", err);
    }
  }

  // Fallback to in-memory store
  const now = Date.now();
  const record = memoryStore.get(identifier);

  if (!record || now > record.resetAt) {
    memoryStore.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: record.resetAt,
    };
  }

  record.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: record.resetAt,
  };
}
