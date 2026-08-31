// The CLI hits this on startup, so it must answer instantly — no network.
// VERSION is mirrored from the CLI at build time by scripts/sync-version.mjs.
import { VERSION } from "./version.generated";

export function GET() {
  return new Response(
    JSON.stringify({
      version: VERSION,
      install: "https://magiccode.iag.workers.dev/install",
      repo: "https://github.com/theindianappguy/magiccode",
    }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=300",
      },
    }
  );
}
