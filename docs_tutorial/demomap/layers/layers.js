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
var format_vector_analysisschools_34s_1 = new ol.format.GeoJSON();
var features_vector_analysisschools_34s_1 = format_vector_analysisschools_34s_1.readFeatures(json_vector_analysisschools_34s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_analysisschools_34s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_analysisschools_34s_1.addFeatures(features_vector_analysisschools_34s_1);
var lyr_vector_analysisschools_34s_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_analysisschools_34s_1, 
                style: style_vector_analysisschools_34s_1,
                interactive: true,
                title: '<img src="styles/legend/vector_analysisschools_34s_1.png" /> vector_analysis schools_34s'
            });
var format_vector_analysisroads_34s_2 = new ol.format.GeoJSON();
var features_vector_analysisroads_34s_2 = format_vector_analysisroads_34s_2.readFeatures(json_vector_analysisroads_34s_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_analysisroads_34s_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_analysisroads_34s_2.addFeatures(features_vector_analysisroads_34s_2);
var lyr_vector_analysisroads_34s_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_analysisroads_34s_2, 
                style: style_vector_analysisroads_34s_2,
                interactive: true,
                title: '<img src="styles/legend/vector_analysisroads_34s_2.png" /> vector_analysis roads_34s'
            });
var format_vector_analysisrestaurants_34s_3 = new ol.format.GeoJSON();
var features_vector_analysisrestaurants_34s_3 = format_vector_analysisrestaurants_34s_3.readFeatures(json_vector_analysisrestaurants_34s_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_analysisrestaurants_34s_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_analysisrestaurants_34s_3.addFeatures(features_vector_analysisrestaurants_34s_3);
var lyr_vector_analysisrestaurants_34s_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_analysisrestaurants_34s_3, 
                style: style_vector_analysisrestaurants_34s_3,
                interactive: true,
                title: '<img src="styles/legend/vector_analysisrestaurants_34s_3.png" /> vector_analysis restaurants_34s'
            });
var format_vector_analysisbuildings_34s_4 = new ol.format.GeoJSON();
var features_vector_analysisbuildings_34s_4 = format_vector_analysisbuildings_34s_4.readFeatures(json_vector_analysisbuildings_34s_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_analysisbuildings_34s_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_analysisbuildings_34s_4.addFeatures(features_vector_analysisbuildings_34s_4);
var lyr_vector_analysisbuildings_34s_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_analysisbuildings_34s_4, 
                style: style_vector_analysisbuildings_34s_4,
                interactive: true,
                title: '<img src="styles/legend/vector_analysisbuildings_34s_4.png" /> vector_analysis buildings_34s'
            });
var format_vector_analysislanduse_34s_5 = new ol.format.GeoJSON();
var features_vector_analysislanduse_34s_5 = format_vector_analysislanduse_34s_5.readFeatures(json_vector_analysislanduse_34s_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_analysislanduse_34s_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_analysislanduse_34s_5.addFeatures(features_vector_analysislanduse_34s_5);
var lyr_vector_analysislanduse_34s_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_analysislanduse_34s_5, 
                style: style_vector_analysislanduse_34s_5,
                interactive: true,
    title: 'vector_analysis landuse_34s<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_0.png" /> cemetery<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_1.png" /> conservation<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_2.png" /> farmland<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_3.png" /> forest<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_4.png" /> grass<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_5.png" /> industrial<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_6.png" /> orchard<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_7.png" /> reservoir<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_8.png" /> residential<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_9.png" /> village_green<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_10.png" /> vineyard<br />\
    <img src="styles/legend/vector_analysislanduse_34s_5_11.png" /> <br />'
        });
var format_roads_buffer_50m_6 = new ol.format.GeoJSON();
var features_roads_buffer_50m_6 = format_roads_buffer_50m_6.readFeatures(json_roads_buffer_50m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_buffer_50m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_buffer_50m_6.addFeatures(features_roads_buffer_50m_6);
var lyr_roads_buffer_50m_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_buffer_50m_6, 
                style: style_roads_buffer_50m_6,
                interactive: true,
                title: '<img src="styles/legend/roads_buffer_50m_6.png" /> roads_buffer_50m'
            });
