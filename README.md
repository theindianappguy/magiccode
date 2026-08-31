<img src="logos/logo-14-evenm.svg" width="72" alt="magiccode">

# magiccode

A coding agent that runs on your machine. It reads your files, proposes edits as
a diff, and waits for you to approve each one. Every token is generated locally
through [Ollama](https://ollama.com) — no API key, no usage meter, no source
code leaving your laptop.

## Install

```sh
curl -fsSL https://magiccode.iag.workers.dev/install | sh
```

Needs Node 18+ and Ollama with a model that can call tools:

```sh
ollama pull qwen2.5-coder
```

## Update

```sh
magiccode update
```

It checks for a new version once a day and tells you in the banner when there
is one. If you are running from a git checkout it will say so and leave your
working copy alone.

## Use

Run it with no arguments for an interactive prompt:

```
 ████████  magiccode v0.2.0
 ██ ██ ██  Ollama · qwen2.5-coder
 ██ ██ ██  ~/projects/checkout-api

┌──────────────────────────────────────────────┐
│ > add rate limiting to the /upload route▌    │
└──────────────────────────────────────────────┘
  enter to send · ctrl+c to exit
```

Or one-shot:

```sh
magiccode "the webhook retries forever when stripe 500s — fix it"
magiccode chat
magiccode models
```

Run it inside the project you want changed — it works in the directory you
invoke it from, and refuses to touch anything outside it.

## What it does

| tool | |
|---|---|
| `list_files` | orient itself in the project |
| `read_file` | read a file before changing it |
| `edit_file` | replace an exact snippet; refuses ambiguous matches |
| `write_file` | create a new file |
| `run_command` | run your tests — you approve first |

Every write and every command shows a diff or the command, then waits for `y/N`.
Nothing is written without your say-so. Non-interactive runs refuse to write at
all unless you set `MAGICCODE_YES=1`.

## Environment

| | |
|---|---|
| `MAGICCODE_MODEL` | model to use (default: the first one Ollama lists) |
| `MAGICCODE_YES` | `1` to approve every edit without asking |
| `MAGICCODE_BIN_DIR` | where the installer puts the binary (default `~/.local/bin`) |
| `OLLAMA_HOST` | default `http://127.0.0.1:11434` |

## Status

Early, but real. The agent loop, the five tools, the approval flow, the
interactive prompt and self-update all work and are tested end to end against
a local model.

The honest limitation is the model, not the tool: small local models are much
weaker at multi-step editing than hosted frontier ones. A 7B model will
sometimes ask what you want instead of doing it. Give it the biggest coding
model your machine can hold.

Built by [Sanskar Tiwari](https://sanskartiwari.io). MIT.
