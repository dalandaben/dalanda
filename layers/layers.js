var wms_layers = [];

var format_tun_gouvernorats_utm_0 = new ol.format.GeoJSON();
var features_tun_gouvernorats_utm_0 = format_tun_gouvernorats_utm_0.readFeatures(json_tun_gouvernorats_utm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tun_gouvernorats_utm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tun_gouvernorats_utm_0.addFeatures(features_tun_gouvernorats_utm_0);
var lyr_tun_gouvernorats_utm_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tun_gouvernorats_utm_0, 
                style: style_tun_gouvernorats_utm_0,
                interactive: true,
    title: 'tun_gouvernorats_utm<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_0.png" /> Ariana<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_1.png" /> Beja<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_2.png" /> Ben Arous<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_3.png" /> Bizerte<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_4.png" /> Gabes<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_5.png" /> Gafsa<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_6.png" /> Jendouba<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_7.png" /> Kairouan<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_8.png" /> Kasserine<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_9.png" /> Kebili<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_10.png" /> Le Kef<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_11.png" /> Mahdia<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_12.png" /> Manouba<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_13.png" /> Medenine<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_14.png" /> Monastir<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_15.png" /> Nabeul<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_16.png" /> Sfax<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_17.png" /> Sidi Bou Zid<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_18.png" /> Siliana<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_19.png" /> Sousse<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_20.png" /> Tataouine<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_21.png" /> Tozeur<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_22.png" /> Tunis<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_23.png" /> Zaghouan<br />'
        });
var format_Reprojet_1 = new ol.format.GeoJSON();
var features_Reprojet_1 = format_Reprojet_1.readFeatures(json_Reprojet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojet_1.addFeatures(features_Reprojet_1);
var lyr_Reprojet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojet_1, 
                style: style_Reprojet_1,
                interactive: true,
    title: 'Reprojeté<br />\
    <img src="styles/legend/Reprojet_1_0.png" /> Ariana<br />\
    <img src="styles/legend/Reprojet_1_1.png" /> Beja<br />\
    <img src="styles/legend/Reprojet_1_2.png" /> Ben Arous<br />\
    <img src="styles/legend/Reprojet_1_3.png" /> Bizerte<br />\
    <img src="styles/legend/Reprojet_1_4.png" /> Gabes<br />\
    <img src="styles/legend/Reprojet_1_5.png" /> Gafsa<br />\
    <img src="styles/legend/Reprojet_1_6.png" /> Jendouba<br />\
    <img src="styles/legend/Reprojet_1_7.png" /> Kairouan<br />\
    <img src="styles/legend/Reprojet_1_8.png" /> Kasserine<br />\
    <img src="styles/legend/Reprojet_1_9.png" /> Kebili<br />\
    <img src="styles/legend/Reprojet_1_10.png" /> Le Kef<br />\
    <img src="styles/legend/Reprojet_1_11.png" /> Mahdia<br />\
    <img src="styles/legend/Reprojet_1_12.png" /> Manouba<br />\
    <img src="styles/legend/Reprojet_1_13.png" /> Medenine<br />\
    <img src="styles/legend/Reprojet_1_14.png" /> Monastir<br />\
    <img src="styles/legend/Reprojet_1_15.png" /> Nabeul<br />\
    <img src="styles/legend/Reprojet_1_16.png" /> Sfax<br />\
    <img src="styles/legend/Reprojet_1_17.png" /> Sidi Bou Zid<br />\
    <img src="styles/legend/Reprojet_1_18.png" /> Siliana<br />\
    <img src="styles/legend/Reprojet_1_19.png" /> Sousse<br />\
    <img src="styles/legend/Reprojet_1_20.png" /> Tataouine<br />\
    <img src="styles/legend/Reprojet_1_21.png" /> Tozeur<br />\
    <img src="styles/legend/Reprojet_1_22.png" /> Tunis<br />\
    <img src="styles/legend/Reprojet_1_23.png" /> Zaghouan<br />'
        });

lyr_tun_gouvernorats_utm_0.setVisible(true);lyr_Reprojet_1.setVisible(true);
var layersList = [lyr_tun_gouvernorats_utm_0,lyr_Reprojet_1];
lyr_tun_gouvernorats_utm_0.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_Reprojet_1.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_tun_gouvernorats_utm_0.set('fieldImages', {'IDG': 'TextEdit', 'NOMG': 'TextEdit', 'IDPAYS': 'TextEdit', });
lyr_Reprojet_1.set('fieldImages', {'IDG': 'TextEdit', 'NOMG': 'TextEdit', 'IDPAYS': 'TextEdit', });
lyr_tun_gouvernorats_utm_0.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_Reprojet_1.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_Reprojet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});