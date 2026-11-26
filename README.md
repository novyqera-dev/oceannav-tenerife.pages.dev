# OceanNav PRO

Auxiliary marine navigation PWA for Tenerife. Current release: **16.0.0-rc.2** (Connected preview); Premium and Professional features included. Requires field acceptance before operational reliance.

## Run and validate

```sh
npm ci --ignore-scripts
npm run check
npm test
npm run dev
```

`npm test` builds the explicit public asset allowlist before running navigation, DOM, coastline, offline-cache and Worker security tests. Production has no npm dependencies; Leaflet 1.9.4 is vendored with its BSD licence.

## Deploy

GitHub Actions tests every push to `main` or `feature/oceannav-pro`. The review branch uploads a version URL without replacing production. Main deploys to the existing Worker `oceannav-tenerife` using the existing GitHub secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Server source, tests and configuration are excluded from the public asset bundle.

## Capabilities and limits

- Premium: layered metallic SVG compass, distinct GPS COG and device orientation, day/dark/red night, landscape 70% map / 30% instruments.
- Professional: GPS track/GPX, real user dive points, guarded anchor watch, fixed MOB point, reviewed multipoint tracking with ETA. Coast proposals use OSM geometry from the Private.coffee public Overpass service (experimental, no availability guarantee), default margin 300 m, configurable 100–1000 m. They do not validate depths, obstacles, rules or navigability.
- Offline: app shell, saved data, saved proposed path and user-provided licensed GeoJSON layers. No OSM bulk download; no official offline ENC.
- Connected: read-only Signal K WSS adapter with external depth/heading/wind and AIS targets/indicative CPA. Requires actual compatible gateway, secure certificate and access. No direct CAN/PGN generation, no NMEA 2000 certification claim, no boat-control commands.
- Copilot: deterministic local status summary and browser speech; generative AI is gated and unavailable until configured and verified. Local summary is not generative AI.

## Optional services (not configured by this release)

`OCEANNAV_ACCESS_TOKEN`: long random private service secret, stored with Cloudflare secrets; never commit it. User enters the access code for the current session only.

`OPEN_METEO_API_KEY`: valid commercial Open-Meteo key, stored server-side. Free API is not used for business operation. Private proxy quantizes model coordinates to 0.01° and validates the Canary Islands region. Access and model uptime remain unverified until credentials are supplied securely.

Optional Cloudflare Workers AI binding `AI` (see official configuration docs). The code supports the Llama 3.1 8B Instruct Fast model; no binding or billable inference is enabled automatically. Before enabling paid/public services, configure account spending/rate limits, validate the provider and complete end-to-end tests. `/api/capabilities` reports actual configured services.

Official ENC: requires a selected provider, rights for display/offline use, update handling and a chart engine. The IHM catalogue link is a reference only and is not an integrated chart.

## Field acceptance still required

Android and iOS GPS/compass, alarm sound/volume, wake lock and screen suspension, marine GPS reception, MOB drills, vessel electronics and WSS gateway, actual AIS and depth offsets, real licensed forecast and AI requests, and official ENC. The browser can suspend GPS and alarms when hidden; no background alarm guarantee is made.

## Sources

- https://operations.osmfoundation.org/policies/tiles/
- https://www.openstreetmap.org/copyright
- https://osm.hpi.de/overpass/
- https://emodnet.ec.europa.eu/en/terms-use-emodnet-online-services-data-and-data-products
- https://www.gebco.net/
- https://open-meteo.com/en/pricing
- https://signalk.org/specification/1.8.4/doc/subscription_protocol.html
- https://www.nmea.org/nmea-2000.html
- https://armada.defensa.gob.es/ihm/Aplicaciones/Catalogo/CatalogoWeb.html
- https://developers.cloudflare.com/workers/versions-and-deployments/version-urls/
