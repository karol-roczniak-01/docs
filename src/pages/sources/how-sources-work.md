---
layout: ../../layouts/DocumentLayout.astro
title: "How Sources Work"
---

# How Sources Work

The internet has a misinformation problem. Articles spread without scrutiny, videos mislead millions before anyone pushes back, and social media posts get shared faster than they can be fact-checked. Sources is a small attempt to fix that — a space where anyone can flag potentially false or misleading content, write a critique, and let others weigh in.

The idea is simple: the more eyes on bad information, the harder it is for it to go unchallenged.

---

## Browsing Sources

To see all available commands related to this feature, type: `sources`

To view a source that's already been added — along with all critiques written about it — run: `source <url>`

You'll see a list of critiques submitted by other users. Each entry shows a short preview and the author's name at the bottom, labeled `by:` — for example, `by: james`.

---

## Adding a Source

If you come across something online that you believe is false, misleading, or worth scrutinizing, you can add it:

`add-source <url>`

The URL should point directly to the article, video, post, or page in question — for example: `https://example.com/article`. Once added, it becomes visible to everyone and open for critique.

---

## Writing a Critique

To add a comment to any source — whether you added it or someone else did — run: `comment-on <url>`

You'll be prompted to write your critique. The editor supports **Markdown**, so you can use headings, bold text, links, lists, and more to make your argument clear and readable.

> **Note:** The Markdown editor is only available on desktop. On mobile, you can still submit plain text.

---

## Reading a Full Critique

The source view shows previews. To read a critique in full:

1. Copy the critique's **ID** from the list — it looks like this: `c383b3d4-7fca-4e7c-8166-1ced1938f1b9`
2. Run: `comment <id>`

You'll get the full text of that critique.

---

## Supporting Good Work

If a critique is well-researched, clearly written, or genuinely informative, you can support its author directly. Find their name at the bottom of the critique (e.g. `by: james`) and run:

`donate <name>`

It's a small way to reward people doing the work of keeping information honest.