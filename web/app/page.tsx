import { CopyCommand } from "./copy-command";

const FEATURES = [
  {
    title: "Runs on your machine",
    body: "Every token is generated locally through Ollama. No API key, no usage meter, no source code leaving your laptop.",
  },
  {
    title: "Any model you can pull",
    body: "Point it at llama3, qwen2.5-coder, deepseek-coder, or anything else in your Ollama library. Swap models per project.",
  },
  {
    title: "Reads and writes real files",
    body: "It edits your working tree, runs your test command, and shows you the diff before anything is committed.",
  },
  {
    title: "One binary, zero config",
    body: "A single script on your PATH. It picks up the project it is sitting in — no workspace setup, no daemon, no account.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Install Ollama",
    body: "The local inference engine magiccode talks to.",
    cmd: "curl -fsSL https://ollama.com/install.sh | sh",
  },
  {
    n: "02",
    title: "Pull a coding model",
    body: "Anything works. This one is a good default for code.",
    cmd: "ollama pull qwen2.5-coder",
  },
  {
    n: "03",
    title: "Install magiccode",
    body: "Drop it on your PATH and make it executable.",
    cmd: "curl -fsSL https://magiccode.iag.workers.dev/install | sh",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative mx-auto max-w-5xl px-6">
        {/* nav */}
        <nav className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <svg
              viewBox="24 24 192 192"
              className="h-7 w-7 shrink-0"
              aria-hidden="true"
            >
              <rect x="40" y="44" width="160" height="28" fill="#ececf3" />
              <rect x="40" y="72" width="26" height="124" fill="#ececf3" />
              <rect x="107" y="72" width="26" height="124" fill="#ff9500" />
              <rect x="174" y="72" width="26" height="124" fill="#ececf3" />
            </svg>
            <span className="text-[15px] font-medium tracking-tight">
              magiccode
            </span>
          </div>
          <div className="flex items-center gap-7 text-sm text-haze">
            <a href="#install" className="transition-colors hover:text-white">
              Install
            </a>
            <a href="#why" className="transition-colors hover:text-white">
              Why
            </a>
            <a
              href="https://github.com/theindianappguy/magiccode"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* hero */}
        <section className="pt-16 pb-20 sm:pt-24">
          <div className="inline-flex items-center gap-2 border border-line bg-ink-soft px-3 py-1.5 text-xs text-haze">
            <span className="h-1.5 w-1.5 bg-mint" />
            Open source · MIT · No account required
          </div>

          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            A coding agent that lives
            <br className="hidden sm:block" />{" "}
            <span className="text-spark-soft">in your terminal</span>, not the cloud.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-haze">
            magiccode is an open alternative to OpenCode. It runs your models
            locally through Ollama — so the agent that reads your codebase never
            sends it anywhere.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CopyCommand command="curl -fsSL https://magiccode.iag.workers.dev/install | sh" />
            <a
              href="#install"
              className="text-sm text-haze transition-colors hover:text-white sm:ml-2"
            >
              or read the 3-step setup →
            </a>
          </div>
        </section>

        {/* terminal */}
        <section className="pb-24">
          <div className="overflow-hidden border border-line bg-ink-soft">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-haze">
                ~/projects/checkout-api
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-mint">$</span> magiccode
                {"\n\n"}
                {" ████████"}
                <span className="text-haze">{"  magiccode "}</span>
                <span className="text-haze">v0.1.0</span>
                {"\n"}
                {" ██ "}
                <span className="text-spark">██</span>
                {" ██"}
                <span className="text-haze">{"  Ollama · qwen2.5-coder"}</span>
                {"\n"}
                {" ██ "}
                <span className="text-spark">██</span>
                {" ██"}
                <span className="text-haze">{"  ~/projects/checkout-api"}</span>
                {"\n\n"}
                Usage: magiccode [command] [options]
                {"\n\n"}
                Commands:
                {"\n"}
                <span className="text-haze">{"  init         Initialize a new project"}</span>
                {"\n"}
                <span className="text-haze">{"  run          Run the current project"}</span>
                {"\n"}
                <span className="text-haze">{"  build        Build the project"}</span>
                {"\n"}
                <span className="text-haze">{"  help         Show this help message"}</span>
                {"\n\n"}
                <span className="text-mint">$</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 bg-haze" />
              </code>
            </pre>
          </div>
        </section>

        {/* why */}
        <section id="why" className="border-t border-line py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why another coding agent
          </h2>
          <p className="mt-3 max-w-lg text-haze">
            Because the good ones bill per token and read your source on someone
            else&apos;s server.
          </p>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <h3 className="text-base font-medium">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-haze">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* install */}
        <section id="install" className="border-t border-line py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Running in three commands
          </h2>
          <p className="mt-3 text-haze">macOS and Linux. Windows via WSL.</p>

          <div className="mt-12 space-y-9">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-5 sm:gap-7">
                <div className="pt-0.5 font-mono text-sm text-spark-soft">
                  {s.n}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-medium">{s.title}</h3>
                  <p className="mt-1 text-[15px] text-haze">{s.body}</p>
                  <div className="mt-3.5 overflow-x-auto border border-line bg-ink-soft px-4 py-3 font-mono text-[13px]">
                    <span className="text-mint">$ </span>
                    {s.cmd}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border border-line bg-ink-soft p-6">
            <p className="text-[15px] text-haze">
              Then point it at any repo and describe what you want changed:
            </p>
            <div className="mt-3.5 overflow-x-auto font-mono text-[13px]">
              <span className="text-mint">$ </span>
              magiccode &quot;add rate limiting to the /upload route&quot;
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="flex flex-col gap-4 border-t border-line py-10 text-sm text-haze sm:flex-row sm:items-center sm:justify-between">
          <span>MIT licensed. Built by Sanskar Tiwari.</span>
          <a
            href="https://github.com/theindianappguy/magiccode"
            className="transition-colors hover:text-white"
          >
            github.com/theindianappguy/magiccode
          </a>
        </footer>
      </div>
    </main>
  );
}
