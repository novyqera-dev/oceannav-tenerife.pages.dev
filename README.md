# OceanNav Tenerife

PWA de prueba con GPS, velocidad SOG, rumbo COG, mapa OpenStreetMap, grabación local de track GPX y viento modelizado Open-Meteo.

## Despliegue
Conectar este repositorio a Cloudflare Pages: Framework preset **None**, build command vacío, output directory `/`.

## Limitaciones
No es carta náutica oficial; no incorpora batimetría, sonda, avisos oficiales ni mapas offline. Las bibliotecas de mapa se descargan de CDN y requieren conexión. El navegador puede suspender el GPS en segundo plano. Se requieren pruebas en Android físico. No usar para decisiones críticas de navegación.
