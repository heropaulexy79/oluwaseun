import { ImageResponse } from "next/og";

export const alt = "Oluwaseun | Web Development & AI Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#171A19",
          color: "#F7F7F4",
          fontFamily: "system-ui, sans-serif",
          border: "16px solid #1F2321",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "36px", fontWeight: "bold", letterSpacing: "-0.03em" }}>
              Oluwaseun<span style={{ color: "#D9F36A" }}>.</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#D9F36A",
              color: "#121514",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "6px 14px",
              borderRadius: "9999px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Web & AI Consultancy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "950px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#F7F7F4",
              letterSpacing: "-0.02em",
            }}
          >
            Digital experiences that win trust. Intelligent systems that make business work better.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#9EABA2",
              lineHeight: 1.4,
            }}
          >
            High-performance web development, bespoke digital products, and practical AI workflow automation.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2E3532",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#9EABA2",
          }}
        >
          <div>Starting: Web from ₦400k • Retainers from ₦75k/mo</div>
          <div style={{ color: "#D9F36A", fontWeight: "600" }}>oluwaseun.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
