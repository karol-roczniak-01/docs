---
layout: ../../layouts/DocumentLayout.astro
title: "How Contracts Work"
---

# How Contracts Work

Contracts act as a smart matching tool between people who need work done and organizations that can do it. The system understands what each party offers or needs, then surfaces relevant matches automatically.

---

## Creating a Contract (as a Client)

If you need work done, start by creating a contract:

1. Run the `create-contract` command.
2. Describe what you need.
3. Add your contact information and an end date.
4. Hit **Enter** — your contract is now live.

To review all your active contracts and who applied at any time, use: `my-contracts`

---

## Applying to Contracts (as a Service Provider)

### 1. Set Up Your Organization

Before searching for contracts, you need an organization profile. Create one with command: `create-org`. Enter a name and a short description of what your organization does.

### 2. How Matching Works

Each contract and organization is converted into a vector — an array of numbers that captures its semantic meaning. This allows the system to surface contracts that are genuinely relevant to what your organization does, rather than relying on simple keyword matching.

### 3. Find Relevant Contracts

Run the `find-contracts` command to see contracts matched to your organization:

You'll see a match score (e.g. **70%**) alongside each result. This is a relevance indicator — useful as a signal, but not something to over-optimize for.

### 4. Apply to a Contract

1. Copy the contract **ID** from the results. It looks similar to this: 6a7129ae-cfa5-4718-ab04-25156741d890
2. Run the apply command: `apply-to <paste id here>`
3. Complete the checkout form to finalize your application.

> **Pricing note:** The cost per qualified lead varies by industry and market. In this app, it's a flat fee — check the current rate inside the app or contact support if you have questions.

---

## After Payment

Once your payment is processed, retrieve your customer's contact details with `applications` command.

From here you'll have everything you need — email or phone — to reach out and move the deal forward. That's where the platform's role ends, and yours begins.