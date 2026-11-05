# NSLC Progress & Updates — Editing Guide

This guide is for the NDE Sovereign Life Collective team. The public page is `updates.html`, visible at https://nde-collective.org/updates.html.

## How to publish a dated milestone from your laptop

1. Sign in to GitHub and open `hawkepuk/nde-sovereign-life-collective`.
2. Open `updates.html` and select the pencil **Edit** control.
3. Search for `<ol class="milestone-timeline">` inside the **OUR HISTORY** section.
4. Insert a new `<li class="milestone-item">` in reverse chronological order, **newest first**, so visitors see the latest confirmed update at the top. Use the actual date of the accomplishment rather than the day you edit the site.
5. If the exact day is not confirmed, put the achievement in the undated news section until you have a documented date; don't invent a date.
6. Commit changes with a specific message, such as "Record November community milestone", and verify the live site after deployment.
7. The homepage news ticker and featured latest update automatically read the newest dated milestones from `updates.html`; no second homepage edit is normally needed. Verify both after publishing.

## Copyable milestone HTML

```html
<li class="milestone-item" id="unique-milestone-slug">
  <div class="milestone-date"><time datetime="2026-11-05">November 5, 2026</time></div>
  <article class="milestone-panel">
    <span class="eyebrow">COMMUNITY</span>
    <h3>Brief factual headline</h3>
    <p>Explain what actually happened, why it matters and any next steps.</p>
    <a class="text-link" href="contact.html">Learn more ↗</a>
  </article>
</li>
```

**The entry above is a template, not a real accomplishment; replace every example value before publishing.** Give each milestone a unique `id` so the homepage ticker can link directly to it.

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
- Recheck the page's dates and links after each update. Keep dated milestones in **newest-first order** and historical updates visible so visitors can see continuity.

## Google Ad Grants preflight checklist

**November 4, 2026 retest (7:24 PM PST, results supplied by NSLC):** Mobile Performance **88**, Accessibility **100**, Best Practices **100**, SEO **100** (LCP **3.8 s**, payload approximately **3,194 KiB**). Desktop Performance **100**, Accessibility **100**, Best Practices **100**, SEO **100** (LCP **0.7 s**). The previous mobile accessibility warning is no longer reported; significant speed and payload improvements followed the audio preload and navigation accessibility changes. These are point-in-time Lighthouse lab measurements, not a guarantee of performance across visitors or of Ad Grants approval. Manual accessibility checks and confirmation that HTTP redirects to HTTPS are still recommended.



**Lighthouse baseline from November 4, 2026 (user-provided PageSpeed results):** Mobile: Performance 74, Accessibility 94, Best Practices 100, SEO 100; Desktop: Performance 88, Accessibility 100, Best Practices 100, SEO 100. Mobile report flagged an unnamed button and LCP 43.7 seconds with approximately 10.5 MB of network payload. Remediation committed: add accessible navigation labels, postpone loading the ~7.4 MB anthem until Play, and preload the homepage hero image. **Run a fresh mobile and desktop test after deployment before treating the improvements as verified.**



**Verified by NSLC leadership on November 4, 2026:** The website's outbound links to GoFundMe and Zeffy were tested and confirmed to open and function as intended. This is a link-functionality confirmation, not a verified test donation, payment settlement, or review of the platforms' charity disclosures.



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
