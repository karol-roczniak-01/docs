---
layout: ../../layouts/DocumentLayout.astro
title: "Privacy Policy"
---

# Privacy Policy

Last updated: March 2026

This Privacy Policy explains how ROBOTA-TEC ("we", "us") collects, uses, and protects your personal data. We are committed to compliance with the General Data Protection Regulation (GDPR) and applicable Polish data protection law.

---

## 1. Who We Are

19-18-8-103 is the data controller for personal data collected through this Platform. For any data-related questions, contact us at: **help@robotatec.com**

---

## 2. What Data We Collect

We collect the following personal data:

- **Account data:** username, email address, optional bio
- **Authentication data:** a salted password hash — your password is never stored in plain text
- **Contact data:** email address and optionally a phone number, provided when applying to a contract
- **Payment data:** transaction identifiers received from Stripe — we do not store card numbers or payment details directly
- **Technical data:** request logs accessible via Cloudflare infrastructure (IP addresses, timestamps, request paths), retained for operational and security purposes

We do not use analytics tools or advertising trackers of any kind.

---

## 3. How Authentication Works

When you log in or create an account, we issue a JSON Web Token (JWT) stored in a cookie with the following properties:

- **HttpOnly** — not accessible to JavaScript running in the browser
- **Secure** — transmitted only over HTTPS
- **SameSite: Lax** — provides protection against cross-site request forgery
- **Expiry** — the session lasts 30 days, after which you will need to log in again

No session data is stored server-side — authentication state is contained entirely within the signed token.

---

## 4. Why We Collect It

We process your data for the following purposes and legal bases:

| Purpose | Legal basis |
|---|---|
| Creating and managing your account | Performance of a contract (Art. 6(1)(b) GDPR) |
| Authenticating your sessions | Performance of a contract (Art. 6(1)(b) GDPR) |
| Processing payments via Stripe | Performance of a contract (Art. 6(1)(b) GDPR) |
| Delivering contact details after a successful payment | Performance of a contract (Art. 6(1)(b) GDPR) |
| Maintaining request logs for security and diagnostics | Legitimate interests (Art. 6(1)(f) GDPR) |
| Legal and financial compliance | Legal obligation (Art. 6(1)(c) GDPR) |

---

## 5. How We Share Your Data

We share your data only as necessary:

- **With other users:** when you apply to a contract and your payment is confirmed, your contact information (email, and phone if provided) is shared with the client who posted the contract. As a client, your contact details may similarly be shared with service providers who successfully apply to your contract.
- **With Stripe:** payment processing is handled by Stripe, Inc. Stripe may process data outside the EU; they maintain Standard Contractual Clauses and are certified under applicable transfer frameworks. See [stripe.com/privacy](https://stripe.com/privacy).
- **With Cloudflare:** the Platform runs on Cloudflare Workers and is served through Cloudflare's global network. Cloudflare processes request metadata as part of infrastructure operation. See [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/).

We do not sell your personal data to any third party.

---

## 6. International Transfers

Cloudflare operates a global network, which means your requests may be routed through servers outside the EU/EEA. Cloudflare maintains appropriate safeguards for such transfers in accordance with GDPR. Your data stored in our database (Cloudflare D1) remains within Cloudflare's infrastructure under these same safeguards.

---

## 7. Data Retention

- **Account data** is retained for as long as your account exists.
- **Contact data** submitted during contract applications is retained as part of the transaction record.
- **Request logs** are retained according to Cloudflare's default log retention settings and are not stored by us permanently.
- **Payment records** may be retained longer where required by Polish or EU financial regulations.

---

## 8. Your Rights

Under GDPR, you have the right to:

- **Access** the personal data we hold about you
- **Correct** inaccurate or incomplete data
- **Delete** your data ("right to be forgotten")
- **Restrict** or **object** to certain types of processing
- **Data portability** — receive your data in a structured, machine-readable format
- **Withdraw consent** at any time where processing is based on consent

To exercise any of these rights, contact us at: **help@robotatec.com**

Note: account deletion is currently handled manually. To request deletion, please contact us directly and we will process it within 30 days.

You also have the right to lodge a complaint with the Polish data protection authority (UODO): [uodo.gov.pl](https://uodo.gov.pl)

---

## 8. Cookies

We use a single cookie for session management — the authentication token described in Section 3. We do not use tracking, analytics, or advertising cookies.

---

## 9. Changes to This Policy

We may update this policy from time to time. We will notify you of significant changes via the Platform or by email.

---

## 10. Contact

For any privacy-related questions: **help@robotatec.com**