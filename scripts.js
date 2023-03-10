var options = { attribution: "(c) OpenStreetMap Contributors" };
var basemap1 = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", options);
var basemap2 = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", options);
var basemap3 = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", options);
var basemap4 = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", options);
var basemap5 = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", options);

var wms_server1 = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer?";
var wms_options1 = {
    format: "image/png",
    transparent: true,
    opacity: 1,
    attribution: "NOAA",
};

var wms_server2 = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_imagery_time/MapServer/WMSServer?";
var wms_options2 = {
    format: "image/png",
    transparent: true,
    opacity: 0.9,
    attribution: "NOAA",
};

var wms_server3 = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?";
var wms_options3 = {
    format: "image/png",
    transparent: true,
    opacity: 1,
    attribution: "NOAA",
};

var wms_server4 = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer?";
var wms_options4 = {
    format: "image/png",
    transparent: true,
    opacity: 0.5,
    attribution: "NOAA",
};

var wms_server5 = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_rtma_time/MapServer/WMSServer?";
var wms_options5 = {
    format: "image/png",
    transparent: true,
    opacity: 0.5,
    attribution: "NOAA",
};

var map1 = L.map("map1").setView([36.8283, -98.5795], 4);
basemap1.addTo(map1);
var precipitation1a = L.tileLayer.wms(wms_server4, { ...wms_options4, layers: "7" }).addTo(map1);
var precipitation1b = L.tileLayer.wms(wms_server1, { ...wms_options1, layers: "1" }).addTo(map1);

var map2 = L.map("map2").setView([36.8283, -98.5795], 4);
basemap2.addTo(map2);
var precipitation2a = L.tileLayer.wms(wms_server4, { ...wms_options4, layers: "7" }).addTo(map2);
var precipitation2b = L.tileLayer.wms(wms_server2, { ...wms_options2, layers: "5" }).addTo(map2);


var map3 = L.map("map3").setView([36.8283, -98.5795], 4);
basemap3.addTo(map3);
var precipitation3a = L.tileLayer.wms(wms_server4, { ...wms_options4, layers: "7" }).addTo(map3);
var precipitation3b = L.tileLayer.wms(wms_server3, { ...wms_options3, layers: "1" }).addTo(map3);

var map4 = L.map("map4").setView([36.8283, -98.5795], 4);
basemap4.addTo(map4);
var precipitation4a = L.tileLayer.wms(wms_server4, { ...wms_options4, layers: "7" }).addTo(map4);
var precipitation4b = L.tileLayer.wms(wms_server5, { ...wms_options5, layers: "17" }).addTo(map4);