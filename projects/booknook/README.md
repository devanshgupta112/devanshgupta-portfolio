# BookNook Marketing Website

A premium, responsive landing page for **BookNook**, positioned as an Android app for visual book discovery. The site is built as a clean static frontend with real app screenshots, subtle motion, and launch-ready copy across all requested sections.

## Files

- `index.html` contains the full landing page structure and all section copy.
- `privacy.html` gives the footer a real privacy destination you can replace with your final legal copy later.
- `styles.css` contains the design system, responsive layout, and motion styling.
- `script.js` powers the mobile navigation, FAQ accordion, and reveal animations.
- `assets/mockups/README.md` lists the suggested screenshot slots, and the matching `.txt` files explain what each screenshot should show.
- `assets/copy/` contains copy-paste text for hero copy, SEO metadata, and supporting launch messaging.
- `assets/links/android-app-link.txt` is the placeholder file for your future Android install or invite link.

## Run locally

Open `index.html` directly in a browser, or serve the folder with a simple static server.

Example:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Screenshot Notes

The landing page now uses the screenshots in `assets/mockups/` directly.

- `assets/mockups/home_feed.png`
  Used for the hero phone screenshot.
- `assets/mockups/book_detail.png`
  Used in the product showcase for the detail view.
- `assets/mockups/create_post.png`
  Used in the product showcase for the create flow.
- `assets/mockups/library.png`
  Used in the product showcase for the library view.
- `assets/mockups/profile page.png`
  Used in the product showcase for the profile view.

To swap a screenshot later, update the matching `src` in `index.html` and keep the surrounding container so the layout and styling stay intact.

## Download Handoff

The primary landing-page CTA now downloads the bundled Android APK directly.

If you want to ship a newer build later:

1. Replace `assets/downloads/booknook-release.apk` with the latest APK.
2. Keep the same filename if you want all existing CTA links to keep working.
3. Update the download copy if the install flow or file details change.

## Design Direction

- Editorial serif headlines with a clean modern sans-serif body
- Literary palette based on the provided burgundy, rose, parchment, and paper tones
- Rounded cards, layered surfaces, soft shadows, and subtle reveal animations
- Fully responsive layout for desktop, tablet, and mobile
