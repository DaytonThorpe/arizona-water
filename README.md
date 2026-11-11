# Arizona Water: an explorable map

Live at **https://water.howto115.com/** (GitHub Pages, served from the root of the `main` branch; `CNAME` sets the address).

Open `index.html` in a browser (no server needed), or use the single-file build `dist/arizona-water.html`.

## Embedding in a blog post

Upload `dist/arizona-water.html` and embed it full-width:

    <iframe src="/path/to/arizona-water.html" style="width:100%;height:85vh;border:0" title="Arizona water map"></iframe>

### Phones

The page is built phone-first: a bottom sheet in portrait, a side sheet in landscape, pinch to zoom, drag to pan.

On a phone the best experience is the page on its own (link to `arizona-water.html` directly, or make it the post itself). Inside an iframe the map takes over touch gestures, so keep the frame at `85vh` or less: that leaves a strip of the post above or below for readers to scroll past it. When the page detects it is framed it adds a ⤢ button that opens the full-screen version in a new tab; a visible "Open the full map" link under the iframe is also worth adding.

## Files

- `index.html`, `style.css`, `js/app.js`, `js/terrain.js`: the page and map engine (no dependencies; one Google Font).
- `content.js`: every word and number shown, each with a source link. Edit this to update figures.
- `data.js`: baked map data (terrain, land cover, rainfall, rivers, canals, groundwater areas, tribal lands, golf courses).
- `research/supply.md`, `research/demand.md`: the full sourced fact sheets, including what could not be verified.
- `build/fetch.sh` re-downloads the raw public data; `build/build_data.py <raw_dir> data.js` rebakes it (needs numpy + pillow); `build/bundle.py` makes the single-file build.

## Updating

Reservoir levels, shortage rules and deliveries in `content.js` are as of November 2026. Search that file for "2026" to find the time-sensitive figures.
