# NSLC Progress & Updates — Editing Guide

This guide is for the NDE Sovereign Life Collective team. The public page is `updates.html`, visible at https://nde-collective.org/updates.html.

## How to publish a new update from your laptop

1. Sign in to GitHub and open `hawkepuk/nde-sovereign-life-collective`.
2. Open `updates.html` and select the pencil **Edit** control.
3. Find the comment marked **EDITING GUIDE** near the end of the main content, or search for `ORGANIZATIONAL NEWS`.
4. Find the first `<div class="three-up">` after `ORGANIZATIONAL NEWS`. Add a new `<article class="feature-card">` at the top of this grid, before the earlier entries.
5. Change the date, category, headline, paragraph, and destination link. Use the event date, not the date you happen to update the site. The `datetime` attribute must be `YYYY-MM-DD`.
6. Use **Commit changes** with a meaningful message, such as "Post October community partnership update".
7. If the new announcement changes the featured update on the homepage, edit `index.html`: find `LATEST FROM NSLC` and update its date and summary to reflect your new post.
8. Open the public Progress page after deployment and check its appearance and links on a laptop and phone.

## Copyable HTML entry

```html
<article class="feature-card">
  <span class="card-index">
    <time datetime="2026-11-05">NOVEMBER 5, 2026</time> · COMMUNITY
  </span>
  <h3>Brief factual headline</h3>
  <p>Explain exactly what happened, who was involved (with permission), why it matters to the mission, and the next step. Do not overstate the result.</p>
  <a class="text-link" href="contact.html">Learn more ↗</a>
</article>
```

**The date, headline and description above are examples only. Do not publish them as a real event without replacing all placeholder content.**

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

**Still to verify manually:** live DNS / HTTPS redirect, mobile loading and speed, correct organization on Zeffy and GoFundMe checkout, and whether NSLC wishes to publish its EIN, charity registration or public annual report. Do not invent an EIN or public financial data.
