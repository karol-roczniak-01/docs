---
layout: ../../layouts/DocumentLayout.astro
title: "How to Use It"
---

# How to Use It

This app runs in your browser ([robotatec.com](https://robotatec.com)) as a text-based interface — you interact by typing commands rather than clicking buttons. If that's new to you, don't worry. It's simpler than it looks.

---

## What You're Looking At

You'll see a cursor next to a `$` symbol. That's where you type. Press **Enter** to run a command, and the result appears just below.

Type `help` to see everything you can do. Commands are grouped by category — type the category name (like `users`, `orgs`, `contracts`, or `sources`) to see what's available in each.

---

## Entering Commands

Commands are short words, sometimes followed by extra details. For example:

- `help` — shows all available commands
- `my-contracts` — lists your contracts
- `apply-to <id>` — applies to a contract by its ID
- `user <name>` — shows someone's profile
- `source <url>` — views a source with its comments

When you see `<something>` in a command, replace the whole thing — brackets included — with your actual value.

---

## Accounts and Sessions

Some commands require you to be logged in. Use `login` to sign in or `create-account` to register. Once logged in, `whoami` shows your current profile and `logout` ends your session.

---

## Multi-Step Commands

Some commands ask you questions one at a time before doing anything. For example, `login` will first ask for your username, then your password.

The `$` symbol changes to the name of the field being asked — like `email:` or `password:` — so you always know what's expected. Just type your answer and press **Enter** to move to the next step.

Some fields are optional. If a step can be skipped, just press **Enter** without typing anything.

---

## Cancelling

If you're in the middle of a multi-step command and want to stop, type `cancel` and press **Enter** — or press **Escape**. The prompt will clear and you can start over.