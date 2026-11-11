#!/bin/bash
# Re-downloads every raw input used by build_data.py into ./raw (public data, no keys needed).
set -e; mkdir -p raw/{dem,ne,cdl,prism,adwr,osm}; cd raw
for x in 23 24 25; do for y in 49 50 51 52; do curl -s -o dem/7_${x}_${y}.png "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/7/${x}/${y}.png"; done; done
NE=https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson
for f in ne_10m_rivers_lake_centerlines ne_10m_rivers_north_america ne_10m_lakes ne_10m_lakes_north_america; do curl -s -o ne/$f.geojson "$NE/$f.geojson"; done
curl -s -o counties-10m.json https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/counties-10m.json
curl -s -o prism/annual.zip "https://data.prism.oregonstate.edu/normals/us/4km/ppt/monthly/prism_ppt_us_25m_2020_avg_30y.zip"; (cd prism && unzip -o -q annual.zip)
curl -s -o cdl/lc.png "https://ic.imagery1.arcgis.com/arcgis/rest/services/Sentinel2_10m_LandCover/ImageServer/exportImage?bbox=-115.2,31.15,-108.8,37.35&bboxSR=4326&imageSR=4326&size=1960,2300&format=png&f=image"
Q="query?where=1%3D1&outFields=*&outSR=4326&f=geojson&geometryPrecision=4&maxAllowableOffset=0.003"
ADWR=https://services.arcgis.com/C34zQ7veRS0V1t04/arcgis/rest/services
CAP=https://services1.arcgis.com/osPHyJW29upTLmlM/arcgis/rest/services
curl -s -o adwr/ama_ina.geojson "$ADWR/AMA_INA_2024/FeatureServer/0/$Q"
curl -s -o adwr/basins.geojson "$ADWR/Groundwater_Basin_2024/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson&geometryPrecision=3&maxAllowableOffset=0.005"
curl -s -o adwr/cap_canal.geojson "$CAP/CAP_Canal/FeatureServer/0/$Q"
curl -s -o adwr/crb_canals.geojson "$CAP/Colorado_River_Basin_Canals/FeatureServer/0/$Q"
curl -s -o adwr/ama_hist.json "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/Active_Management_Areas_Updated/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&f=json"
curl -s -o adwr/tribal.geojson -G "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/AIANNHA/MapServer/47/query" --data-urlencode "geometry=-115.2,31.15,-108.8,37.35" -d geometryType=esriGeometryEnvelope -d inSR=4326 -d outSR=4326 -d "outFields=NAME,BASENAME" -d f=geojson -d maxAllowableOffset=0.005 -d geometryPrecision=3
curl -s -A "az-water-map-build/1.0" -o osm/golf.json --data-urlencode 'data=[out:json][timeout:90];area["ISO3166-2"="US-AZ"]->.a;(way["leisure"="golf_course"](area.a);relation["leisure"="golf_course"](area.a););out center tags;' https://overpass-api.de/api/interpreter
