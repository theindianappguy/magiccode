"use client";

import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — the command is visible on screen either way
    }
  }

  return (
    <button
      onClick={copy}
      className="group flex items-center gap-3 border border-line bg-ink-soft px-4 py-3 text-left font-mono text-[13px] transition-colors hover:border-spark/60"
    >
      <span className="text-mint">$</span>
      <span className="truncate">{command}</span>
      <span
        className={`ml-auto shrink-0 pl-3 text-xs ${
          copied ? "text-mint" : "text-haze group-hover:text-white"
        }`}
      >
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
