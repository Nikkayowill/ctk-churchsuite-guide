# CTK ChurchSuite Simplified Guide

A Vite-built web version of the CTK Dartmouth ChurchSuite staff guide.

## What It Is

This site presents the ChurchSuite workflow guide in a cleaner web format with screenshots, section links, and a PDF download.

It also includes a private feedback form for staff to suggest corrections, missing sections, or bug reports. Submissions are sent in the background through Formspree, show a simple Submitted message on success, and are not shown publicly on the page.

## Feedback

The feedback form uses Formspree form ID `mvzybezd`. Submissions go to the Formspree inbox for that form. Visitors cannot see other submissions. The site owner can reply only when the sender provides an email address.

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

Cloudflare builds and hosts the site. Use the Cloudflare Pages project connected to this repository, or deploy manually with:

```bash
npm run deploy
```
