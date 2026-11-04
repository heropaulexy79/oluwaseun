import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#171A19] text-[#F7F7F4] px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-[#1F2321] border border-[#2E3532] text-[#D9F36A]">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9F36A]">
            Error 404
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-[#F7F7F4]">
            Page Not Located
          </h1>
          <p className="text-sm text-[#9EABA2] leading-relaxed">
            The page or asset you requested does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider hover:bg-[#CBEA4F] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
