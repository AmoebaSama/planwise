# Deployment Fix Instructions for Vercel (planwise)

Your site is blank because Vercel expects an index.html file in the root directory. Your main file is currently named scheduler.html.

## Steps to Fix

1. **Rename `scheduler.html` to `index.html`**
   - This allows Vercel to serve your app at the root URL.

2. **Ensure all referenced folders (like `components/`) are in the root and included in your repo.**

3. **Commit and push the changes to your GitHub repo.**

---

## Quick Command Line Fix

```sh
# In your project root
mv scheduler.html index.html
# Or on Windows:
rename scheduler.html index.html
# Then commit and push

git add index.html scheduler.html
# Remove scheduler.html if you want (optional)
git rm scheduler.html

git commit -m "Rename scheduler.html to index.html for Vercel deployment"
git push
```

---

## After pushing, redeploy on Vercel.

Your site should now load correctly at https://planwise-liart.vercel.app/

---

If you need a patch to rename the file in your workspace, let me know!