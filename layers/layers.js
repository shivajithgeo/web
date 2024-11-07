var wms_layers = [];

var format_clip_Road_0 = new ol.format.GeoJSON();
var features_clip_Road_0 = format_clip_Road_0.readFeatures(json_clip_Road_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_0.addFeatures(features_clip_Road_0);
var lyr_clip_Road_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_0, 
                style: style_clip_Road_0,
                popuplayertitle: "clip_Road",
                interactive: true,
                title: '<img src="styles/legend/clip_Road_0.png" /> clip_Road'
            });
var format_clip_SOIL_1 = new ol.format.GeoJSON();
var features_clip_SOIL_1 = format_clip_SOIL_1.readFeatures(json_clip_SOIL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_SOIL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_SOIL_1.addFeatures(features_clip_SOIL_1);
var lyr_clip_SOIL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_SOIL_1, 
                style: style_clip_SOIL_1,
                popuplayertitle: "clip_SOIL",
                interactive: true,
    title: 'clip_SOIL<br />\
    <img src="styles/legend/clip_SOIL_1_0.png" /> clay<br />\
    <img src="styles/legend/clip_SOIL_1_1.png" /> gravelly clay<br />\
    <img src="styles/legend/clip_SOIL_1_2.png" /> gravelly loam<br />\
    <img src="styles/legend/clip_SOIL_1_3.png" /> loam<br />\
    <img src="styles/legend/clip_SOIL_1_4.png" /> sandy<br />\
    <img src="styles/legend/clip_SOIL_1_5.png" /> <br />'
        });
var format_clip_DRAINAGE_2 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_2 = format_clip_DRAINAGE_2.readFeatures(json_clip_DRAINAGE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_DRAINAGE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_2.addFeatures(features_clip_DRAINAGE_2);
var lyr_clip_DRAINAGE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_2, 
                style: style_clip_DRAINAGE_2,
                popuplayertitle: "clip_DRAINAGE",
                interactive: true,
    title: 'clip_DRAINAGE<br />\
    <img src="styles/legend/clip_DRAINAGE_2_0.png" /> 0<br />\
    <img src="styles/legend/clip_DRAINAGE_2_1.png" /> 1<br />\
    <img src="styles/legend/clip_DRAINAGE_2_2.png" /> 2<br />\
    <img src="styles/legend/clip_DRAINAGE_2_3.png" /> 3<br />\
    <img src="styles/legend/clip_DRAINAGE_2_4.png" /> 4<br />\
    <img src="styles/legend/clip_DRAINAGE_2_5.png" /> 5<br />\
    <img src="styles/legend/clip_DRAINAGE_2_6.png" /> 6<br />\
    <img src="styles/legend/clip_DRAINAGE_2_7.png" /> <br />'
        });
var format_clip_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_clip_GEOMORPHOLOGY_3 = format_clip_GEOMORPHOLOGY_3.readFeatures(json_clip_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_GEOMORPHOLOGY_3.addFeatures(features_clip_GEOMORPHOLOGY_3);
var lyr_clip_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_GEOMORPHOLOGY_3, 
                style: style_clip_GEOMORPHOLOGY_3,
                popuplayertitle: "clip_GEOMORPHOLOGY",
                interactive: true,
    title: 'clip_GEOMORPHOLOGY<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_1.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_2.png" /> Coastal Plain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_3.png" /> Denudational Hills<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_4.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_5.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_6.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_7.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_8.png" /> Marshy<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_9.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_10.png" /> Pebble Bed<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_11.png" /> Piedmont Zone<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_12.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_13.png" /> Residual Hill<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_14.png" /> Residual Mount<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_15.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_16.png" /> Rock Exposure<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_17.png" /> Stabilized channel bar (Flood Plain)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_18.png" /> Structural Valley<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_19.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_20.png" /> Valley<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_21.png" /> Valley Fill<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_22.png" /> Water Body<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_3_23.png" /> <br />'
        });
var format_DAMS_4 = new ol.format.GeoJSON();
var features_DAMS_4 = format_DAMS_4.readFeatures(json_DAMS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAMS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAMS_4.addFeatures(features_DAMS_4);
var lyr_DAMS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAMS_4, 
                style: style_DAMS_4,
                popuplayertitle: "DAMS",
                interactive: true,
                title: '<img src="styles/legend/DAMS_4.png" /> DAMS'
            });

lyr_clip_Road_0.setVisible(true);lyr_clip_SOIL_1.setVisible(true);lyr_clip_DRAINAGE_2.setVisible(true);lyr_clip_GEOMORPHOLOGY_3.setVisible(true);lyr_DAMS_4.setVisible(true);
var layersList = [lyr_clip_Road_0,lyr_clip_SOIL_1,lyr_clip_DRAINAGE_2,lyr_clip_GEOMORPHOLOGY_3,lyr_DAMS_4];
lyr_clip_Road_0.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_clip_SOIL_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_clip_DRAINAGE_2.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_clip_GEOMORPHOLOGY_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_DAMS_4.set('fieldAliases', {'DAM': 'DAM', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'PHOTO': 'PHOTO', });
lyr_clip_Road_0.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_clip_SOIL_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERSOIL_': 'Range', 'KERSOIL_ID': 'Range', 'CODE': 'Range', 'MAP_SYMBOL': 'TextEdit', 'DEPTH': 'TextEdit', 'TEXTURE': 'TextEdit', 'SLOPE': 'TextEdit', 'DRAINAGE': 'TextEdit', });
lyr_clip_DRAINAGE_2.set('fieldImages', {'ORDER1': 'Range', });
lyr_clip_GEOMORPHOLOGY_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_DAMS_4.set('fieldImages', {'DAM': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_clip_Road_0.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clip_SOIL_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'inline label - always visible', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_clip_DRAINAGE_2.set('fieldLabels', {'ORDER1': 'inline label - always visible', });
lyr_clip_GEOMORPHOLOGY_3.set('fieldLabels', {'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_DAMS_4.set('fieldLabels', {'DAM': 'inline label - always visible', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'PHOTO': 'no label', });
lyr_DAMS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});