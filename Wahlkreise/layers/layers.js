var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Geometrie_Wahlkreise_20DBT_1 = new ol.format.GeoJSON();
var features_Geometrie_Wahlkreise_20DBT_1 = format_Geometrie_Wahlkreise_20DBT_1.readFeatures(json_Geometrie_Wahlkreise_20DBT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geometrie_Wahlkreise_20DBT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geometrie_Wahlkreise_20DBT_1.addFeatures(features_Geometrie_Wahlkreise_20DBT_1);
var lyr_Geometrie_Wahlkreise_20DBT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geometrie_Wahlkreise_20DBT_1, 
                style: style_Geometrie_Wahlkreise_20DBT_1,
                interactive: true,
                title: '<img src="styles/legend/Geometrie_Wahlkreise_20DBT_1.png" /> Geometrie_Wahlkreise_20DBT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Geometrie_Wahlkreise_20DBT_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Geometrie_Wahlkreise_20DBT_1];
lyr_Geometrie_Wahlkreise_20DBT_1.set('fieldAliases', {'WKR_NR': 'WKR_NR', 'WKR_NAME': 'WKR_NAME', 'LAND_NR': 'LAND_NR', 'LAND_NAME': 'LAND_NAME', });
lyr_Geometrie_Wahlkreise_20DBT_1.set('fieldImages', {'WKR_NR': '', 'WKR_NAME': '', 'LAND_NR': '', 'LAND_NAME': '', });
lyr_Geometrie_Wahlkreise_20DBT_1.set('fieldLabels', {'WKR_NR': 'no label', 'WKR_NAME': 'no label', 'LAND_NR': 'no label', 'LAND_NAME': 'no label', });
lyr_Geometrie_Wahlkreise_20DBT_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});