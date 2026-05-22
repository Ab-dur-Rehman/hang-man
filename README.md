# Hangman

A self-contained Hangman word game that runs as a static site. The game uses a
local word bank, semantic controls, keyboard input, responsive layout, and
accessible status updates.

## Run Locally

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Notes

- No build step is required.
- The game no longer depends on third-party word APIs.
- Generated source maps and stale Create React App bundle files were removed
  from the public deploy path.
