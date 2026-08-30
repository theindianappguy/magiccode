const SCRIPT = `#!/bin/sh
# magiccode installer — https://github.com/theindianappguy/magiccode
set -e

RAW="https://raw.githubusercontent.com/theindianappguy/magiccode/master/magiccode"
BIN_DIR="\${MAGICCODE_BIN_DIR:-$HOME/.local/bin}"
TARGET="$BIN_DIR/magiccode"

say() { printf '%s\\n' "$1"; }

say ""
say "  installing magiccode"
say ""

if ! command -v node >/dev/null 2>&1; then
  say "  x node is not installed."
  say "    magiccode needs Node 18 or newer — https://nodejs.org"
  exit 1
fi

NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo 0)
if [ "$NODE_MAJOR" -lt 18 ]; then
  say "  x node $(node -v) is too old — magiccode needs Node 18 or newer."
  exit 1
fi

mkdir -p "$BIN_DIR"
curl -fsSL "$RAW" -o "$TARGET.tmp"
chmod +x "$TARGET.tmp"
mv "$TARGET.tmp" "$TARGET"

say "  installed to $TARGET"
say ""

case ":$PATH:" in
  *":$BIN_DIR:"*) ;;
  *)
    say "  note: $BIN_DIR is not on your PATH. Add this to your shell profile:"
    say ""
    say "      export PATH=\\"$BIN_DIR:\\$PATH\\""
    say ""
    ;;
esac

if command -v ollama >/dev/null 2>&1; then
  if ollama list 2>/dev/null | awk 'NR==2{found=1} END{exit !found}'; then
    say "  ollama is ready. try:"
    say ""
    say "      magiccode \\"what you want changed\\""
  else
    say "  next, pull a model that can call tools:"
    say ""
    say "      ollama pull qwen2.5-coder"
  fi
else
  say "  next, install ollama and pull a model:"
  say ""
  say "      https://ollama.com"
  say "      ollama pull qwen2.5-coder"
fi

say ""
`;

export function GET() {
  return new Response(SCRIPT, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
