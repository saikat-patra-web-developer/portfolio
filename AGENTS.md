# Agent Instructions

Instructions in this file apply to every session working in this repository.
Add new standing rules here rather than relying on conversation memory.

## Hard rule: never scan `node_modules`

Do not read, list, glob, or grep inside `node_modules` — not in whole, not in
part, not "just to check". It contains hundreds of thousands of files and
parsing it wastes the session budget and drowns out real results.

### Never do this

- `glob` / `grep` with no `path` (defaults to the workspace root, so
  `**/*` and bare patterns descend into dependencies).
- Recursive directory listings from the project root
  (`Get-ChildItem -Recurse`, `ls -R`, `dir /s`, `find .`).
- Reading a file under `node_modules/**` to inspect a dependency's source.

### Always do this instead

- **Scope every search explicitly.** Pass a `path` — `src`, `public`,
  `scripts`, `dist`, or a single file.
- **Resolve dependencies through metadata.** Read `package.json` and
  `package-lock.json` for versions, scripts, and dependency graphs instead of
  walking into a package folder.
- **Need a dependency's API?** Check its docs, or use the type definitions
  referenced from project files — do not open the installed package.

## Directory access map

| Path | Status |
| --- | --- |
| `src/`, `public/`, `scripts/` | ✅ primary source, search freely (with `path` set) |
| root config files (`index.html`, `package.json`, `vite.config.ts`, `tsconfig*.json`, `.oxlintrc.json`, `.gitignore`) | ✅ read as needed |
| `dist/` | ⚠️ read only to verify emitted build output |
| `node_modules/` | 🚫 never scan, list, or read |
| `.git/` | 🚫 never scan or read (no `git` binary is installed here anyway) |

## Session habits

- Prefer dedicated tools (`grep`, `glob`, `read`) over shell commands — a
  shell listing is the easiest way to accidentally recurse.
- When a recursive scan is genuinely required, scope it to a named source
  directory in the command itself, never to the repository root.
