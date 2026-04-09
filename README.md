# 🪨 Caveman Skill

**why use many token when few do trick**

A universal LLM communication skill that makes AI agents talk like caveman — cutting **~75% of output tokens** while keeping full technical accuracy.

Works with any agent that supports SKILL.md format: Qwen Code, Claude Code, Cursor, Windsurf, GitHub Copilot, Cline, Codex, and 40+ more.

## Before / After

<table>
<tr>
<td width="50%">

### 🗣️ Normal (69 tokens)

> "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object."

</td>
<td width="50%">

### 🪨 Caveman (19 tokens)

> "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."

</td>
</tr>
<tr>
<td>

### 🗣️ Normal

> "Sure! I'd be happy to help you with that. The issue you're experiencing is most likely caused by your authentication middleware not properly validating the token expiry. Let me take a look and suggest a fix."

</td>
<td>

### 🪨 Caveman

> "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

</td>
</tr>
</table>

**Same answer. 75% less word. Brain still big.**

## Why

- **Faster responses** — less token to generate = speed go brrr
- **Easier to read** — no wall of text, just the answer
- **Same accuracy** — all technical info kept, only fluff removed
- **Save money** — ~75% less output token = less cost
- **Fun** — every debug session become comedy

## Intensity Levels

| Level | Example | Best for |
|-------|---------|----------|
| 🪶 **Lite** | "Component re-renders because you create a new object reference. Wrap it in `useMemo`." | Professional but tight |
| 🪨 **Full** | "New object ref each render. Wrap in `useMemo`." | Default caveman |
| 🔥 **Ultra** | "Inline obj prop → new ref → re-render. `useMemo`." | Telegraphic mode |
| 📜 **文言文** | "物出新參照，致重繪。useMemo Wrap之。" | Classical Chinese compression |

## Usage

Trigger with any of these:
- `/caveman`
- "caveman mode"
- "talk like caveman"
- "less tokens"
- "be brief"

Switch levels:
- `/caveman lite`
- `/caveman full` (default)
- `/caveman ultra`
- `/caveman wenyan-lite`
- `/caveman wenyan-full`
- `/caveman wenyan-ultra`

Stop with: "stop caveman" or "normal mode"

Level sticks until you change it or session ends.

## Install

### Option 1: CLI (recommended)

```bash
npx caveman-skill install
```

Auto-detects your agent and installs to the right path. Or specify directly:

```bash
npx caveman-skill install --agent qwen-code
npx caveman-skill install --agent claude-code
npx caveman-skill install --agent cursor
```

### Option 2: Clone & link

```bash
git clone https://github.com/yuritoledo/caveman-skill.git
```

Then point your agent to the `SKILL.md` file.

### Option 3: Manual copy

Grab the [`SKILL.md`](SKILL.md) file and place it in:

| Agent | Path |
|-------|------|
| Qwen Code | `.qwen/skills/caveman/` |
| Claude Code | `.claude/skills/` |
| Cursor | `.cursor/skills/` |
| Windsurf | `.windsurf/skills/` |
| Cline | `.cline/skills/` |

## How It Works

1. **Drops** articles (a/an/the), filler (just/really/basically), pleasantries (sure/happy to), hedging
2. **Keeps** technical terms, code blocks, URLs, commands, file paths — anything with real info passes through untouched
3. **Compresses** prose into `[thing] [action] [reason]. [next step].` pattern
4. **Auto-clarity** — temporarily drops caveman for security warnings, irreversible confirmations, or when user is confused

Code, commits, and PR reviews are always written normally. Technical accuracy is never compromised.

## Benchmarks

Real token counts from LLM APIs:

| Task | Normal | Caveman | Saved |
|------|-------:|--------:|------:|
| Explain React re-render | 1180 | 159 | 87% |
| Fix auth middleware | 704 | 121 | 83% |
| Set up DB connection pool | 2347 | 380 | 84% |
| Explain git rebase vs merge | 702 | 292 | 58% |
| Docker multi-stage build | 1042 | 290 | 72% |
| **Average** | **1214** | **294** | **65%** |

*Range: 22%–87% savings across prompts. Simple answers save less, complex ones save more.*

## CLI Installer

```bash
npx caveman-skill install
```

Interactively detects your agent and installs the skill to the right path.

Or specify your agent:

```bash
npx caveman-skill install --agent qwen-code
npx caveman-skill install --agent claude-code
npx caveman-skill install --agent cursor
npx caveman-skill install --agent windsurf
npx caveman-skill install --agent cline
```

## License

MIT — free like mass mammoth on open plain.

---

**Based on** [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) — the original. Forked with permission and love.
