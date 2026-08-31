// Single source of truth: read the version out of the script itself on GitHub,
// so there is nothing to keep in sync here.
const RAW =
  "https://raw.githubusercontent.com/theindianappguy/magiccode/master/magiccode";

export async function GET() {
  let version: string | null = null;
  try {
    const res = await fetch(RAW, { cf: { cacheTtl: 300 } } as RequestInit);
    if (res.ok) {
      const text = await res.text();
      version = text.match(/VERSION\s*=\s*"([^"]+)"/)?.[1] ?? null;
    }
  } catch {
    // fall through — the CLI treats a missing version as "no update"
  }

  return new Response(
    JSON.stringify({
      version,
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
