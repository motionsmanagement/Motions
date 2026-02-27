---
description: Push changes directly to GitHub so the user can preview them online (no local dev server previews)
---

# Deploy Changes to GitHub

After making any code changes, ALWAYS push directly to GitHub. Do NOT start a local dev server or do browser previews unless explicitly asked.

// turbo-all

1. Stage all changed files:
```
git add -A
```

2. Commit with a descriptive message summarizing what was changed:
```
git commit -m "feat: <short description of changes>"
```

3. Push to the remote repository (origin, main branch — adjust branch name if different):
```
git push origin main
```

4. Confirm to the user that changes have been pushed and the online preview should be updated.

> **IMPORTANT RULES:**
> - Never run `npm run dev` or open a browser preview after changes unless the user explicitly asks for it.
> - Always use a clear, descriptive commit message in Spanish or English matching the user's language.
> - If the push fails (e.g. conflicts), report the error to the user immediately without attempting to auto-resolve destructive merges.