var format_roads_buffer_50m_dissolved_7 = new ol.format.GeoJSON();
var features_roads_buffer_50m_dissolved_7 = format_roads_buffer_50m_dissolved_7.readFeatures(json_roads_buffer_50m_dissolved_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_buffer_50m_dissolved_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_buffer_50m_dissolved_7.addFeatures(features_roads_buffer_50m_dissolved_7);
var lyr_roads_buffer_50m_dissolved_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_buffer_50m_dissolved_7, 
                style: style_roads_buffer_50m_dissolved_7,
                interactive: true,
                title: '<img src="styles/legend/roads_buffer_50m_dissolved_7.png" /> roads_buffer_50m_dissolved'
            });
var group_Webmap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_vector_analysisschools_34s_1,lyr_vector_analysisroads_34s_2,lyr_vector_analysisrestaurants_34s_3,lyr_vector_analysisbuildings_34s_4,lyr_vector_analysislanduse_34s_5,lyr_roads_buffer_50m_6,lyr_roads_buffer_50m_dissolved_7,],
                                title: "Webmap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_vector_analysisschools_34s_1.setVisible(true);lyr_vector_analysisroads_34s_2.setVisible(true);lyr_vector_analysisrestaurants_34s_3.setVisible(true);lyr_vector_analysisbuildings_34s_4.setVisible(true);lyr_vector_analysislanduse_34s_5.setVisible(true);lyr_roads_buffer_50m_6.setVisible(true);lyr_roads_buffer_50m_dissolved_7.setVisible(true);
