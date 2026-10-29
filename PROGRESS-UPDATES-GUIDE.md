# NSLC Progress & Updates — Editing Guide

This guide is for the NDE Sovereign Life Collective team. The public page is `updates.html`, visible at https://nde-collective.org/updates.html.

## How to publish a dated milestone from your laptop

1. Sign in to GitHub and open `hawkepuk/nde-sovereign-life-collective`.
2. Open `updates.html` and select the pencil **Edit** control.
3. Search for `<ol class="milestone-timeline">` inside the **OUR HISTORY** section.
4. Insert a new `<li class="milestone-item">` in chronological order, oldest first. Use the actual date of the accomplishment rather than the day you edit the site.
5. If the exact day is not confirmed, put the achievement in the undated news section until you have a documented date; don't invent a date.
6. Commit changes with a specific message, such as "Record November community milestone", and verify the live site after deployment.
7. Update the homepage's latest news summary when a new accomplishment deserves particular attention.

## Copyable milestone HTML

```html
<li class="milestone-item">
  <div class="milestone-date"><time datetime="2026-11-05">November 5, 2026</time></div>
  <article class="milestone-panel">
    <span class="eyebrow">COMMUNITY</span>
    <h3>Brief factual headline</h3>
    <p>Explain what actually happened, why it matters and any next steps.</p>
    <a class="text-link" href="contact.html">Learn more ↗</a>
  </article>
</li>
```

**The entry above is a template, not a real accomplishment; replace every example value before publishing.**

## Confirmed dates supplied by NSLC leadership

- August 4, 2026 — NDE Sovereign Life Collective established.
- August 17, 2026 — **Washington Secretary of State Charitable Organization Registration successfully filed**, Registration No. **2013537**, confirmed by an official letter dated August 17. This is a Washington filing, not proof of federal tax exemption or the present renewal status.
- September 11, 2026 — 501(c)(3) tax-exempt recognition received.
- October 2, 2026 — Business license obtained.
- October 28, 2026 — Public website leadership and progress sections were added.

Use appropriate primary documentation (formation documents, charitable organization registration or recognition document, IRS determination letter and business license) when preparing grant applications. **A business license does not by itself authorize land development or RV park operations.**

## Examples of milestones worth documenting

- A board action or policy approval (after checking what can be shared publicly).
- An actual volunteer or community event (date, location, what occurred, optional approved photos).
- A grant submitted or awarded (describe accurately; do not call an application an award).
- An executed partnership or letter of support (with the partner's permission).
- A land feasibility step, permit application or engineering assessment (never imply property ownership or approvals without supporting documents).
- A donation campaign or fundraising benchmark (only with verified figures and approved public disclosure).
- An approved program launch or completed learning session (state the actual attendance only if documented).

## Publishing rules

- Separate **completed**, **ongoing**, and **planned** work.
- Do not list unapproved grants as funding received.
- Do not publish donor identities, private volunteer details or personal contact information without consent.
- Label RV park drawings as concept art until construction is actually complete.
- Include evidence or a public reference link when available.
- Prefer original photos you have permission to publish.
- Recheck the page's dates and links after each update. Keep historical updates visible so visitors can see continuity.

## Google Ad Grants preflight checklist

Google's website policy: https://support.google.com/nonprofits/answer/1657899

- Clearly visible mission and nonprofit identity.
- Substantial original text about activities, not mostly images or placeholders.
- Contact information and relevant identifying organization information.
- Working navigation and internal page links.
- Fully functional, secure donations to the correct nonprofit.
- HTTPS throughout and proper HTTP-to-HTTPS redirect.
- Fast, accessible mobile layout.
- Clear distinction between existing programs and proposed facilities.
- A checked, published site before requesting another Ad Grants review.

**Already published:** EIN 42-4286493 and Washington Charitable Organization Registration No. 2013537, as supplied by leadership and the uploaded filing letter. **Still to verify manually:** live DNS / HTTPS redirect, mobile speed, correct organization and solicitation disclosures on Zeffy and GoFundMe checkout, city of the principal place of business for Washington fundraising disclosures, current charity-registration status and renewal date, and whether an annual report may be shared. Do not invent financial data or imply registration constitutes state endorsement.
