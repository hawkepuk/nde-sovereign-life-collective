# NDE Sovereign Life Collective — Premium Website Rebuild

Complete static HTML/CSS/JavaScript redesign for **https://nde-collective.org**. Designed for the existing GitHub Pages repository (`hawkepuk/nde-sovereign-life-collective`).

## Pages included

- `index.html` — premium landing page
- `about.html` — organization story and values
- `mission.html` — mission and program commitments
- `programs.html` — programming and accurate planning status
- `rv-park.html` — wellness campus, floor plan, 60–80-acre 50/50 vision and proposed separate event center
- `concepts.html` — expandable image gallery, accurate concept art captions
- `donate.html` — existing NSLC Zeffy and GoFundMe campaigns
- `grants.html` — grants and partnerships (new)
- `contact.html` — working email/telephone links, without a fake submission form
- `privacy.html` — disclosure draft (new)
- `404.html`, `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll`, `favicon.svg`
- `assets/css/styles.css` — shared premium theme and mobile responsive styles
- `assets/js/main.js` — responsive menu and image dialog
- `assets/images/` — your three supplied images, WebP optimized and originals

## BEFORE publishing (important)

1. **Back up the current GitHub repository** and preview this redesign before replacing any page. Replacing files has not been performed automatically.
2. **Preserve your official NSLC logo** already stored at `assets/images/NSLC Logo with Name.png` in your existing repository. This package intentionally does not substitute a fabricated logo. The pages point to that existing path, and show an elegant text fallback if the file is absent. When uploading, merge this package with your existing repository rather than deleting all existing assets.
3. Confirm that the primary contact email `hawkepuk@gmail.com`, phone `(509) 862-8201`, mailing address `P.O. Box 672, Colbert, WA 99005`, and Facebook link should still be public.
4. Test donation links: Zeffy `https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-25837` and GoFundMe `https://www.gofundme.com/f/help-nde-sovereign-life-collective-become-an-official-nonpro`. The links are preserved from the previously published site; donation campaigns and their state can change independently.
5. Verify that the historic-inspired illustration is authorized for public use. It is explicitly labeled as an artistic illustration, **not** a historic photograph or evidence of the identity of actual chiefs. Replace it if the organization's cultural review prefers another presentation.
6. Verify exact nonprofit legal name and 501(c)(3) documentation. No EIN, grant awards, land ownership, constructed facilities, fundraising progress or currently operating programs have been invented.
7. The privacy page is a good-faith draft for this static configuration; seek legal review if collecting analytics, using embeds or accepting form submissions directly.
8. Preview mobile and desktop. GitHub Pages will publish pages once you commit the changes to the configured deployment branch.
9. This package doesn't include a backend. Contact uses direct `mailto:` and telephone links, and payments use third-party fundraising providers. No misleading or non-functional web forms.

## Deploy to GitHub Pages

1. Open your `nde-sovereign-life-collective` repository on GitHub.
2. Upload/reconcile all files inside **this folder** to the repository root, retaining the preexisting official logo and any assets you still want to keep.
3. Check the `CNAME` file remains `nde-collective.org` and that your repository Pages settings still point to the right branch/folder.
4. Commit and test links and images, especially `/grants.html`, `/privacy.html`, and the three imagery assets.
5. Test email links, donation destinations, mobile menu, lightbox keyboard close, and accessibility.

## Suggested further refinements

- Obtain professionally verified and community-approved cultural photography and biographies.
- Add the Event Center rendering once available. It is described but not falsely depicted by the provided RV Park master plan.
- Publish verified budgets and live campaign progress only when documented.
- Consider a domain-based email (e.g., contact@nde-collective.org) once configured.
- Once a suitable parcel is identified, update geography, program scope and legal conservation commitments.

## Design notes

Responsive dark green / gold / cream visual system; one shared CSS file; native system fonts; no frontend framework, tracking scripts, third-party embeds or build process required. Image gallery uses native HTML `<dialog>`. Accessibility includes a skip link, visible focus indicators, reduced-motion setting, alt text, labeled buttons and mobile navigation state.