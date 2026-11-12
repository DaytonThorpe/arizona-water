/* Arizona reuses the original map's data and content files unchanged; this only adapts them to the multi-state app. */
window.MAPDATA = window.AZDATA;
window.MAPCONTENT = Object.assign(window.AZCONTENT, {
  meta: { title: 'Arizona Water: an explorable map', h1: 'Arizona Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of Arizona's water system. Use the Places list in the side panel to browse the same information without the map.", home: 'Show all of Arizona' },
});