var layersList = [group_Webmap];
lyr_vector_analysisschools_34s_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'building': 'building', 'building:levels': 'building:levels', 'building:walls': 'building:walls', 'name': 'name', 'website': 'website', 'name:af': 'name:af', });
lyr_vector_analysisroads_34s_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'surface': 'surface', 'name': 'name', 'embankment': 'embankment', 'maxweight': 'maxweight', 'destination:backward': 'destination:backward', 'destination:forward': 'destination:forward', 'destination:ref:backward': 'destination:ref:backward', 'destination:symbol:forward': 'destination:symbol:forward', 'cutting': 'cutting', 'access': 'access', 'hgv': 'hgv', 'foot': 'foot', 'sac_scale': 'sac_scale', 'name:af': 'name:af', 'lanes:backward': 'lanes:backward', 'lanes:forward': 'lanes:forward', 'reg_ref': 'reg_ref', 'bicycle': 'bicycle', 'cycleway': 'cycleway', 'sidewalk': 'sidewalk', 'service': 'service', 'bridge': 'bridge', 'layer': 'layer', 'tracktype': 'tracktype', 'trail_visibility': 'trail_visibility', 'wheelchair': 'wheelchair', 'horse': 'horse', 'ski': 'ski', 'snowmobile': 'snowmobile', 'motor_vehicle': 'motor_vehicle', 'source:name': 'source:name', 'name:en': 'name:en', 'start_date': 'start_date', 'tunnel': 'tunnel', 'official_ref': 'official_ref', 'placement': 'placement', 'shoulder': 'shoulder', 'smoothness': 'smoothness', 'turn:lanes': 'turn:lanes', 'change:lanes': 'change:lanes', 'destination': 'destination', 'destination:ref': 'destination:ref', 'placement:end': 'placement:end', 'placement:start': 'placement:start', 'destination:symbol': 'destination:symbol', 'alt_name': 'alt_name', 'covered': 'covered', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', });
lyr_vector_analysisrestaurants_34s_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'amenity': 'amenity', 'building': 'building', 'building:levels': 'building:levels', 'building:walls': 'building:walls', 'cuisine': 'cuisine', 'name': 'name', 'wheelchair': 'wheelchair', 'contact:email': 'contact:email', 'contact:mobile': 'contact:mobile', 'contact:phone': 'contact:phone', 'contact:website': 'contact:website', 'stars': 'stars', 'tourism': 'tourism', 'addr:country': 'addr:country', 'addr:housename': 'addr:housename', 'phone': 'phone', 'sahra': 'sahra', });
lyr_vector_analysisbuildings_34s_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'building:walls': 'building:walls', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'addr:housename': 'addr:housename', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'tourism': 'tourism', 'amenity': 'amenity', 'atm': 'atm', 'drive_through': 'drive_through', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'shop': 'shop', 'cuisine': 'cuisine', 'wheelchair': 'wheelchair', 'phone': 'phone', 'stars': 'stars', 'website': 'website', 'addr:country': 'addr:country', 'national_monument': 'national_monument', 'start_date': 'start_date', 'contact:email': 'contact:email', 'contact:mobile': 'contact:mobile', 'contact:phone': 'contact:phone', 'contact:website': 'contact:website', 'office': 'office', 'denomination': 'denomination', 'religion': 'religion', 'sahra': 'sahra', 'information': 'information', 'security': 'security', 'fax': 'fax', 'service_times': 'service_times', 'email': 'email', 'name:af': 'name:af', 'brand': 'brand', 'addr:housenumber:source': 'addr:housenumber:source', 'name:en': 'name:en', 'description': 'description', 'opening_hours': 'opening_hours', 'building:roof': 'building:roof', 'old_name': 'old_name', 'addr:erf': 'addr:erf', 'internet_access': 'internet_access', 'level': 'level', 'sport': 'sport', 'man_made': 'man_made', 'layer': 'layer', 'height': 'height', });
lyr_vector_analysislanduse_34s_5.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'name': 'name', 'type': 'type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'is_in': 'is_in', 'leisure': 'leisure', 'name:de': 'name:de', 'sagns_id': 'sagns_id', 'website': 'website', 'access': 'access', 'barrier': 'barrier', 'designation': 'designation', 'tourism': 'tourism', });
lyr_roads_buffer_50m_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'surface': 'surface', 'name': 'name', 'embankment': 'embankment', 'maxweight': 'maxweight', 'destination:backward': 'destination:backward', 'destination:forward': 'destination:forward', 'destination:ref:backward': 'destination:ref:backward', 'destination:symbol:forward': 'destination:symbol:forward', 'cutting': 'cutting', 'access': 'access', 'hgv': 'hgv', 'foot': 'foot', 'sac_scale': 'sac_scale', 'name:af': 'name:af', 'lanes:backward': 'lanes:backward', 'lanes:forward': 'lanes:forward', 'reg_ref': 'reg_ref', 'bicycle': 'bicycle', 'cycleway': 'cycleway', 'sidewalk': 'sidewalk', 'service': 'service', 'bridge': 'bridge', 'layer': 'layer', 'tracktype': 'tracktype', 'trail_visibility': 'trail_visibility', 'wheelchair': 'wheelchair', 'horse': 'horse', 'ski': 'ski', 'snowmobile': 'snowmobile', 'motor_vehicle': 'motor_vehicle', 'source:name': 'source:name', 'name:en': 'name:en', 'start_date': 'start_date', 'tunnel': 'tunnel', 'official_ref': 'official_ref', 'placement': 'placement', 'shoulder': 'shoulder', 'smoothness': 'smoothness', 'turn:lanes': 'turn:lanes', 'change:lanes': 'change:lanes', 'destination': 'destination', 'destination:ref': 'destination:ref', 'placement:end': 'placement:end', 'placement:start': 'placement:start', 'destination:symbol': 'destination:symbol', 'alt_name': 'alt_name', 'covered': 'covered', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', });
lyr_roads_buffer_50m_dissolved_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'surface': 'surface', 'name': 'name', 'embankment': 'embankment', 'maxweight': 'maxweight', 'destination:backward': 'destination:backward', 'destination:forward': 'destination:forward', 'destination:ref:backward': 'destination:ref:backward', 'destination:symbol:forward': 'destination:symbol:forward', 'cutting': 'cutting', 'access': 'access', 'hgv': 'hgv', 'foot': 'foot', 'sac_scale': 'sac_scale', 'name:af': 'name:af', 'lanes:backward': 'lanes:backward', 'lanes:forward': 'lanes:forward', 'reg_ref': 'reg_ref', 'bicycle': 'bicycle', 'cycleway': 'cycleway', 'sidewalk': 'sidewalk', 'service': 'service', 'bridge': 'bridge', 'layer': 'layer', 'tracktype': 'tracktype', 'trail_visibility': 'trail_visibility', 'wheelchair': 'wheelchair', 'horse': 'horse', 'ski': 'ski', 'snowmobile': 'snowmobile', 'motor_vehicle': 'motor_vehicle', 'source:name': 'source:name', 'name:en': 'name:en', 'start_date': 'start_date', 'tunnel': 'tunnel', 'official_ref': 'official_ref', 'placement': 'placement', 'shoulder': 'shoulder', 'smoothness': 'smoothness', 'turn:lanes': 'turn:lanes', 'change:lanes': 'change:lanes', 'destination': 'destination', 'destination:ref': 'destination:ref', 'placement:end': 'placement:end', 'placement:start': 'placement:start', 'destination:symbol': 'destination:symbol', 'alt_name': 'alt_name', 'covered': 'covered', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', });
lyr_vector_analysisschools_34s_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'building': '', 'building:levels': '', 'building:walls': '', 'name': '', 'website': '', 'name:af': '', });
lyr_vector_analysisroads_34s_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'lanes': '', 'maxspeed': '', 'oneway': '', 'ref': '', 'surface': '', 'name': '', 'embankment': '', 'maxweight': '', 'destination:backward': '', 'destination:forward': '', 'destination:ref:backward': '', 'destination:symbol:forward': '', 'cutting': '', 'access': '', 'hgv': '', 'foot': '', 'sac_scale': '', 'name:af': '', 'lanes:backward': '', 'lanes:forward': '', 'reg_ref': '', 'bicycle': '', 'cycleway': '', 'sidewalk': '', 'service': '', 'bridge': '', 'layer': '', 'tracktype': '', 'trail_visibility': '', 'wheelchair': '', 'horse': '', 'ski': '', 'snowmobile': '', 'motor_vehicle': '', 'source:name': '', 'name:en': '', 'start_date': '', 'tunnel': '', 'official_ref': '', 'placement': '', 'shoulder': '', 'smoothness': '', 'turn:lanes': '', 'change:lanes': '', 'destination': '', 'destination:ref': '', 'placement:end': '', 'placement:start': '', 'destination:symbol': '', 'alt_name': '', 'covered': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', });
lyr_vector_analysisrestaurants_34s_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:city': '', 'addr:housenumber': '', 'addr:postcode': '', 'addr:street': '', 'amenity': '', 'building': '', 'building:levels': '', 'building:walls': '', 'cuisine': '', 'name': '', 'wheelchair': '', 'contact:email': '', 'contact:mobile': '', 'contact:phone': '', 'contact:website': '', 'stars': '', 'tourism': '', 'addr:country': '', 'addr:housename': '', 'phone': '', 'sahra': '', });
lyr_vector_analysisbuildings_34s_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:levels': '', 'building:walls': '', 'name': '', 'type': '', 'aeroway': '', 'addr:housename': '', 'addr:postcode': '', 'addr:street': '', 'tourism': '', 'amenity': '', 'atm': '', 'drive_through': '', 'addr:city': '', 'addr:housenumber': '', 'shop': '', 'cuisine': '', 'wheelchair': '', 'phone': '', 'stars': '', 'website': '', 'addr:country': '', 'national_monument': '', 'start_date': '', 'contact:email': '', 'contact:mobile': '', 'contact:phone': '', 'contact:website': '', 'office': '', 'denomination': '', 'religion': '', 'sahra': '', 'information': '', 'security': '', 'fax': '', 'service_times': '', 'email': '', 'name:af': '', 'brand': '', 'addr:housenumber:source': '', 'name:en': '', 'description': '', 'opening_hours': '', 'building:roof': '', 'old_name': '', 'addr:erf': '', 'internet_access': '', 'level': '', 'sport': '', 'man_made': '', 'layer': '', 'height': '', });
lyr_vector_analysislanduse_34s_5.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'is_in': 'TextEdit', 'leisure': 'TextEdit', 'name:de': 'TextEdit', 'sagns_id': 'TextEdit', 'website': 'TextEdit', 'access': 'TextEdit', 'barrier': 'TextEdit', 'designation': 'TextEdit', 'tourism': 'TextEdit', });
lyr_roads_buffer_50m_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'lanes': '', 'maxspeed': '', 'oneway': '', 'ref': '', 'surface': '', 'name': '', 'embankment': '', 'maxweight': '', 'destination:backward': '', 'destination:forward': '', 'destination:ref:backward': '', 'destination:symbol:forward': '', 'cutting': '', 'access': '', 'hgv': '', 'foot': '', 'sac_scale': '', 'name:af': '', 'lanes:backward': '', 'lanes:forward': '', 'reg_ref': '', 'bicycle': '', 'cycleway': '', 'sidewalk': '', 'service': '', 'bridge': '', 'layer': '', 'tracktype': '', 'trail_visibility': '', 'wheelchair': '', 'horse': '', 'ski': '', 'snowmobile': '', 'motor_vehicle': '', 'source:name': '', 'name:en': '', 'start_date': '', 'tunnel': '', 'official_ref': '', 'placement': '', 'shoulder': '', 'smoothness': '', 'turn:lanes': '', 'change:lanes': '', 'destination': '', 'destination:ref': '', 'placement:end': '', 'placement:start': '', 'destination:symbol': '', 'alt_name': '', 'covered': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', });
lyr_roads_buffer_50m_dissolved_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'lanes': '', 'maxspeed': '', 'oneway': '', 'ref': '', 'surface': '', 'name': '', 'embankment': '', 'maxweight': '', 'destination:backward': '', 'destination:forward': '', 'destination:ref:backward': '', 'destination:symbol:forward': '', 'cutting': '', 'access': '', 'hgv': '', 'foot': '', 'sac_scale': '', 'name:af': '', 'lanes:backward': '', 'lanes:forward': '', 'reg_ref': '', 'bicycle': '', 'cycleway': '', 'sidewalk': '', 'service': '', 'bridge': '', 'layer': '', 'tracktype': '', 'trail_visibility': '', 'wheelchair': '', 'horse': '', 'ski': '', 'snowmobile': '', 'motor_vehicle': '', 'source:name': '', 'name:en': '', 'start_date': '', 'tunnel': '', 'official_ref': '', 'placement': '', 'shoulder': '', 'smoothness': '', 'turn:lanes': '', 'change:lanes': '', 'destination': '', 'destination:ref': '', 'placement:end': '', 'placement:start': '', 'destination:symbol': '', 'alt_name': '', 'covered': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', });
lyr_vector_analysisschools_34s_1.set('fieldLabels', {});
lyr_vector_analysisroads_34s_2.set('fieldLabels', {});
lyr_vector_analysisrestaurants_34s_3.set('fieldLabels', {});
lyr_vector_analysisbuildings_34s_4.set('fieldLabels', {});
lyr_vector_analysislanduse_34s_5.set('fieldLabels', {});
lyr_roads_buffer_50m_6.set('fieldLabels', {});
lyr_roads_buffer_50m_dissolved_7.set('fieldLabels', {});
lyr_roads_buffer_50m_dissolved_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});