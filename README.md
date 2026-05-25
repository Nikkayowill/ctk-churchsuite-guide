# CTK ChurchSuite Simplified Guide

A Vite-built web version of the CTK Dartmouth ChurchSuite staff guide.

## What It Is

This site presents the ChurchSuite workflow guide in a cleaner web format with screenshots, section links, and a PDF download.

It also includes a private feedback form for staff to suggest corrections, missing sections, or bug reports. Submissions open the user's email app with a pre-filled message to the CTK inbox and are not shown publicly on the page.

## Local Development

```bash
npm install
npm run prepare:assets
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

GitHub Pages builds `dist` from the `master` branch via the workflow in `.github/workflows/deploy.yml`.
