# UI kit — Secret Spots Iceland marketing site

Click-through recreation of the four supplied desktop mockups. Open `index.html`; the pill switcher at the bottom moves between screens, and the site nav is live for Home / Tours / About.

| Screen | Source mockup |
| --- | --- |
| `Home.jsx` | `uploads/Desktop - 8.jpg` |
| `Tours.jsx` | `uploads/Desktop - 9.jpg` |
| `TourDetail.jsx` | `uploads/reykjanes-landing-page.jpg` |
| `About.jsx` | `uploads/reykjanes-landing-page-1.jpg` |

`Layout.jsx` holds the shared `Page` shell (Navbar + ContactPanel + Footer) and the `Section` wrapper that applies the 120px / 1200px layout rhythm. Every visible element comes from the component library — no local re-implementations.

Interactions that are real: page switching, nav links, FAQ accordion, tour-card hover lift and photo zoom, "Check Availability" confirmation dialog on the Tours page, enquiry-form submit state.

Content not present in the supplied mockups (extra day/multi-day tours beyond "Secret Reykjanes", two extra reviews) is plausible filler written in the brand voice and marked here so it is not mistaken for real product copy. Prices other than €149 and $1,700/group are invented.
