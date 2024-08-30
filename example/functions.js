/* FUNCTIONS FOR DRAWING LEAFLET MAPS WITH GPS VISUALIZER (http://www.gpsvisualizer.com/) */

if (!self.gvg) { gvg = []; }// GPS Visualizer Globals
gvg.listeners = [];
gvg.local_time_zone = new Date(); gvg.local_time_zone = 0-gvg.local_time_zone.getTimezoneOffset()/60;
google = {maps:{}};
var gmap;

var keyholders = ['google','thunderforest','ign']; gvg.api_keys = [];
for (var i=0; i<keyholders.length; i++) { if (eval('self.'+keyholders[i]+'_api_key')) { gvg.api_keys[keyholders[i]] = eval(keyholders[i]+'_api_key'); } }

if (window.location.toString().match(/gv.?.?debug/)) {
	gvg.debug = true;
	gvg.version = L.version; //lert('Leaflet version = '+gvg.version);
}

gvg.secure_server = (window.location.protocol == 'https:') ? true : false;
gvg.geolocation_ok = (navigator.geolocation) ? true : false;
gvg.mobile_browser = (navigator.userAgent.match(/\b(Android|Blackberry|IEMobile|iPhone|iPad|iPod|Opera Mini|webOS)\b/i) || (screen && screen.width && screen.height && (screen.width <= 480 || screen.height <= 480))) ? true : false;
gvg.internet_explorer = (navigator.userAgent.match(/\b(MSIE|Trident)\b/)) ? true : false;


GV_Define_Styles(); // this needs to happen early so that user-defined styles don't get overridden

if (!self.gv_options) { GV_Setup_Global_Variables(); }

function GV_Setup_Global_Variables() {
	if (!self.gv_options) { gv_options = []; }
	
	if (gvg.internet_explorer) { gv_options.vector_markers = false; } // IE cannot handle embedded SVGs in maps.  POSSIBLE SOLUTION: use non-embedded SVGs in that case?
	// if (gv_options.vector_markers) { gv_options.optimize_markers = false; } // has no effect in Leaflet
	if (gv_options.icon_directory) { gvg.icon_directory = gv_options.icon_directory; } else { gvg.icon_directory = 'https://www.gpsvisualizer.com/leaflet/'; }
	gvg.icon_directory = gvg.icon_directory.replace(/http:\/\/\w+\.gpsvisualizer\.com\/google_maps\//,'https://www.gpsvisualizer.com/google_maps/');
	gvg.icon_directory = gvg.icon_directory.replace(/gpsvisualizer\.com\/(leaflet|google_maps)\/icons\//,'gpsvisualizer.com/leaflet/');
	if (!gvg.icon_directory.match(/\/$/)) { gvg.icon_directory += '/'; }
	if (gv_options.script_directory) { gvg.script_directory = gv_options.script_directory; } else { gvg.script_directory = 'https://www.gpsvisualizer.com/leaflet/'; }
	if (gv_options.image_directory) { gvg.image_directory = gv_options.image_directory; } else { gvg.image_directory = 'https://www.gpsvisualizer.com/leaflet/'; }
	// Define parameters of different marker types
	if (!gvg.icons) { gvg.icons = []; }
	gvg.icons['circle'] = { is:[11,11],ia:[5,5],ss:[13,13],iwa:[10,2],im:[0,0, 10,0, 10,10, 0,10, 0,0], circular:true };
	gvg.icons['pin'] = { is:[15,26],ia:[7.5,25],ss:[30,26],iwa:[7,1],im:[5,25, 5,15, 2,13, 1,12, 0,10, 0,5, 1,2, 2,1, 4,0, 10,0, 12,1, 13,2, 14,4, 14,10, 13,12, 12,13, 9,15, 9,25, 5,25 ] };
	gvg.icons['square'] = { is:[11,11],ia:[5,5],ss:[13,13],iwa:[10,2],im:[0,0, 10,0, 10,10, 0,10, 0,0] };
	gvg.icons['triangle'] = { is:[13,13],ia:[6.5,6.5],ss:[15,15],iwa:[11,3],im:[0,11, 6,0, 12,11, 0,11] };
	gvg.icons['diamond'] = { is:[13,13],ia:[6.5,6.5],ss:[13,13],iwa:[11,3],im:[6,0, 12,6, 6,12, 0,6, 6,0] };
	gvg.icons['star'] = { is:[19,19],ia:[9.5,10],ss:[19,19],iwa:[12,5],im:[9,1, 17,7, 14,17, 4,17, 1,7, 9,1] };
	gvg.icons['cross'] = { is:[13,13],ia:[6.5,6.5],ss:[15,15],iwa:[11,3],im:[4,0, 8,0, 8,4, 12,4, 12,8, 8,8, 8,12, 4,12, 4,8, 0,8, 0,4, 4,4, 4,0] };
	gvg.icons['airport'] = { is:[17,17],ia:[8.5,8.5],ss:[19,19],iwa:[13,3],im:[6,0, 10,0, 16,6, 16,10, 10,16, 6,16, 0,10, 0,6, 6,0], circular:true };
	gvg.icons['google'] = { is:[20,34],ia:[10,33],ss:[37,34],iwa:[9,2],im:[8,33, 8,23, 1,13, 1,6, 6,1, 13,1, 18,6, 18,13, 11,23, 11,33, 8,33] };
	gvg.icons['googleblank'] = { is:[20,34],ia:[10,33],ss:[37,34],iwa:[15,2],im:[8,33, 8,23, 1,13, 1,6, 6,1, 13,1, 18,6, 18,13, 11,23, 11,33, 8,33] };
	gvg.icons['googlemini'] = { is:[12,20],ia:[6,20],ss:[22,20],iwa:[5,1],im:[4,19, 4,14, 0,7, 0,3, 4,0, 7,0, 11,3, 11,7, 7,14, 7,19, 4,19] };
	gvg.icons['blankcircle'] = { is:[64,64],ia:[32,32],ss:[70,70],iwa:[55,8],im:[19,3, 44,3, 60,19, 60,44, 44,60, 19,60, 3,44, 3,19, 19,3] };
	gvg.icons['camera'] = { is:[17,13],ia:[8.5,6.5],ss:[19,15],iwa:[13,3],im:[1,3, 6,1, 10,1, 15,3, 15,11, 1,11, 1,3] };
	gvg.icons['arrow'] = { is:[19,19],ia:[9.5,9.5],ss:[21,21],iwa:[14,3],im:[5,0, 14,0, 19,6, 19,14, 14,19, 6,19, 0,14, 0,6, 5,0], rotatable:true, circular:true };
	gvg.icons['wedge'] = { is:[19,19],ia:[9.5,9.5],ss:[21,21],iwa:[14,3],im:[5,0, 14,0, 19,6, 19,14, 14,19, 6,19, 0,14, 0,6, 5,0], rotatable:true, circular:true };
	gvg.icons['tickmark'] = { is:[13,13],ia:[6.5,6.5],xss:[13,13],iwa:[11,3],im:[6,0, 12,6, 6,12, 0,6, 6,0], rotatable:true };
	GV_Define_Vector_Icons();
	GV_Define_Embedded_Images();
	gvg.named_html_colors = GV_Define_Named_Colors();
	gvg.garmin_icons = GV_Define_Garmin_Icons(gvg.icon_directory,gv_options.garmin_icon_set);
	
	// These may be important (why?)
	gv_options.info_window_width = parseFloat(gv_options.info_window_width) || 0;
	gv_options.thumbnail_width = parseFloat(gv_options.thumbnail_width) || 0;
	gv_options.photo_width = parseFloat(gv_options.photo_width) || 0;
	gv_options.photo_size = (gv_options.photo_size && gv_options.photo_size.length == 2 && gv_options.photo_size[0] > 0) ? gv_options.photo_size : null;
	
	// default marker options, possibly taken from an older gv_default_marker variable
	if (!gv_options.default_marker) {
		gv_options.default_marker = [];
		gv_options.default_marker.icon = (self.gv_default_marker && gv_default_marker.icon) ? gv_default_marker.icon : 'googlemini';
		gv_options.default_marker.color = (self.gv_default_marker && gv_default_marker.color) ? gv_default_marker.color : 'red';
		gv_options.default_marker.size = (self.gv_default_marker && gv_default_marker.size) ? gv_default_marker.size : null;
		gv_options.default_marker.anchor = (self.gv_default_marker && gv_default_marker.anchor) ? gv_default_marker.anchor : null;
		gv_options.default_marker.imagemap = (self.gv_default_marker && gv_default_marker.imagemap) ? gv_default_marker.imagemap : null;
		gv_options.default_marker.scale = (self.gv_default_marker && gv_default_marker.scale) ? gv_default_marker.scale : null;
	}
	gv_options.default_marker.color = (gv_options.default_marker.color) ? gv_options.default_marker.color : 'red';
	gv_options.marker_link_target = (gv_options.marker_link_target) ? gv_options.marker_link_target : ((self.marker_link_target) ? marker_link_target : '');
	gv_options.info_window_width = (gv_options.info_window_width) ? gv_options.info_window_width : ((self.gv_max_info_window_width) ? gv_max_info_window_width : null);
	gv_options.driving_directions = (gv_options.driving_directions) ? gv_options.driving_directions : ((self.gv_driving_directions) ? gv_driving_directions : false);
	gv_options.label_offset = (gv_options.label_offset && gv_options.label_offset.length >= 2) ? gv_options.label_offset : ((self.gv_label_offset && self.gv_label_offset.length >= 2) ? gv_label_offset : [0,0]);
	gv_options.label_centered = (gv_options.label_centered) ? gv_options.label_centered : ((self.gv_label_centered) ? gv_label_centered : false);
	gv_options.hide_labels = (gv_options.hide_labels) ? gv_options.hide_labels : false;
	gv_options.editable_markers = (gv_options.editable_markers) ? true : false;
	gv_options.marker_tooltip_position = (gv_options.marker_tooltip_position) ? gv_options.marker_tooltip_position : 'right';
	
	// map control options
	if (!gv_options.map_type_control && gv_options.map_type_control !== false) { // very old code would use have gv_options.map_type_control as a boolean
		gv_options.map_type_control = [];
		gv_options.map_type_control.style = (self.maptypecontrol_style) ? maptypecontrol_style : 'menu';
		gv_options.map_type_control.filter = (self.filter_map_types) ? true : false;
	}
	gv_options.map_opacity = (self.gv_bg_opacity) ? gv_bg_opacity : ((gv_options.map_opacity > 1) ? gv_options.map_opacity/100 : gv_options.map_opacity);
	
	gvg.smoothFactor = (gv_options.track_optimization === false || gv_options.track_optimization == 0) ? 0 : 1;
	if (parseFloat(gv_options.track_optimization) != 1) { gvg.smoothFactor = parseFloat(gv_options.track_optimization); }
	gv_options.animated_zoom = (gv_options.animated_zoom === false) ? false : true;
	
	// Some stuff related to marker lists
	if (!gv_options.tracklist_options) { gv_options.tracklist_options = []; } // it needs to be created or the next statements will throw errors
	if (!gv_options.marker_list_options) { gv_options.marker_list_options = []; } // it needs to be created or the next statements will throw errors
	if (!gv_options.marker_filter_options) { gv_options.marker_filter_options = []; } // it needs to be created
	gvg.marker_list_text_tooltip = ''; gvg.marker_list_icon_tooltip = '';
	if (self.gv_marker_list_options && !gv_options.marker_list_options) { gv_options.marker_list_options = gv_marker_list_options; } // backward compatibility
	
	// Some stuff related to filtering markers
	gvg.filter_markers = false; gvg.filter_marker_list = false;
	if (self.gv_marker_filter_options) { gv_options.marker_filter_options = gv_marker_filter_options; } // backward compatibility
	if (gv_options.marker_filter_options) {
		gvg.filter_marker_list = (gv_options.marker_filter_options.update_list) ? true : false;
		gvg.filter_markers = (gv_options.marker_filter_options.filter === true || gv_options.marker_filter_options.enabled) ? true : false;
	}
	gvg.autopan = (gvg.filter_markers && (!gv_options.marker_filter_options || gv_options.marker_filter_options.disable_autopan !== false)) ? false : true;
	
	// Create a default icon for all markers
	gvg.default_icon = { icon:{}, shadow:{}, shape:{}, info_window:{} };
	gvg.icon_suffix = (gv_options.vector_markers) ? 'svg' : 'png';
	if (gv_options.default_marker.icon && gv_options.default_marker.icon.indexOf('/') > -1) {
		gvg.default_icon.icon.url = gv_options.default_marker.icon.replace(/^c:\//,'file:///c:/'); // fix local Windows file names
		gvg.default_icon.icon.size = (gv_options.default_marker.size && gv_options.default_marker.size[0] && gv_options.default_marker.size[1]) ? [gv_options.default_marker.size[0],gv_options.default_marker.size[1]] : [32,32];
		gvg.default_icon.icon.scaledSize = gvg.default_icon.icon.size;
		gvg.default_icon.icon.anchor = (gv_options.default_marker.anchor && gv_options.default_marker.anchor[0] != null && gv_options.default_marker.anchor[1] != null) ? [gv_options.default_marker.anchor[0],gv_options.default_marker.anchor[1]] : [gvg.default_icon.icon.size[0]*0.5,gvg.default_icon.icon.size[1]*0.5];
		gvg.icons[gv_options.default_marker.icon] = { is:[gvg.default_icon.icon.size[0],gvg.default_icon.icon.size[1]],ia:[gvg.default_icon.icon.anchor[0],gvg.default_icon.icon.anchor[1]],ss:null };
	} else {
		if (gvg.garmin_icons && gvg.garmin_icons[gv_options.default_marker.icon]) {
			var i = gv_options.default_marker.icon;
			gvg.default_icon.icon.url = gvg.garmin_icons[i].url;
			gvg.default_icon.icon.size = [16,16];
			gvg.default_icon.icon.scaledSize = gvg.default_icon.icon.size;
			var anchor_x = 8; var anchor_y = 8;
			if (gvg.garmin_icons[i].anchor && gvg.garmin_icons[i].anchor.length == 2) {
				anchor_x = gvg.garmin_icons[i].anchor[0]; anchor_y = gvg.garmin_icons[i].anchor[1];
			}
			if (gv_options.garmin_icon_set == '24x24') {
				gvg.default_icon.icon.size = [24,24];
				gvg.default_icon.icon.scaledSize = gvg.default_icon.icon.size;
				anchor_x *= 1.5; anchor_y *= 1.5;
			} else if (gv_options.garmin_icon_set == '48x48') {
				gvg.default_icon.icon.size = [24,24];
				gvg.default_icon.icon.scaledSize = gvg.default_icon.icon.size;
				anchor_x *= 1.5; anchor_y *= 1.5;
			}
			gvg.default_icon.icon.anchor = [anchor_x,anchor_y];
		} else {
			if (!gvg.icons[gv_options.default_marker.icon]) { gv_options.default_marker.icon = 'googlemini'; }
			gvg.default_icon.icon.url = (gv_options.vector_markers && gvg.icons[gv_options.default_marker.icon].vector) ? GV_Vector_Icon(gv_options.default_marker.icon,gv_options.default_marker.color) : gvg.icon_directory+'icons/'+gv_options.default_marker.icon+'/'+gv_options.default_marker.color.toLowerCase().replace(/^#/,'')+'.'+gvg.icon_suffix;
			gvg.default_icon.icon.size = [gvg.icons[gv_options.default_marker.icon].is[0],gvg.icons[gv_options.default_marker.icon].is[1]];
			gvg.default_icon.icon.anchor = [gvg.icons[gv_options.default_marker.icon].ia[0],gvg.icons[gv_options.default_marker.icon].ia[1]];
		}
	}
	if (gv_options.default_marker.scale && gv_options.default_marker.scale != 1) {
		var sc = gv_options.default_marker.scale*1;
		gvg.default_icon.icon.size[0] *= sc; gvg.default_icon.icon.size[1] *= sc;
		gvg.default_icon.icon.scaledSize = gvg.default_icon.icon.size;
		gvg.default_icon.icon.anchor[0] *= sc; gvg.default_icon.icon.anchor[1] *= sc;
	}
	gvg.default_icon.icon.gv_offset = [0,0];
	gvg.name_of_unnamed_marker = (gv_options.marker_list_options && typeof(gv_options.marker_list_options.unnamed) != 'undefined') ? gv_options.marker_list_options.unnamed : '[unnamed]';
	if (gv_options.marker_list_options.icon_scale) {
		var mlois = gv_options.marker_list_options.icon_scale.toString();
		if (mlois.match(/^[\d\.]+ *px/)) { gvg.ml_icon_size = parseFloat(mlois.replace(/^(\d+\.?\d*) *px.*$/,'$1')); }
		else if (mlois.match(/^ *x *[\d\.]+|^ *[\d\.]+ *x/)) { gvg.ml_icon_scale_multiplier = parseFloat(mlois.replace(/^ *x *(\d+\.?\d*).*$|^ *(\d+\.?\d*) *x\b.*$/,'$1$2')); }
		else if (mlois.match(/\d/)) { gvg.ml_icon_scale = parseFloat(mlois.replace(/^.*?(\d+\.?\d*).*?$/,'$1')); }
	}
	
	gvg.dimmed_color = '#aaaaaa'; // for tracklists and marker lists
	gvg.marker_count = 0;
	gvg.synthesize_fields_pattern = new RegExp('\{((?:<br *\/?>)*)([^\{]*)((?:<br *\/?>)*)\}','gi');
	
	if (gvg.mobile_browser) {
		gv_options.marker_tooltips = false;
		gv_options.marker_list_options.tooltips = false;
		gv_options.track_tooltips = false;
		gv_options.tracklist_options.tooltips = false;
	}
	
}

function GV_Setup_Map() {
	if (!self.gv_options) { return false; }
	
	gv_options.map_div = (gv_options.map_div) ? gv_options.map_div : 'gmap_div';
	if (!$(gv_options.map_div)) { return false; }
	
	if (!gv_options.full_screen) {
		if (!gv_options.width && !gv_options.height && ($(gv_options.map_div).style.width == '100%' || $(gv_options.map_div).style.height == '100%')) {
			gv_options.full_screen = true; // if they didn't give dimensions and their div is set to fill the screen in at least 1 dimension
		} else {
			var w = 600; var h = 600; // defaults
			if (!gv_options.width && parseFloat($(gv_options.map_div).style.width)) { gv_options.width = parseFloat($(gv_options.map_div).style.width); }
			if (!gv_options.height && parseFloat($(gv_options.map_div).style.height)) { gv_options.height = parseFloat($(gv_options.map_div).style.height); }
			if (!gv_options.width && !gv_options.height) { gv_options.width = w; gv_options.height = h; }
			else if (!gv_options.width) { gv_options.width = (gv_options.height) ? gv_options.height : w; }
			else if (!gv_options.height) { gv_options.height = (gv_options.width) ? gv_options.width : h; }
		}
	}
	if (gv_options.full_screen) {
		document.body.style.margin = '0px';
		document.body.style.overflow = 'hidden';
		GV_Fill_Window_With_Map(gv_options.map_div); // we may have already done this, and will probably do it again, but it doesn't hurt anything
		$(gv_options.map_div).style.margin = '0px';
	} else {
		if (gv_options.width) {
			$(gv_options.map_div).style.width = parseFloat(gv_options.width)+'px';
		}
		if (gv_options.height) {
			$(gv_options.map_div).style.height = parseFloat(gv_options.height)+'px';
			if ($('gv_marker_list_static') || (gv_options.marker_list_options && gv_options.marker_list_options.id_static && $(gv_options.marker_list_options.id_static)) ) {
				var marker_list_id = ($('gv_marker_list_static')) ? 'gv_marker_list_static' : gv_options.marker_list_options.id_static;
				if ($(marker_list_id).style && !$(marker_list_id).style.height) { $(marker_list_id).style.height = parseFloat(gv_options.height)+'px'; }
			}
		}
	}
	gvg.framed = (window.location !== window.parent.location) ? true : false;
	var parent_ok = true; try { window.parent.document; } catch(err) { parent_ok = false; }
	gvg.scrollbars = (parent_ok && window.parent.document.body.scrollHeight > window.parent.innerHeight) ? true : false; // catches a non-framed scrolling page too, because its "parent" is itself
	gvg.zoom_minimum = (gv_options.zoom_min && gv_options.zoom_min >= 0 && gv_options.zoom_min <= 19) ? Math.floor(parseFloat(gv_options.zoom_min)) : 0;
	gvg.zoom_maximum = (gv_options.zoom_max && gv_options.zoom_max >= 2 && gv_options.zoom_max <= 21) ? Math.floor(parseFloat(gv_options.zoom_max)) : 21;
	gvg.underzoom_steps = 1;
	gvg.scroll_zoom = (gv_options.scroll_zoom === false) ? false : true;
	gvg.doubleclick_zoom = (gv_options.doubleclick_zoom === false) ? false : true;
	gvg.gesture_handling = (gv_options.page_scrolling === false || (gv_options.full_screen && !gvg.framed) || !gvg.scrollbars) ? false : true;
	gvg.attribution = (gv_options.attribution === false) ? false : true;
	if (window.location.protocol == 'file:' && gvg.framed && gv_options.page_scrolling) { gvg.gesture_handling = true; } // special case where parent_ok was probably false
	
	var mapdiv_html = $(gv_options.map_div).innerHTML; $(gv_options.map_div).innerHTML = '';
	gmap = new L.Map($(gv_options.map_div),{
		zoomControl:false
		,attributionControl:gvg.attribution
		,fadeAnimation:false
		,doubleClickZoom:true
		,minZoom:gvg.zoom_minimum
		,maxZoom:gvg.zoom_maximum
		,scrollWheelZoom:gvg.scroll_zoom
		,doubleClickZoom:gvg.doubleclick_zoom
		,gestureHandling:gvg.gesture_handling
	});
	if (!gmap) {
		$(gv_options.map_div).innerHTML = mapdiv_html;
		return false;
	}
	/* // LEAFLET_POSSIBLE? //
	if (gv_options.scroll_zoom == 'reverse') {
		gmap.options.scrollwheelZoom = false;
		google.maps.event.addDomListener(gmap.getContainer(),"DOMMouseScroll", GV_MouseWheelReverse); // mouse-wheel zooming for Firefox
		google.maps.event.addDomListener(gmap.getContainer(),"mousewheel", GV_MouseWheelReverse); // mouse-wheel zooming for IE
	}
	*/
	if (!gv_options.animated_zoom && gmap.scrollWheelZoom && gmap.scrollWheelZoom._performZoom) { // this is a clunky way to disable animated zoom: replace part of the scroll wheel zoom function
		var scroll_func = gmap.scrollWheelZoom._performZoom.toString().replace(/(\.set(?:Zoom|ZoomAround)?\(.*?)(\))/g,'$1'+',{animate:gv_options.animated_zoom}'+'$2');
		eval('gmap.scrollWheelZoom._performZoom = '+scroll_func);
	}
	
	// LEAFLET_NEEDED? // gmap.fire('resize');
	
	// helpful functions for backwards compatibility
	gmap.savePosition = function() { gvg.saved_center = gmap.getCenter(); gvg.saved_zoom = gmap.getZoom(); };
	gmap.returnToSavedPosition = function() { if (gvg.saved_center && gvg.saved_zoom) { this.setView(gvg.saved_center,gvg.saved_zoom,{animate:gv_options.animated_zoom}); } };
	gmap.openInfoWindowHtml = function(coords,html,opts) { gmap.openPopup(html,coords,opts); };
	gmap.closeInfoWindow = function() { gmap.closePopup(); };
	gmap.getBoundsZoomLevel = getBoundsZoomLevel;
	GLatLng = L.latLng;
	GLatLngBounds = L.latLngBounds;
	GPoint = L.point;
	GSize = L.size;
	
	// helpful functions for Google compatibility
	L.Marker.include({ getPosition:function(){ return this.getLatLng(); } });
	gmap.getDiv = gmap.getContainer;
	gmap.setCenter = gmap.setView;
	
	// Do these inside a setup function so they don't load before the API code comes in -- that would break things
	GV_Define_Background_Maps();
	GV_Setup_Labels();
	
	GV_Setup_Global_Variables(); // in the absence of gv_options, this would have already happened, but in most cases it'll need to be run now
	
	if (gv_options.doubleclick_zoom === false && gv_options.doubleclick_center !== false) {
		gvg.listeners['map_doubleclick'] = gmap.on("dblclick", function(click){ gmap.setView(click.latlng); DeselectText(); });
	}
	
	/*
	// LEAFLET_HOW? map.boxZoom.enable()? //
	if (gv_options.rectangle_zoom && google.maps.drawing) {
		GV_Zoom_With_Rectangle(true);
	}
	*/
	
	// Set the gv_options.center and .zoom parameters to match the URL's parameters so the map starts in the right place and doesn't have to shift over
	// These functions will be run again after the elements are loaded, in case a marker needs to be popped up or something
	if (window.location.toString().match(/[&\\?\#](gv_force_[a-z]+)=([^&]+)/)) {
		GV_Recenter_Per_URL({center_key:'gv_force_center',zoom_key:'gv_force_zoom',maptype_key:'gv_force_maptype'},true);
	} else if (gv_options.centering_options) {
		GV_Recenter_Per_URL(gv_options.centering_options,true);
	}
	
	if (!gv_options.center || gv_options.center.length < 2 || typeof(gv_options.center) != 'object') { gv_options.center = [40,-100]; gv_options.zoom == 'auto'; }
	if (typeof(gv_options.zoom) == 'undefined' || (!gv_options.zoom && gv_options.zoom != '0')) { gv_options.zoom = 'auto'; }
	if (gv_options.zoom == 'auto') {
		gvg.center = L.latLng(gv_options.center[0],gv_options.center[1]);
		gvg.zoom = (gv_options.autozoom_default) ? parseFloat(gv_options.autozoom_default) : 11;
	} else {
		gvg.center = L.latLng(gv_options.center[0],gv_options.center[1]);
		if (parseFloat(gv_options.zoom)-0.5 == Math.floor(parseFloat(gv_options.zoom))) { gmap.options.zoomSnap = 0.5; }
		gvg.zoom = parseFloat(gv_options.zoom);
	}
	gmap.setView(gvg.center,gvg.zoom,{animate:gv_options.animated_zoom});
	
	// This must be done first so the map type and/or opacity selectors will "float" left of it; also, other controls may need to check for its presence
	if (gv_options.utilities_menu !== false) {
		if (typeof(gv_options.utilities_menu) != 'object') { // BC
			gv_options.utilities_menu = {};
			gv_options.utilities_menu['maptype'] = (gv_options.map_type_control && (gv_options.map_type_control.placement == 'map')) ? false : true;
			gv_options.utilities_menu['opacity'] = (gv_options.map_opacity_control == 'map' || gv_options.map_opacity_control === false) ? false : true;
			gv_options.utilities_menu['measure'] = (gv_options.measurement_tools == 'none' || gv_options.measurement_tools == 'map') ? false : true;
			gv_options.utilities_menu['geolocate'] = (gv_options.geolocation_control == 'none' || gv_options.geolocation_control == 'map') ? false : true;
			gv_options.utilities_menu['profile'] = (gv_options.profile_options === false || (gv_options.profile_options && (gv_options.profile_options.enabled === false || gv_options.profile_options.placement == 'map'))) ? false : true;
		}
		GV_Utilities_Button();
	} else {
		gv_options.utilities_menu = null;
	}
	
	gvg.current_map_type = (gvg.bg[gv_options.map_type]) ? gv_options.map_type : 'GV_DEFAULT'; // in case of invalid map_type
	var url_mt = GV_Maptype_From_URL(gv_options.centering_options); if (url_mt) { gvg.current_map_type = url_mt; } // needs to be up here separately because there's a control that depends on it
	var url_fmt = GV_Maptype_From_URL({maptype_key:'gv_force_maptype'}); if (url_fmt) { gvg.current_map_type = url_fmt; } // needs to be up here separately because there's a control that depends on it
	if (!gv_options.map_type_control) { gv_options.map_type_control = []; } if (gv_options.map_type_control.visible == 'auto') { gv_options.map_type_control.visible = (gvg.mobile_browser) ? false : true; }
	if (gv_options.map_type_control && gv_options.map_type_control.style != 'none' && gv_options.map_type_control.style !== 'false' && gv_options.map_type_control.style !== false && gv_options.map_type_control.placement != 'utilities' && gv_options.map_type_control.visible !== false) {
		var help = (gv_options.map_type_control.help && !gvg.mobile_browser) ? true : false;
		var mtc_div = GV_MapTypeControl('map',help);
		gmap.getContainer().appendChild(mtc_div);
		var um_wd = (gv_options.utilities_menu) ? 26 : 0;
		GV_Place_Div(mtc_div,6+um_wd,6,'topright');
		gvg.maptype_control = mtc_div;
	}
	GV_Set_Map_Type(gvg.current_map_type); // handles multi-layer backgrounds
	
	if (typeof(gv_options.zoom_control) != 'undefined' && (gv_options.zoom_control == 'none' || gv_options.zoom_control === false)) {
		// no pan/zoom control was requested
	} else {
		if (gv_options.zoom_control == 'auto') { gv_options.zoom_control = (gvg.mobile_browser) ? 'small' : 'large'; }
		if (gv_options.zoom_control == 'large' || gv_options.zoom_control == 'small') { // custom control
			var zc_div = GV_Zoom_Control(gv_options.zoom_control);
			gvg.zoom_control = new GV_Control(zc_div,'LEFT_TOP',{left:10,right:10,top:6,bottom:12},-1);
			gvg.listeners['zoom_control'] = gmap.on("zoom",function(){ GV_Reset_Zoom_Control() });
		} else if (gv_options.zoom_control != 'false') { // small default control
			var zc = L.control.zoom({position:'topleft'}).addTo(gmap);
			
		}
	}
	
	var profile_div = L.DomUtil.create('div'); profile_div.id = 'gv_profile_control';
	profile_div.className = 'gv_profile_button'; 
	profile_div.style.cssText = "clear:none; background-image:url('"+gvg.embedded_images['profile']+"'); background-repeat:no-repeat; background-position:center;";
	profile_div.title = "Elevation Profile";
	profile_div.onclick = function(){ if ($('gv_profile') && gvg.floating_profile) { GV_Remove_Elevation_Profile(); } else { GV_Draw_Elevation_Profile(); } }
	gvg.profile_control = new GV_Control(profile_div,'bottomleft',{left:6,right:6,top:0,bottom:0});
	profile_div.style.display = "none"; // It's been created but it's invisible so far
	gvg.floating_profile = ($('gv_profile')) ? false : true;
	
	gvg.scale_units = (gv_options.scale_units && gv_options.scale_units.match(/^[ui]/i)) ? 'imperial' : ((gv_options.scale_units && gv_options.scale_units.match(/^[ba]/i)) ? 'both' : 'metric');
	if (gv_options.scale_control !== false) {
		gvg.scale_control = L.control.scale({position:'bottomleft',metric:true,imperial:true}).addTo(gmap);
		var scc = gvg.scale_control.getContainer(); scc.style.marginLeft = '3px';
		if (!scc.id) { scc.id = 'gv_scale_control'; }
		if (gvg.scale_units != 'both') {
			gvg.scale_control.switchUnits = function(){
				var m = this._mScale.style; var i = this._iScale.style;
				m.borderStyle = i.borderStyle = 'none solid solid solid';
				m.borderColor = i.borderColor = 'rgb(119, 119, 119)';
				m.borderWidth = i.borderWidth = '2px';
				m.margin = i.margin = '0px';
				if (m.display!='none' && i.display!='none') { // first time
					if (gvg.scale_units == 'metric') {
						m.display = 'block'; i.display = 'none';
					} else {
						m.display = 'none'; i.display = 'block';
					}
				} else if (m.display!='none' && i.display=='none') {
					m.display = 'none'; i.display = 'block';
				} else if (m.display=='none' && i.display!='none') {
					m.display = 'block'; i.display = 'none';
				}
			};
			GV_Disable_Leaflet_Dragging(scc);
			gvg.scale_control.switchUnits(); // the first time, both are shown; hide one
			L.DomEvent.on(scc,'click',function(){ gvg.scale_control.switchUnits(); });
		}
	}
	
	if (gv_options.map_opacity_control && gv_options.map_opacity_control != 'false' && gv_options.map_opacity_control != 'none' && (gv_options.map_opacity_control == 'separate' || gv_options.map_opacity_control == 'map' || gv_options.map_opacity_control == 'both' || gv_options.map_opacity_control === true)) {
		var oc_div = GV_MapOpacityControl(gv_options.map_opacity,'map');
		gmap.getContainer().appendChild(oc_div);
		var um_wd = (gv_options.utilities_menu) ? 26 : 0;
		var mtc_wd = (gvg.maptype_control) ? gvg.maptype_control.clientWidth+4 : 0;
		GV_Place_Div(oc_div,6+um_wd+mtc_wd,6,'topright');
		gvg.opacity_control = oc_div;
		GV_Background_Opacity(gv_options.map_opacity); // redundant if control has already been placed
	} else if (gv_options.map_opacity != 1 && gv_options.map_opacity != 100) {
		GV_Background_Opacity(gv_options.map_opacity); // redundant if control has already been placed
	} else {
		GV_Background_Opacity(1);
	}
	
	if (gv_options.tracklist_options && typeof(gv_options.tracklist_options) == 'boolean') { gv_options.tracklist_options = {enabled:gv_options.tracklist_options}; }
	else if (gv_options.tracklist || gv_options.track_list) { gv_options.tracklist_options = {enabled:true}; }
	if (gv_options.tracklist_options && (gv_options.tracklist_options.tracklist || gv_options.tracklist_options.enabled)) {
		var tlo = gv_options.tracklist_options;
		tlo.id = (tlo.id && $(tlo.id)) ? tlo.id : 'gv_tracklist';
		tlo.position = (tlo.position) ? tlo.position : ['RIGHT_TOP',4,32];
		if (tlo.id == 'gv_tracklist') {
			var d = (tlo.draggable === false) ? false : true;  var c = (tlo.collapsible === false) ? false : true;
			GV_Build_And_Place_Draggable_Box({base_id:tlo.id,class_name:'gv_tracklist',position:tlo.position,draggable:d,collapsible:c,min_width:tlo.min_width,max_width:tlo.max_width,min_height:tlo.min_height,max_height:tlo.max_height});
			if ($(tlo.id)) {
				if (!$(tlo.id).style.border) { $(tlo.id).style.border = 'solid #666666 1px'; }
				if (!$(tlo.id).style.padding) { $(tlo.id).style.padding = '4px'; }
			}
			if (tlo.collapsed && tlo.collapsible) {
				if ($(tlo.id+'_handle')) { $(tlo.id+'_handle').style.minWidth = '50px'; }
				GV_Windowshade_Toggle(tlo.id,tlo.id+'_handle',true);
			}
		}
		gv_options.tracklist_options = tlo;
	}
	
	gvg.marker_list_div_id = '';
	gvg.marker_list_exists = null;
	
	if (gv_options.marker_list_options && typeof(gv_options.marker_list_options) == 'boolean') { gv_options.marker_list_options = {enabled:gv_options.marker_list_options}; }
	else if (gv_options.marker_list || gv_options.markerlist) { gv_options.marker_list_options = {enabled:true}; }
	if (gv_options.marker_list_options) {
		var mlo = gv_options.marker_list_options;
		if (typeof(mlo) == 'boolean') { mlo = {enabled:mlo}; }
		if (gv_options.full_screen && mlo.floating !== false) { mlo.floating = true; }
		if (!mlo.id || !$(mlo.id)) {
			if (mlo.floating === false && mlo.id_static && $(mlo.id_static)) { mlo.id = mlo.id_static; }
			else if (mlo.floating && mlo.id_floating && $(mlo.id_floating)) { mlo.id = mlo.id_floating; }
			else { mlo.id = 'gv_marker_list'; }
		}
		gvg.marker_list_div_id = mlo.id;
		if (mlo.list === false || mlo.enabled === false) { // this trumps everything
			gvg.marker_list_exists = false;
			if ($(mlo.id)) { $(mlo.id).parentNode.removeChild($(mlo.id)); }
		} else if (mlo.list == true || mlo.enabled == true) {
			gvg.marker_list_exists = true;
		 }else {
			gvg.marker_list_exists = false;
		}
		if (gvg.marker_list_exists) {
			GV_Reset_Marker_List();
			if (mlo.floating) {
				if (mlo.width) { if (!mlo.max_width) { mlo.max_width = mlo.width; } if (!mlo.min_width) { mlo.min_width = mlo.width; } }
				if (mlo.height) { if (!mlo.max_height) { mlo.max_height = mlo.height; } if (!mlo.min_height) { mlo.min_height = 0; } }
				if (!mlo.position) { mlo.position = ['RIGHT_BOTTOM',3,40]; }
				if (mlo.draggable !== false) { mlo.draggable = true; }
				if (mlo.collapsible !== false) { mlo.collapsible = true; }
				GV_Build_And_Place_Draggable_Box({base_id:mlo.id,class_name:'gv_marker_list',position:mlo.position,draggable:mlo.draggable,collapsible:mlo.collapsible,min_width:mlo.min_width,max_width:mlo.max_width,min_height:mlo.min_height,max_height:mlo.max_height,top_margin:mlo.top_margin});
				if ($(mlo.id)) {
					if (!$(mlo.id).style.border) { $(mlo.id).style.border = 'solid #666666 1px'; }
					if (!$(mlo.id).style.padding) { $(mlo.id).style.padding = '4px'; }
				} else {
					gvg.marker_list_exists = false;
				}
				if (mlo.collapsed && mlo.collapsible) { GV_Windowshade_Toggle(mlo.id,mlo.id+'_handle',true); }
			} else {
				if ($(mlo.id)) {
					$(mlo.id).style.display = 'block';
					if (!$(mlo.id).style.width) {
						if (mlo.width) { $(mlo.id).style.width = mlo.width+'px'; }
						if (!$(mlo.id).style.maxWidth && mlo.max_width) { $(mlo.id).style.maxWidth = mlo.max_width+'px'; }
						if (!$(mlo.id).style.minWidth && mlo.min_width) { $(mlo.id).style.minWidth = mlo.min_width+'px'; }
					}
					if (!$(mlo.id).style.height) {
						if (mlo.height) { $(mlo.id).style.height = mlo.height+'px'; }
						if (!$(mlo.id).style.maxHeight) { $(mlo.id).style.maxHeight = gv_options.height+'px'; }
					}
					if (!$(mlo.id).style.overflow) { $(mlo.id).style.overflow = 'auto'; }
					if (!$(mlo.id).style.cssFloat) { $(mlo.id).style.cssFloat = 'left'; }
				} else {
					gvg.marker_list_exists = false;
				}
			}
			if (gvg.marker_list_exists && mlo.help_tooltips) {
				gvg.marker_list_text_tooltip = 'Click to '; gvg.marker_list_icon_tooltip = 'Click to ';
				if (mlo.center) { gvg.marker_list_text_tooltip += 'center + '; gvg.marker_list_icon_tooltip += 'center + '; }
				if (mlo.zoom) { gvg.marker_list_text_tooltip += 'zoom in + '; gvg.marker_list_icon_tooltip += 'zoom in + '; }
				if (mlo.toggle) { gvg.marker_list_text_tooltip += 'hide/show the marker + '; }
				if (mlo.url_links) { gvg.marker_list_text_tooltip += 'open the marker\'s link + '; }
				if (mlo.info_window !== false && !mlo.toggle) { gvg.marker_list_text_tooltip += 'open the info window'; }
				if (mlo.info_window !== false) { gvg.marker_list_icon_tooltip += 'open the info window'; }
				gvg.marker_list_text_tooltip = gvg.marker_list_text_tooltip.replace(/(Click to |, | \+ )$/,'');
				gvg.marker_list_icon_tooltip = gvg.marker_list_icon_tooltip.replace(/(Click to |, | \+ )$/,'');
			}
		}
		gv_options.marker_list_options = mlo;
	}
	
	if (gv_options.legend_options === true || (gv_options.legend && !gv_options.legend_options)) { gv_options.legend_options = {enabled:true}; }
	if (gv_options.legend_options && (gv_options.legend_options.legend || gv_options.legend_options.enabled)) {
		var opts = gv_options.legend_options;
		var id = (opts.id) ? opts.id : 'gv_legend';
		if (GV_BoxHasContent(id)) {
			var pos = (opts.position && opts.position.length >= 3) ? opts.position : ['G_ANCHOR_TOP_LEFT',70,6];
			var d = (opts.draggable === false) ? false : true;  var c = (opts.collapsible === false) ? false : true;
			GV_Build_And_Place_Draggable_Box({base_id:id,class_name:'gv_legend',position:gv_options.legend_options.position,draggable:d,collapsible:d});
			if (opts.collapsed && c) { GV_Windowshade_Toggle(id,id+'_handle',true); }
		} else if ($(id)) {
			GV_Delete(id);
		}
	}
	
	if (gv_options.infobox_options === true || (gv_options.infobox && !gv_options.infobox_options)) { gv_options.infobox_options = {enabled:true}; }
	if (gv_options.infobox_options && (gv_options.infobox_options.infobox || gv_options.infobox_options.enabled)) {
		var opts = gv_options.infobox_options;
		var id = (opts.id) ? opts.id : 'gv_infobox';
		if (GV_BoxHasContent(id)) {
			var pos = (opts.position && opts.position.length >= 3) ? opts.position : ['G_ANCHOR_TOP_LEFT',70,6];
			var d = (opts.draggable === false) ? false : true;  var c = (opts.collapsible === false) ? false : true;
			GV_Build_And_Place_Draggable_Box({base_id:id,class_name:'gv_infobox',position:pos,draggable:d,collapsible:c});
			if (opts.collapsed && c) { GV_Windowshade_Toggle(id,id+'_handle',true); }
		} else if ($(id)) {
			GV_Delete(id);
		}
	}
	
	if (gv_options.searchbox_options === true || (gv_options.searchbox && !gv_options.searchbox_options)) { gv_options.searchbox_options = {enabled:true}; }
	if (gv_options.searchbox_options && (gv_options.searchbox_options.searchbox || gv_options.searchbox_options.enabled)) {
		var opts = gv_options.searchbox_options;
		var id = (opts.id) ? opts.id : 'gv_searchbox';
		var zoom = (opts.zoom === false) ? 'false' : 'true';
		var html = '';
		if (!GV_BoxHasContent(id)) {
			html = '<div style="max-width:200px;">Re-center on an address:<br /><input id="gv_searchbox_input" type="text" size="20" style="font:11px Arial;" /> <input id="gv_searchbox_button" type="button" value="Find" style="font:10px Verdana;" onclick="GV_Center_On_Address({input_box:\'gv_searchbox_input\',button:\'gv_searchbox_button\',message_box:\'gv_searchbox_message\',found_template:\'\',unfound_template:\'\',zoom:'+zoom+'});" /><br /><span style="font:10px Arial;" id="gv_searchbox_message">&nbsp;</span></div>';
		} else {
			if ($(id).innerHTML.match(/GV_Center_On_Address *\( *\{ *\w/) && !$(id).innerHTML.match(/\bzoom:/)) {
				$(id).innerHTML = $(id).innerHTML.replace(/(GV_Center_On_Address *\( *\{ *)(\w)/,'$1'+'zoom:'+zoom+',$2');
			}
		}
		if ((GV_BoxHasContent(id) || html)) {
			if (opts.floating !== false) {
				var pos = (opts.position && opts.position.length >= 3) ? opts.position : ['G_ANCHOR_BOTTOM_LEFT',3,60];
				var d = (opts.draggable === false) ? false : true;  var c = (opts.collapsible === false) ? false : true;
				GV_Build_And_Place_Draggable_Box({base_id:id,class_name:'gv_searchbox',position:pos,draggable:d,collapsible:c,html:html});
				if (opts.collapsed && c) { GV_Windowshade_Toggle(id,id+'_handle',true); }
			} else {
				
			}
			GV_Enable_Return_Key('gv_searchbox_input','gv_searchbox_button');
		} else if ($(id)) {
			GV_Delete(id);
		}
	}
	
	gv_options.measurement_tools = (gv_options.measurement_tools === false || gv_options.measurement_tools == 'false' || gv_options.measurement_tools == 'none' || gv_options.measurement_tools == 'utilities') ? false : true;
	
	if (gv_options.center_coordinates !== false || gv_options.measurement_tools) {
		// set up and place the box that shows the center coordinates
		var center_coords_div;
		if (!$('gv_center_container')) {
			center_coords_div = document.createElement('div'); center_coords_div.id = 'gv_center_container';
			center_coords_div.style.display = 'none';
			var center_html = '';
			center_html += '<table style="cursor:crosshair; filter:alpha(opacity=80); -moz-opacity:0.80; -khtml-opacity:0.80; opacity:0.80;" cellspacing="0" cellpadding="0" border="0"><tr valign="middle">';
			if (typeof(gv_options.center_coordinates) == 'undefined' || gv_options.center_coordinates !== false) {
				center_html += '<td><div id="gv_center_coordinates" class="gv_center_coordinates" onclick="GV_Toggle(\'gv_crosshair\'); gvg.crosshair_temporarily_hidden = false;" title="Click here to turn center crosshair on or off"></div></td>';
			}
			if (gv_options.measurement_tools) {
				center_html += '<td><div id="gv_measurement_icon" style="display:block; width:23px; height:15px; margin-left:3px; cursor:pointer;"><img src="'+gvg.embedded_images['ruler']+'" width="19" height="13" border="0" vspace="1" onclick="GV_Place_Measurement_Tools(\'distance\');" title="Click here for measurement tools" class="gmnoprint" style="cursor:pointer;" /></div></td>';
			}
			center_html += '</tr></table>';
			center_coords_div.innerHTML = center_html;
			gmap.getContainer().appendChild(center_coords_div);
		} else {
			center_coords_div = $('gv_center_container');
		}
		gvg.center_coordinates_control = new GV_Control(center_coords_div,'LEFT_BOTTOM',{left:3,right:3,top:1,bottom:4},-2);
		
		// set up the box that holds the crosshair in the middle -- but use the GV_Setup_Crosshair function to center it
		if (gv_options.center_coordinates !== false) {
			if (!$('gv_crosshair_container')) {
				var url = (gv_options.crosshair_url) ? gv_options.crosshair_url : gvg.embedded_images['crosshair'];
				var size = (gv_options.crosshair_size) ? gv_options.crosshair_size : 15;
				var div = document.createElement('div'); div.id = 'gv_crosshair_container';
				div.style.display = 'none'; div.style.pointerEvents = "none"; div.className= 'gmnoprint';
				var inner_div = document.createElement('div'); inner_div.id = 'gv_crosshair';
				inner_div.style.width = size+'px'; inner_div.style.height = size+'px'; inner_div.style.display = 'block';
				//inner_div.innerHTML = //'<img src="'+crosshair_url+'" alt="" width="'+size+'" height="'+size+'" />';
				inner_div.style.backgroundImage = "url('"+url+"')";
				inner_div.style.backgroundRepeat = "no-repeat";
				inner_div.style.backgroundPosition = "center";
				inner_div.style.backgroundSize = "cover";
				inner_div.style.pointerEvents = "none";
				inner_div.style.display = (gv_options.crosshair_hidden) ? 'none' : 'block';
				gvg.hidden_crosshair_is_still_hidden = true;
				div.appendChild(inner_div);
				gmap.getContainer().appendChild(div);
			}
			GV_Setup_Crosshair({container_id:'gv_crosshair_container',size:size,center_coordinates_id:'gv_center_coordinates',fullscreen:gv_options.full_screen});
		}
	}
	if (gv_options.mouse_coordinates && !gvg.mobile_browser) {
		// set up and place the box that shows the mouse coordinates
		var mouse_div;
		if (!$('gv_mouse_container')) {
			mouse_div = document.createElement('div'); mouse_div.id = 'gv_mouse_container';
			mouse_div.style.display = 'none';
			mouse_div.innerHTML = '<table style="cursor:crosshair; filter:alpha(opacity=80); -moz-opacity:0.80; -khtml-opacity:0.80; opacity:0.80;" cellspacing="0" cellpadding="0" border="0"><tr><td><div id="gv_mouse_coordinates" class="gv_mouse_coordinates">Mouse:&nbsp;</div></td></tr></table>';
			gmap.getContainer().appendChild(mouse_div);
		} else {
			mouse_div = $('gv_mouse_container');
		}
		gvg.mouse_coordinates_control = new GV_Control(mouse_div,'LEFT_BOTTOM',{left:3,right:3,top:1,bottom:1},-1);
		gmap.addEventListener('mousemove', function(mouse_coords) {
			if ($('gv_mouse_coordinates')) {
				$('gv_mouse_coordinates').innerHTML = 'Mouse: <span id="gv_mouse_coordinate_pair">'+mouse_coords.latlng.lat.toFixed(5)+','+gmap.wrapLatLng(mouse_coords.latlng).lng.toFixed(5)+'</span>';
			}
		});
	}
	if ((gv_options.measurement_tools || (gv_options.utilities_menu && gv_options.utilities_menu['measure'])) && ((gv_options.measurement_tools && gv_options.measurement_tools.visible) || (gv_options.measurement_options && gv_options.measurement_options.visible))) {
		GV_Place_Measurement_Tools(); // puts the box up on the screen, hides the ruler icon
	}
	if ($('gv_credit') && $('gv_credit').innerHTML.indexOf('gpsvisualizer.com') < 0) {
		var bogus_credit = $('gv_credit');
		bogus_credit.parentNode.removeChild(bogus_credit);
	}
	var credit_div;
	if (!$('gv_credit')) {
		credit_div = document.createElement('div'); credit_div.id = 'gv_credit';
		credit_div.style.cssText = 'display:none; line-height:1.1; padding:1px; background-color:#ffffff; opacity:0.80; filter:alpha(opacity=80); -moz-opacity:0.80; -khtml-opacity:0.80;';
		credit_div.innerHTML = (gv_options.custom_credit && gv_options.custom_credit.indexOf('gpsvisualizer.com') > -1) ? gv_options.custom_credit : 'Map created at <a style="font:inherit;" target="_blank" href="https://www.gpsvisualizer.com/">GPSVisualizer.com</a>';
		gmap.getContainer().appendChild(credit_div);
	} else {
		credit_div = $('gv_credit');
	}
	if (gv_options.credit_position && gv_options.credit_position.length >= 3 && gv_options.credit_position[1] < gmap.getContainer().clientWidth && gv_options.credit_position[2] < gmap.getContainer().clientHeight) {
		GV_Place_Div('gv_credit',gv_options.credit_position[1],gv_options.credit_position[2],gv_options.credit_position[0]);
	} else {
		gvg.credit_control = new GV_Control(credit_div,'RIGHT_BOTTOM',{left:4,right:1,top:3,bottom:2},-3);
		if (window.location.toString().match(/000webhost/)) { // move 000webhost tag to the left
			window.setTimeout('var disclaimers = document.body.getElementsByClassName("disclaimer"); for (var i=0; i<disclaimers.length; i++) { disclaimers[i].style.display="none"; }',1);
			window.setTimeout('var cn = document.body.childNodes;for (var i=0; i<cn.length; i++) { if (cn[i].tagName =="DIV" && cn[i].innerHTML.match(/www.000webhost.com/)) { cn[i].style.textAlign="right"; cn[i].style.right="-12px"; cn[i].style.bottom="30px"; } }',2000);
		}
	}
	
	/* LEAFLET:NEEDED?
	var copyright_div = document.createElement('div');
	copyright_div.id = "gv_copyright_container";
	copyright_div.style.cssText = 'display:none; height:14px; width:auto; overflow:hidden; margin:0px; padding:0px; background-color:transparent;';
	copyright_div.innerHTML = '<div style="position:absolute; background-color:#f5f5f5; opacity:0.0; width:100%; height:100%"><!-- --></div>'; // white box
	copyright_div.innerHTML += '<div id="gv_map_copyright" style="padding:1px 3px 1px 3px; position:relative; white-space:nowrap;"></div>'; // text
	gmap.getContainer().appendChild(copyright_div);
	gvg.copyright_control = new GV_Control(copyright_div,'BOTTOM_RIGHT',{left:0,right:0,top:0,bottom:0},-4);
	GV_Show_Map_Copyright(gvg.bg[gvg.current_map_type]);
	*/

	var preload_div = document.createElement('div'); preload_div.id = 'gv_preload_infowindow'; preload_div.style.display = 'none';
	gmap.getContainer().appendChild(preload_div);
	
	gv_options.info_window_height_maximum = (gv_options.info_window_height_maximum) ? parseFloat(gv_options.info_window_height_maximum) : gmap.getContainer().clientHeight-120; // may as well do it here...
	gv_options.info_window_width_maximum = (gv_options.info_window_width_maximum) ? parseFloat(gv_options.info_window_width_maximum) : gmap.getContainer().clientWidth-100; // may as well do it here...
	gv_options.info_window_width = (parseFloat(gv_options.info_window_width) > gv_options.info_window_width_maximum) ? gv_options.info_window_width_maximum : parseFloat(gv_options.info_window_width);
	gvg.listeners['close_info_window'] = gmap.on("click", function(){
		GV_Utilities_Menu(false);
		// if (gvg.info_window) { gvg.open_info_window_index = null; gvg.info_window.close(); }
		// if (gvg.geolocation_info_window) { gvg.geolocation_info_window.close(); }
	});
	gvg.open_popups = {};
	gmap.on("popupopen", function(e){
		if (e.popup._container) {
			var cb = e.popup._container.getElementsByClassName('leaflet-popup-close-button'); if (cb[0] && cb[0].href) { cb[0].href = "javascript:;"; }
		}
	});
	
	if (gv_options.rightclick_coordinates) {
		gvg.listeners['map_rightclick'] = gmap.on("contextmenu", function(click){
			GV_Coordinate_Info_Window(click.latlng,gv_options.rightclick_coordinates_multiple);
		});
	}
	
	// Set these up so the individual map's code has a place to put stuff
	wpts = new Array();
	trk = new Array();
	trk_info = new Array();
	trk_segments = new Array();
	if (gv_options.marker_clustering) { GV_Setup_Clustering(); }
	
}

function GV_Finish_Map() {
//GV_Debug ("* "+GV_Debug_Function_Name(arguments.callee)+" (called from "+GV_Debug_Function_Name(arguments.callee.caller)+")");
	if (!self.gv_options || !self.gmap) { return false; }
	
//GV_Debug ((!gvg.basic_setup_finished)?"about to do BASIC setup stuff":"skipping basic setup because it was done earlier");
	if (!gvg.basic_setup_finished) {
		if (!self.wpts) { eval('wpts = []'); }
		if (!self.trk) { eval('trk = []'); }
		
		if (gv_options.full_screen) {
			window.onresize = function(){ GV_Fill_Window_With_Map(gmap.getContainer().id); };
		}
		
		if (window.location.toString().match(/[&\\?\#](gv_force_[a-z]+)=([^&]+)/)) {
			window.setTimeout("GV_Recenter_Per_URL({center_key:'gv_force_center',zoom_key:'gv_force_zoom',maptype_key:'gv_force_maptype'})",200);
			// gmap.once("load moveend", function(){ GV_Recenter_Per_URL({center_key:'gv_force_center',zoom_key:'gv_force_zoom',maptype_key:'gv_force_maptype'}); });
		} else if (gv_options.centering_options) {
			window.setTimeout("GV_Recenter_Per_URL(gv_options.centering_options)",200);
			// gmap.once("load moveend", function(){ GV_Recenter_Per_URL(gv_options.centering_options); });
		}
		
		// DYNAMIC FILES
		gvg.dynamic_data = false;
		GV_Get_Dynamic_File_Info();
		
		gvg.basic_setup_finished = true;
	}
	
	if (gv_options.zoom == 'auto') {
		if (gvg.autozoom_elements && gvg.autozoom_elements.length >= 1) {
			GV_Autozoom({'save_position':true,'adjustment':gv_options.autozoom_adjustment,'default_zoom':gv_options.autozoom_default,'margin':gv_options.autozoom_margin},gvg.autozoom_elements);
		} else {
			GV_Autozoom({'save_position':true,'adjustment':gv_options.autozoom_adjustment,'default_zoom':gv_options.autozoom_default,'margin':gv_options.autozoom_margin},trk,wpts);
		}
		gv_options.center = [gmap.getCenter().lat,gmap.getCenter().lng];
	}
	gvg.dynamic_data_last_center = gmap.getCenter(); gvg.dynamic_data_last_zoom = gmap.getZoom(); // for reload-on-move purposes
	
	if (!gvg.marker_events_are_set_up) {
		gvg.marker_events_are_set_up = true;
		GV_Setup_Marker_Processing_Events();
	}
	
	if (gvg.filter_markers) {
		// processing should be done later by the "idle" listener, once everything has settled down
	} else {
		GV_Process_Markers();
	}
	
//lert("gvg.dynamic_file_index = "+gvg.dynamic_file_index+", gvg.dynamic_file_count = "+gvg.dynamic_file_count+", gvg.dynamic_file_single = "+gvg.dynamic_file_single);
	if (gvg.dynamic_file_index < (gvg.dynamic_file_count-1) && !gvg.dynamic_file_single) {
		if (gvg.listeners['dynamic_reload']) { gvg.listeners['dynamic_reload'](); }
		return; // don't do the final steps quite yet
	}
//lert("did not return");
	if (gvg.dynamic_file_count && gvg.filter_markers) {
		// this needs to be done now because the "idle" listener was already tripped, before the new markers were loaded
		GV_Process_Markers();
	}
	
	
	// FINALLY, THE END:
	
	GV_Finish_Tracklist();
	if (Object.keys(trk).length == 0 || ($('gv_tracklist') && gvg.tracklist_count == 0)) {
		GV_Delete('gv_tracklist_container');
	}
	for (var j in trk) {
		if (trk[j] && trk[j].info && trk[j].info.elevation) { gvg.profile_data = true; break; }
	}
	
	GV_Restack_Tracks(); // re-order tracks if any z_index values were specified
	
	if (gv_options.profile_options && gv_options.profile_options.icon && gvg.profile_data && $('gv_profile_control')) {
		$('gv_profile_control').style.display = 'block';
	}
	if (gv_options.profile_options && gv_options.profile_options.visible) {
//console.log('Drawing elevation profile upon initial Leaflet map load...');
		GV_Draw_Elevation_Profile();
	}
	
	if (1==2 && wpts.length == 0 && !gvg.marker_list_count && !gvg.filter_markers && $('gv_marker_list_container')) {
		GV_Delete('gv_marker_list_container');
	}
	
	// Now that everything's settled down, that hidden crosshair can finally be shown (when the map is first moved)
	window.setTimeout("gvg.hidden_crosshair_is_still_hidden = false;",150);
	if(!gvg.saved_center && gmap.savePosition){ gmap.savePosition(); }
	
	if (parseFloat(gmap.options.zoomDelta)-0.5 == Math.floor(parseFloat(gmap.options.zoomDelta))) { gmap.options.zoomSnap = 0.5; }
	
//	if (gvg.listeners['dynamic_reload']) { gvg.listeners['dynamic_reload'](); }
	
	gvg.dynamic_file_index = -1; // reset the counter for future reloads
	if (gvg.dynamic_data) {
		var ms = (gvg.idled_at_least_once) ? 100 : 1000;
		window.setTimeout("GV_Create_Dynamic_Reload_Listener()",ms);
	}
	
	if (gv_options.heatmap_options) {
		gvg.heatmaps = [];
		if (gv_options.heatmap_options[0]) {
			for (h=0; h<gv_options.heatmap_options.length; h++) { GV_Heatmap(gv_options.heatmap_options[h]); }
		} else {
			GV_Heatmap(gv_options.heatmap_options);
		}
	}
	
	if (gv_options.onload_function) {
		var ms = (gv_options.onload_function_delay) ? gv_options.onload_function_delay : 500;
		window.setTimeout(gv_options.onload_function.toString(),ms);
	}
	
}

function GV_Setup_Marker_Processing_Events() {
	if (!self.gmap || !self.wpts) { return false; }
	
	// ADD DYNAMIC-LOADING LISTENER THAT ONLY HAPPENS THE FIRST TIME THE MAP LOADS
	if (gvg.dynamic_load_on_open) {

		gvg.listeners['dynamic_reload'] = function(){
			GV_Reload_Markers_From_All_Files(1);
			gvg.listeners['dynamic_reload'] = null;
		};
		
	} else {
		gvg.dynamic_file_index = gvg.dynamic_file_count-1; // pretend we processed them all so the map can finish
	}
	
	// if the reloading process fails, the reload-on-move listener still needs to be put back
	if (gvg.dynamic_reload_on_move && !gvg.listeners['dynamic_reload']) {
		gmap.on("load moveend", function(){
			window.setTimeout("GV_Create_Dynamic_Reload_Listener();",1000);
		} );
	}
	
	// Add a permanent listener that re-processes all the markers *every* time the map is idle
	if (gvg.filter_markers) {
		gvg.filtered_at_least_once = false;
		gvg.listeners['process_markers'] = function() {
			gvg.filtered_at_least_once = true;
			GV_Process_Markers();
		};
		gmap.on("load moveend",gvg.listeners['process_markers']);
		gvg.listeners['process_markers']();
		
		//gvg.filtered_at_least_once = true;
		//GV_Process_Markers();
	}
}

function GV_Create_Dynamic_Reload_Listener() {
	if (gvg.dynamic_reload_on_move) {
		if (!gvg.listeners['dynamic_reload']) {
			gvg.listeners['dynamic_reload'] = function() {
				gvg.idled_at_least_once = true;
				gvg.dynamic_reload_via_move = true;
				GV_Reload_Markers_From_All_Files(2);
			};
			gmap.on('moveend',function() { gvg.listeners['dynamic_reload'](); });
		}
	} else {
		if (gvg.listeners['dynamic_reload']) { gvg.listeners['dynamic_reload'] = null; }
	}
}
function GV_Get_Dynamic_File_Info() {
	gvg.dynamic_file_count = 0;
	if (gv_options.dynamic_data) { // first-time setup of URLs and such
		if (typeof(gv_options.dynamic_data) == 'string') { // it's a bare URL
			gv_options.dynamic_data = [ { url:gv_options.dynamic_data } ];
		} else if (gv_options.dynamic_data.constructor != Array) { // make it into an array
			gv_options.dynamic_data = [ gv_options.dynamic_data ];
		}
		gvg.dynamic_file_count = gv_options.dynamic_data.length;
	}
	gvg.dynamic_load_on_open = false; gvg.dynamic_reload_on_move = false; gvg.dynamic_movement_threshold = 0;
	gvg.dynamic_reload_on_move_count = 0;
	if (gvg.dynamic_file_count > 0) {
		gvg.dynamic_data = true;
		for (var i=0; i<gv_options.dynamic_data.length; i++) {
			var ddf = gv_options.dynamic_data[i];
			var file_ok = (ddf && (ddf.url || ddf.google_spreadsheet)) ? true : false;
			if (file_ok && ddf.load_on_open !== false) { gvg.dynamic_load_on_open = true; } // must be explicitly false to not load on open
			if (file_ok && ddf.reload_on_move) { gvg.dynamic_reload_on_move = true; gvg.dynamic_reload_on_move_count += 1; } // any sort of true-ish value will allow loading upon movement
			if (file_ok && ddf.movement_threshold && ddf.movement_threshold > gvg.dynamic_movement_threshold) { gvg.dynamic_movement_threshold = ddf.movement_threshold; }
		}
	}
	if (gvg.dynamic_reload_on_move) { gvg.autopan = false; }
}

function GV_Update_Dynamic_File_Info(reload) { // this function is for pages that modify gv_options.dynamic_data after the map has loaded
	GV_Get_Dynamic_File_Info();
	GV_Create_Dynamic_Reload_Listener();
	if (typeof(reload) == 'number') {
		GV_Load_Markers_From_File(reload);
	} else if (reload) {
		GV_Reload_Markers_From_All_Files();
	}
}

function GV_Process_Markers () {
	if (!self.gmap || !self.wpts) { return false; }
	
	gvg.info_window_open = false;
	if (gvg.info_window && gvg.info_window.getMap()) {
		gvg.info_window_open = true;
	}
	
	if (gvg.filter_markers) {
		GV_Filter_Markers_In_View();
	}
	
	for (var j=0; j<wpts.length; j++) {
		GV_Process_Marker(wpts[j]);
	}
	
	if (gvg.marker_list_exists && wpts.length > 0) {
		GV_Marker_List();
	}

	if (gv_options.marker_clustering && gvg.marker_cluster) {
		GV_Cluster_All_Markers();
	}
	gvg.markers_processed = true;
	
}


//  **************************************************
//  * markers
//  **************************************************

function GV_Draw_Marker(info) {
	if (self.gmap && self.wpts) {
		var m = GV_Marker(info,null);
		if (m) {
			wpts.push(m);
			if (m.gvi.dynamic) {
				gvg.dynamic_marker_collection[gvg.dynamic_file_index].push(m.gvi.index);
			} else {
				if (m.gvi.type != 'geolocation') {
					gvg.static_marker_count += 1;
				}
				GV_Process_Marker(wpts[wpts.length-1]);
			}
		}
	}
	if (m && m.gvi) { return (m.gvi.index); }
}
function GV_Marker(arg1,arg2) {
	// BC:
	var mi = {};
	if (arg1 && (arg1.lat != undefined || arg1.coords != undefined || arg1.address != undefined)) {
		mi = arg1;
	} else if (arg2 && (arg2.lat != undefined || arg2.coords != undefined || arg2.address != undefined)) {
		mi = arg2;
	} else {
		return null;
	}
	if (mi.coords && mi.coords.length == 2) { mi.lat = mi.coords[0]; mi.lon = mi.coords[1]; }
	else if (mi.coords && mi.coords.lat) { mi.lat = mi.coords.lat; mi.lon = mi.coords.lng; }
	if (mi.lng && !mi.lon) { mi.lon = mi.lng; }
	if (typeof(mi.lat) == 'undefined') { return false; }
	
	if (gv_options.synthesize_fields) {
		for (var f in gv_options.synthesize_fields) {
			if (gv_options.synthesize_fields[f] === true || gv_options.synthesize_fields[f] === false) {
				mi[f] = gv_options.synthesize_fields[f];
			} else if (gv_options.synthesize_fields[f]) {
				var template = gv_options.synthesize_fields[f];
				var m_to_ft = false;
				template = template.toString().replace(gvg.synthesize_fields_pattern,
					function (complete_match,br1,field_name,br2) {
						if (field_name.match(/^lat/i)) { field_name = 'lat'; } // (put these into a "normalize field name" function?)
						else if (field_name.match(/^(lon|lng)/i)) { field_name = 'lon'; }
						else if (field_name.match(/^(sym|symbol|icon)\b/i)) { field_name = 'icon'; }
						else if (field_name.match(/^(alt|elev)/i)) {
							if (field_name.match(/\b(feet|ft)\b/i)) { m_to_ft = true; }
							field_name = 'alt';
						}
						if (mi[field_name] || mi[field_name] == '0' || mi[field_name] === false) {
							var value = (m_to_ft) ? (3.28084*parseFloat(mi[field_name])).toFixed(1) : mi[field_name];
							return (br1+value+br2);
						} else {
							return ('');
						}
					}
				);
				mi[f] = (template.toString().match(/^\s*$/)) ? '' : template;
			}
		}
	}
	
	var tempIcon = Clone2DArray(gvg.default_icon);
	var default_scale = (gv_options.default_marker.scale > 0) ? gv_options.default_marker.scale : 1;
	var custom_scale = (mi.scale > 0 && (gv_options.default_marker.scale != mi.scale)) ? true : false;
	var scale = (mi.scale > 0) ? mi.scale : (gv_options.default_marker.scale) ? gv_options.default_marker.scale : 1;
	var opacity = (mi.opacity > 0) ? parseFloat(mi.opacity) : (gv_options.default_marker.opacity) ? gv_options.default_marker.opacity : 1;
	if (opacity > 1) { opacity = opacity/100; }
	var optimized = (mi.optimized === false || gv_options.optimize_markers === false) ? false : true;
	if (!mi.icon) { mi.icon = (mi.icon_url) ? mi.icon_url : gv_options.default_marker.icon; }
	if ((mi.icon && mi.icon.toString().match(/([\.\/]|^\s*(none|^no.?icon)\s*$)/i)) || (gvg.garmin_icons && gvg.garmin_icons[mi.icon])) {
		var x_offset = 0; var y_offset = 0; if (mi.icon_offset && mi.icon_offset[0] != null && mi.icon_offset[1] != null) { x_offset = mi.icon_offset[0]; y_offset = mi.icon_offset[1]; }
		if (mi.icon.toString().match(/^\s*(none|^no.?icon)\s*$/i)) {
			tempIcon.icon.url = gvg.embedded_images['pixel'];
			tempIcon.icon.size = [1,1];
			tempIcon.icon.scaledSize = tempIcon.icon.size;
			tempIcon.icon.anchor = [0,0];
			mi.no_icon = true;
		} else if (gvg.garmin_icons && gvg.garmin_icons[mi.icon] && gvg.garmin_icons[mi.icon].url) {
			tempIcon.icon.url = gvg.garmin_icons[mi.icon].url;
			tempIcon.icon.size = [16*scale,16*scale];
			tempIcon.icon.scaledSize = tempIcon.icon.size;
			var anchor_x = 8; var anchor_y = 8;
			if (gvg.garmin_icons[mi.icon].anchor && gvg.garmin_icons[mi.icon].anchor.length == 2) {
				anchor_x = gvg.garmin_icons[mi.icon].anchor[0]; anchor_y = gvg.garmin_icons[mi.icon].anchor[1];
			}
			if (gv_options.garmin_icon_set == '24x24') {
				tempIcon.icon.size = [24*scale,24*scale];
				tempIcon.icon.scaledSize = tempIcon.icon.size;
				anchor_x *= 1.5; anchor_y *= 1.5;
			} else if (gv_options.garmin_icon_set == '48x48') {
				tempIcon.icon.size = [24*scale,24*scale];
				tempIcon.icon.scaledSize = tempIcon.icon.size;
				anchor_x *= 1.5; anchor_y *= 1.5;
			}
			tempIcon.icon.anchor = [anchor_x*scale-x_offset,anchor_y*scale-y_offset];
			tempIcon.icon.gv_offset = [x_offset,y_offset];
		} else { // custom icon URL
			if (gv_options.default_marker.icon.indexOf('/') < 0) { // the default icon (now in tempIcon) is a GV built-in; wipe it out
				tempIcon = { icon:{url:'',size:{},scaledSize:{},anchor:{}}, shadow:{}, shape:{}, info_window:{} };
			}
			mi.icon = mi.icon.replace(/^c:\//,'file:///c:/'); // fix local Windows file names
			tempIcon.icon.url = mi.icon.replace(/http:\/\/\w+\.gpsvisualizer.com\//,'https://www.gpsvisualizer.com/');
			var rsc = scale/default_scale; // relative scale (relative to default) (no longer used?)
			var ap_x = 0.5; var ap_y = 0.5; // anchor_proportions
			var w = (tempIcon.icon.size[0]) ? tempIcon.icon.size[0] : 32; var h = (tempIcon.icon.size[1]) ? tempIcon.icon.size[1] : 32;
				if (tempIcon.icon.url.match(/chart\.apis\.google\.com\/.*\bch\w+=[\w_]*pin\b/)) { w = 21; h = 34; } // is there a more efficient way to do this??
				else if (tempIcon.icon.url.match(/googleapis\.com\/.*wht-circle-blank-4x\.png/)) { w = 20; h = 20; }
				else if (tempIcon.icon.url.match(/googleapis\.com\/chart\b.*\bchst=d_map_spin/i) && tempIcon.icon.url.match(/chld=[\d\.]/)) {
					var icon_scale = tempIcon.icon.url.replace(/^.*chld=([\d\.]+).*$/i,'$1');
					w = Math.ceil(37*icon_scale); h = Math.ceil(66.1*icon_scale);
					ap_x = 0.48; ap_y = 0.97; // proportions, not pixels
				}
				else if (tempIcon.icon.url.match(/gpsvisualizer\.com\/leaflet\/icons\/tickmark\//i)) { w = 13; h = 13; }
				tempIcon.icon.size = (mi.icon_size && mi.icon_size[0] && mi.icon_size[1]) ? [mi.icon_size[0]*scale,mi.icon_size[1]*scale] : [w*scale,h*scale];
				tempIcon.icon.scaledSize = tempIcon.icon.size;
			var ax = tempIcon.icon.size[0]*ap_x; var ay = tempIcon.icon.size[1]*ap_y; // anchor x & y
				if (tempIcon.icon.url.match(/chart\.apis\.google\.com\/.*\bch\w+=[\w_]*pin\b/)) { ax = 10; ay = 33; } // is there a more efficient way to do this??
				ax = (gvg.marker_icon_anchor && gvg.marker_icon_anchor[0] != null) ? gvg.marker_icon_anchor[0] : ax;
				ay = (gvg.marker_icon_anchor && gvg.marker_icon_anchor[1] != null) ? gvg.marker_icon_anchor[1] : ay;
				tempIcon.icon.anchor = (mi.icon_anchor && mi.icon_anchor[0] != null && mi.icon_anchor[1] != null) ? [mi.icon_anchor[0]*scale-x_offset,mi.icon_anchor[1]*scale-y_offset] : [ax-x_offset,ay-y_offset];
			tempIcon.icon.gv_offset = [x_offset,y_offset];
			
			if (mi.rotation && tempIcon.icon.url.indexOf('data:') == 0) { // only data:-embedded images can be used in SVGs placed via <img> tags
				tempIcon.icon.url = GV_Rotated_Icon(tempIcon.icon.url,tempIcon.icon.size[0],tempIcon.icon.size[1],mi.rotation);
			}
		}
		mi.noshadow = true;
	} else if ((mi.icon != gv_options.default_marker.icon) || mi.color || mi.letter || mi.icon_anchor || mi.icon_offset || custom_scale || typeof(mi.rotation) != 'undefined') {
		// it's a custom icon, but still a GPSV standard icon
		var i = (mi.icon && gvg.icons[mi.icon.toLowerCase()]) ? mi.icon.toLowerCase() : gv_options.default_marker.icon;
		var color = (mi.color) ? mi.color.toLowerCase() : gv_options.default_marker.color.toLowerCase();
		var x_offset = 0; var y_offset = 0; if (mi.icon_offset && mi.icon_offset[0] != null && mi.icon_offset[1] != null) { x_offset = mi.icon_offset[0]; y_offset = mi.icon_offset[1]; }
		tempIcon.icon.anchor = (mi.icon_anchor && mi.icon_anchor[0] != null && mi.icon_anchor[1] != null) ? [mi.icon_anchor[0]*scale-x_offset,mi.icon_anchor[1]*scale-y_offset] : (gvg.icons[i].ia ? [gvg.icons[i].ia[0]*scale-x_offset,gvg.icons[i].ia[1]*scale-y_offset] : [gvg.icons[i].is[0]*scale/2-x_offset,gvg.icons[i].is[1]*scale/2-y_offset]);
		if (i != gv_options.default_marker.icon || custom_scale) { // these only need to be messed with if they're not using the default icon or if a scale has been specified; otherwise, they were set as part of "gvg.default_icon"
			tempIcon.icon.size = [gvg.icons[i].is[0]*scale,gvg.icons[i].is[1]*scale];
			tempIcon.icon.scaledSize = tempIcon.icon.size;
		}
		if (i.indexOf('/') < 0) { // is this ever NOT true?
			if (gv_options.vector_markers && gvg.icons[i].vector) {
				tempIcon.icon.url = GV_Vector_Icon(i,color,mi.rotation);
			} else {
				var base_url = (gvg.icons[i].directory) ? gvg.icons[i].directory : gvg.icon_directory+'icons/'+i;
				// rotation will be handled via the URL of the image:
				var rotation_text = (mi.rotation !== null && typeof(mi.rotation) != 'undefined' && gvg.icons[mi.icon] && gvg.icons[mi.icon].rotatable) ? '-r'+( 1000+( 5*Math.round(((parseFloat(mi.rotation)+360) % 360)/5)) ).toString().substring(1,4) : '';
				// BUILD THE IMAGE URL:
				tempIcon.icon.url = base_url+'/'+color.replace(/^\#/,'').toLowerCase()+rotation_text+'.'+gvg.icon_suffix;
			}
		}
		tempIcon.icon.gv_offset = [x_offset,y_offset];
		mi.icon = i;
	}
	if (opacity != 1) { mi.noshadow = true; } // we could make the shadow semi-opaque, but the semi-opaque marker above it wouldn't be able to knock it out
	
	if (mi.type == 'tickmark' && !mi.z_index) {
		mi.z_index = -1;
	}
	//if (gvg.icons[mi.icon] && !gvg.icons[mi.icon].rotatable && mi.rotation && !gv_options.vector_markers) { // this probably won't do anything
	//	var r = ( 1000+( Math.round((parseFloat(mi.rotation)+360) % 360)) ).toString().substring(1,4);
	//	tempIcon.icon.url += (tempIcon.icon.url.match(/\?/)) ? "&rotation="+r : "?rotation="+r;
	//	optimized = false;
	//}
	var tt_offset = [3+tempIcon.icon.size[0]-tempIcon.icon.anchor[0],-tempIcon.icon.anchor[1]+8];
	
	// Format icon for Leaflet:
	var L_icon = L.icon({
		iconUrl:tempIcon.icon.url
		,iconSize:tempIcon.icon.size
		,iconAnchor:tempIcon.icon.anchor
		,tooltipAnchor:tt_offset
		//,popupAnchor:[0,0]
	});
	
	if (gvg.icons[mi.icon] && gvg.icons[mi.icon].ss && gv_options.marker_shadows !== false && !mi.noshadow && !mi.no_shadow && mi.type != 'trackpoint' && (!isNumeric(mi.rotation) || gvg.icons[mi.icon].circular)) {
		L_icon.options.shadowUrl = (gv_options.vector_markers && gvg.icons[mi.icon].vector_shadow) ? gvg.icons[mi.icon].vector_shadow : gvg.icon_directory+'icons/'+mi.icon+'/shadow.png';
		L_icon.options.shadowSize = [ gvg.icons[mi.icon].ss[0]*scale, gvg.icons[mi.icon].ss[1]*scale ];
		var x_offset = 0; var y_offset = 0; if (mi.icon_offset && mi.icon_offset[0] != null && mi.icon_offset[1] != null) { x_offset = mi.icon_offset[0]; y_offset = mi.icon_offset[1]; }
		L_icon.options.shadowAnchor = [ gvg.icons[mi.icon].ia[0]*scale-x_offset, gvg.icons[mi.icon].ia[1]*scale-y_offset ];
	}
	
	var marker = new L.Marker(L.latLng(mi.lat,mi.lon), {
		'icon':L_icon
		,'opacity':opacity
		,'draggable':gv_options.editable_markers
		// ,'optimized':optimized
	});
	var icon_height = L_icon.options.iconSize[1];
	
	marker.gv_hidden = function() { return (this.gv_oor || this.gv_hidden_by_click || this.gv_hidden_by_filter || this.gv_hidden_by_folder) ? true : false; };
	marker.gv_hidden_manually = function() { return (this.gv_hidden_by_click || this.gv_hidden_by_filter || this.gv_hidden_by_folder) ? true : false; };
	if (mi.z_index) {
		var z = parseFloat(mi.z_index);
		marker.setZIndexOffset(z);
		marker.setForceZIndex(z);
	}

	gvg.marker_count += 1;
	
	var target = (mi.link_target) ? mi.link_target : (gv_options.marker_link_target) ? gv_options.marker_link_target : '_blank';
	var target_attribute = 'target="'+target+'"';
	if (gv_options.no_marker_windows || mi.no_window) {
		if (mi.url) {
			marker.on("click", function(){ window.open(mi.url,target); });
		}
	} else {
		var iw_html = '';
		var url_quoted = (mi.url) ? mi.url.replace(/"/g,"&quot;") : '';
		if (mi.name) {
			if (mi.url && mi.url != null) { iw_html = iw_html + '<div class="gv_marker_info_window_name"><b><a '+target_attribute+' href="'+url_quoted+'">'+mi.name+'</a></b></div>'; }
			else { iw_html = iw_html + '<div class="gv_marker_info_window_name">'+mi.name+'</div>'; }
		}
		if (mi.thumbnail && !mi.photo && !mi.no_thumbnail_in_info_window) {
			mi.thumbnail = mi.thumbnail.replace(/\w+\.dropbox\.com\/s\//,'dl.dropboxusercontent.com\/s\/');
			var tn_style = (mi.thumbnail_width) ? ' style="width:'+parseFloat(mi.thumbnail_width)+'px;"' : (gv_options.thumbnail_width > 0) ? ' style="width:'+gv_options.thumbnail_width+'px;"' : '';
			var thumbnail = '<img class="gv_marker_thumbnail" src="'+mi.thumbnail+'"'+tn_style+' />';
			if (mi.url) { thumbnail = '<a '+target_attribute+' href="'+url_quoted+'">'+thumbnail+'</a>'; }
			iw_html = iw_html + thumbnail;
		} else if (mi.photo) {
			var photo_style = '';
			mi.photo = mi.photo.replace(/\w+\.dropbox\.com\/s\//,'dl.dropboxusercontent.com\/s\/');
			if (mi.photo_size) {
				if (mi.photo_size.length == 2) {
					photo_style = ' style="width:'+parseFloat(mi.photo_size[0])+'px; height:'+parseFloat(mi.photo_size[1])+'px;"';
				} else if (mi.photo_size.toString().match(/([0-9]+)[^0-9]+([0-9]+)/)) { 
					var parts = mi.photo_size.toString().match(/([0-9]+)[^0-9]+([0-9]+)/);
					photo_style = ' style="width:'+parseFloat(parts[1])+'px; height:'+parseFloat(parts[2])+'px;"';
				} else if (parseFloat(mi.photo_size) > 0) {
					photo_style = ' style="width:'+parseFloat(mi.photo_size)+'px;"';
				}
			} else if (gv_options.photo_size) { // if this isn't null, it's ALWAYS a 2-element array
				photo_style = ' style="width:'+parseFloat(gv_options.photo_size[0])+'px; height:'+parseFloat(gv_options.photo_size[1])+'px;"';
			}
			if (photo_style == '') {
				photo_style = (mi.photo_width) ? ' style="width:'+parseFloat(mi.photo_width)+'px;"' : (gv_options.photo_width > 0) ? ' style="width:'+gv_options.photo_width+'px;"' : '';
			}
			iw_html = iw_html + '<div><img class="gv_marker_photo" src="'+mi.photo+'"'+photo_style+' /></div>';
		}
		if (mi.desc && mi.desc != '-') {
			iw_html = iw_html + '<div class="gv_marker_info_window_desc">' + mi.desc + '</div>';
		}
		if ((mi.dd || (gv_options.driving_directions && mi.dd!==false)) && (mi.name || mi.desc)) {
			// var dd_name = (mi.name) ? ' ('+mi.name.replace(/<[^>]*>/g,'').replace(/\(/g,'[').replace(/\)/g,']').replace(/"/g,"&quot;")+')' : '';
			var dd_name = '';
			var saddr = (gv_options.driving_directions_start) ? gv_options.driving_directions_start.replace(/"/g,"&quot;") : '';
			iw_html = iw_html + '<form action="https://www.google.com/maps" target="_blank" style="margin:0px;"><input type="hidden" name="daddr" value="'+(mi.dd_lat?mi.dd_lat:mi.lat)+','+(mi.dd_lon?mi.dd_lon:mi.lon)+dd_name+'" />';
			iw_html = iw_html + '<table class="gv_driving_directions" style="width:100%; max-width:300px;" cellspacing="0" cellpadding="0" border="0">';
			iw_html = iw_html + '<tr><td colspan="2" class="gv_driving_directions_heading" style="margin:2px 0px 4px 0px; white-space:nowrap;">Driving directions to this point</td></tr>';
			iw_html = iw_html + '<tr><td colspan="2" style="padding:3px 0px 3px 0px;">Enter your starting address:</td></tr>';
			iw_html = iw_html + '<tr valign="middle"> <td width="90%" style="padding-right:3px;"><input type="text" name="saddr" value="'+saddr+'" style="width:100%; box-sizing:border-box;" /></td><td><input type="submit" value="Go" style="padding:0px 2px;" /></td></tr>';
			iw_html = iw_html + '</table>';
			iw_html = iw_html + '</form>';
		}
		var ww = 0; // window width
		var mww = parseFloat(mi.window_width);
		if (mww > 0) { ww = (mww < gv_options.info_window_width_maximum) ? mww : gv_options.info_window_width_maximum; }
		else if (gv_options.info_window_width > 0) { ww = gv_options.info_window_width; }
		var width_style = (ww > 0) ? 'max-width:'+ww+'px;' : '';
		var info_window_html = '<div style="text-align:left; max-height:'+gv_options.info_window_height_maximum+'px; '+width_style+'" class="gv_marker_info_window">'+iw_html+'</div>';
		mi.window_width = ww;
		
		if (iw_html) {
			var pa_x = 0; var pa_y = -marker.options.icon.options.iconAnchor[1]-1;
			if (mi.icon_offset) { pa_x += mi.icon_offset[0]; pa_y += 0*mi.icon_offset[1]; }
			marker.options.icon.options.popupAnchor = [pa_x,pa_y];
			if (gv_options.multiple_info_windows) {
				marker.on('click',function() { GV_Open_Marker_Window(this); });
			} else {
				marker.bindPopup(info_window_html,{autoPan:gvg.autopan,maxWidth:gv_options.info_window_width_maximum});
			}
		}
	}
	
//	if (gvg.icons[mi.icon] && gvg.icons[mi.icon].ss && gv_options.marker_shadows !== false && !mi.noshadow && !mi.no_shadow && mi.type != 'trackpoint' && (!isNumeric(mi.rotation) || gvg.icons[mi.icon].circular)) {
//		mi.default_scale = gv_options.default_marker.scale; // the shadow function needs to know if a global scale was set
//		marker.shadow_overlay = new GV_Shadow_Overlay(mi);
//	}
	if (mi.label || mi.label_id) { // draw a permanent label
		var label_text = (mi.label) ? mi.label : mi.name;
		if (label_text != '') {
			var label_id = (mi.label_id) ? mi.label_id : 'wpts_label['+(gvg.marker_count-1)+']';
			var label_class = (mi.label_class) ? 'gv_label '+mi.label_class : 'gv_label';
			var label_style = (mi.label_color) ? 'background-color:#ffffff; border-color:'+mi.label_color+'; color:'+(mi.label_text_color?mi.label_text_color:mi.label_color)+';' : '';
			var label_hidden = (gv_options.hide_labels) ? true : false;
			var offset_x = gv_options.label_offset[0]; var offset_y = gv_options.label_offset[1];
			var label_centered = gv_options.label_centered; var label_left = gv_options.label_left;
			var label_centered_vertical = (gv_options.label_centered_vertical) ? true : false;
			if (mi.no_icon) {
				label_centered = true;
				label_centered_vertical = true;
			}
			if (mi.label_offset && mi.label_offset.length > 1) { offset_x = mi.label_offset[0]; offset_y = mi.label_offset[1]; }
			if (mi.label_center || mi.label_center === false) { mi.label_centered = mi.label_center; }
			if ((mi.label_centered == true && !label_centered) || (mi.label_centered === false && label_centered)) { label_centered = mi.label_centered; }
			if ((mi.label_left == true && !label_left) || (mi.label_left === false && label_left)) { label_left = mi.label_left; label_centered = false; }
			var internal_name = 'wpts['+(gvg.marker_count-1)+']';
			var label = GV_Create_Label(marker,{'coords':L.latLng(mi.lat,mi.lon),'html':label_text,'class_name':label_class,'icon':tempIcon.icon,'label_offset':[offset_x,offset_y],'opacity':100,'overlap':true,'style':label_style,'internal_name':internal_name,'left':label_left,'centered':label_centered,'centered_vertical':label_centered_vertical});
			marker.label_object = label;
			label.parent_marker = marker;
			marker.label_object.addTo(gvg.labels);
		}
	}
	marker.gv_tooltip = '';
	if (gv_options.marker_tooltips !== false && (mi.name || mi.thumbnail || (mi.desc && gv_options.marker_tooltips_desc))) {
		var tooltip_html = (gv_options.marker_tooltips_desc) ? '<b>'+mi.name+'</b> ' : mi.name+' ';
		if (mi.thumbnail) {
			var tn_style = (mi.thumbnail_width) ? ' style="width:'+parseFloat(mi.thumbnail_width)+'px;"' : (gv_options.thumbnail_width > 0) ? ' style="width:'+gv_options.thumbnail_width+'px;"' : '';
			tooltip_html += '<img class="gv_marker_thumbnail" src="'+mi.thumbnail+'"'+tn_style+' />';
		}
		if (mi.photo) { tooltip_html += '<img class="gv_marker_photo" src="'+mi.photo+'" />'; } // photo is hidden in tooltip but gets pre-loaded!
		if (gv_options.marker_tooltips_desc && mi.desc) {
			tooltip_html += '<div class="gv_tooltip_desc">'+mi.desc+'</div>';
		}
		marker.gv_tooltip = '<div class="gv_marker_tooltip">'+tooltip_html+'</div>';
		var tooltip_offset = [0,-1];
		if (icon_height > 20) { tooltip_offset[1] = 0.2*icon_height; }
		if (gv_options.marker_tooltip_pointers) {
			var imgsrc = gvg.embedded_images[gv_options.marker_tooltip_pointers] ? gvg.embedded_images[gv_options.marker_tooltip_pointers] : gvg.embedded_images['tooltip_pointer'];
			marker.gv_tooltip += '<img src="'+imgsrc+'" class="gv_tooltip_pointer" />'
			tooltip_offset[0] = 2;
		}
		marker.bindTooltip(marker.gv_tooltip,{'direction':gv_options.marker_tooltip_position, offset:tooltip_offset, 'className':'gv_tooltip', opacity:1, 'permanent':false, pane:'popupPane'});
	}
	if (mi.folder) {
		if ((gvg.marker_list_folder_state && gvg.marker_list_folder_state[mi.folder] && gvg.marker_list_folder_state[mi.folder].hidden) || (gv_options.marker_list_options && gv_options.marker_list_options.folders_hidden)) {
			marker.gv_hidden_by_folder = true;
		}
	}
	
	// This info can be used by other functions, like the "marker list":
	marker.gvi = {}; // gvi = GPS Visualizer info
	marker.gvi.index = gvg.marker_count-1;
	marker.gvi.name = (mi.name) ? mi.name : '';
	marker.gvi.desc = (mi.desc) ? mi.desc : '';
	marker.gvi.label = (mi.label) ? mi.label : '';
	marker.gvi.tooltip = marker.gv_tooltip;
	marker.gvi.url = (mi.url) ? mi.url : '';
	marker.gvi.shortdesc = (mi.shortdesc) ? mi.shortdesc : '';
	marker.gvi.info_window_contents = info_window_html;
	marker.gvi.window_width = (mi.window_width) ? mi.window_width : '';
	marker.gvi.color = (mi.color) ? mi.color.toLowerCase() : gv_options.default_marker.color.toLowerCase();
	marker.gvi.opacity = (opacity) ? opacity : 1;
	marker.gvi.icon = (mi.icon) ? mi.icon : gv_options.default_marker.icon;
	marker.gvi.width = tempIcon.icon.size[0];
	marker.gvi.height = tempIcon.icon.size[1];
	marker.gvi.scale = (mi.scale) ? mi.scale : 1;
	marker.gvi.image = tempIcon.icon.url;
	marker.gvi.coords = L.latLng(mi.lat,mi.lon);
	marker.gvi.thumbnail = (mi.thumbnail) ? mi.thumbnail : '';
	marker.gvi.thumbnail_width = (mi.thumbnail_width) ? mi.thumbnail_width : '';
	marker.gvi.type = (mi.type) ? mi.type : '';
	marker.gvi.zoom_level = (mi.zoom_level) ? mi.zoom_level : '';
	marker.gvi.folder = (mi.folder) ? mi.folder : '';
	marker.gvi.dynamic = (mi.dynamic) ? mi.dynamic : false;
	marker.gvi.nolist = mi.nolist;
	marker.gvi.noexport = mi.noexport;
	marker.gvi.noprofile = mi.noprofile;
	marker.gvi.nocluster = (mi.type=='trackpoint'||mi.type=='tickmark') ? true : false;
	marker.gvi.noshadow = (mi.no_shadow || mi.noshadow) ? true : false;
	if (mi.circle_radius) { marker.gvi.circle_radius = mi.circle_radius; }
	if (typeof(mi.alt != 'undefined')) { marker.gvi.alt = mi.alt; }
	else if (typeof(mi.ele != 'undefined')) { marker.gvi.alt = mi.ele; }
	
	
	if (gvg.marker_list_exists && (mi.type != 'tickmark' || gv_options.marker_list_options.include_tickmarks) && (mi.type != 'trackpoint' || gv_options.marker_list_options.include_trackpoints) && !mi.nolist) {
		marker.gvi.list_html = GV_Marker_List_Item(marker,'wpts['+marker.gvi.index+']');
		if (gv_options.marker_list_options.limit && gv_options.marker_list_options.limit > 0 && gvg.marker_list_count >= gv_options.marker_list_options.limit) {
			// do nothing; we're over the limit
		} else {
			if (typeof(marker.gvi.list_html) != 'undefined') {
				GV_Update_Marker_List_With_Marker(marker);
			}
		}
	}
	if (mi.circle_radius) {
		marker = GV_Draw_Circles_Around_Marker(marker);
	}
	if (mi.track_number && trk[mi.track_number]) {
		if (!trk[mi.track_number].overlays) { trk[mi.track_number].overlays = []; }
		trk[mi.track_number].overlays.push(marker);
		if (trk[mi.track_number].info && trk[mi.track_number].info.bounds && trk[mi.track_number].info.bounds.extend) { trk[mi.track_number].info.bounds.extend(marker.getLatLng()); }
		if (trk[mi.track_number].info && trk[mi.track_number].info.hidden) {
			marker.gv_hidden_by_click = true;
		}
	}
	return marker;
}

function GV_Vector_Icon(icon,color,rotation) { // colorizes an SVG and then base64-encodes it
	if (gvg.icons[icon].vector) {
		color = color.toLowerCase(); if (!gvg.named_html_colors[color] && !color.match(/^#/)) { color = '#'+color; }
		var white_icon = (gvg.icons[icon+'-r'] && isNumeric(rotation)) ? gvg.icons[icon+'-r'].vector.replace(/rotate\(0/,'rotate('+rotation) : gvg.icons[icon].vector;
		var colored_icon = white_icon.replace(/="white"/g,'="'+color+'"').replace(/stop-color:white\b/g,'stop-color:'+color);
		return 'data:image/svg+xml;base64,'+GV_Base64(colored_icon);
	} else {
		return '';
	}
}
function GV_Rotated_Icon(url,width,height,rotation) { // puts a remote URL into an SVG and then base64-encodes it
	var wd = parseFloat(width); var ht = parseFloat(height); var r = parseFloat(rotation);
	if (!wd || !ht || !rotation) { return url; }
	var svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="'+wd+'px" height="'+ht+'px" viewBox="0 0 '+width+' '+height+'">';
	svg += '<image width="'+wd+'" height="'+ht+'" x="0" y="0" href="'+url+'" transform="rotate('+r+' '+(wd/2)+' '+(ht/2)+')" />';
	svg += '</svg>'
	return 'data:image/svg+xml;base64,'+GV_Base64(svg);
}

function GV_Draw_Circles_Around_Marker(m) {
	if (!m.gvi.circle_radius) { return m; }
	if (!m.circles) { m.circles = []; }
	var cr_array = m.gvi.circle_radius.toString().split(',');
	for (var i=cr_array.length-1; i>=0; i--) {
		var cr = cr_array[i].replace(/["']/g,'');
		var radius_pattern = new RegExp('^.*?([\\d\\.]+)\\s*(\\w.*)?','i');
		var radius_match = radius_pattern.exec(cr.toString());
		if (radius_match) {
			var r = parseFloat(radius_match[1]); var u = radius_match[2];
			if (u) {
				if (u.match(/\b(naut|nm|n\.m)/i)) { r = r*1852; } else if (u.match(/\bmi/i)) { r = r*1609.34; } else if (u.match(/\b(feet|foot|ft)/i)) { r = r*0.3048; } else if (u.match(/\b(km|kil)/i)) { r = r*1000; }
			}
			var circle = new L.Circle(m.gvi.coords,{
				color:m.gvi.color, opacity:m.gvi.opacity, weight:2,
				fillColor:m.gvi.color, fillOpacity:0.0,
				center:m.gvi.coords, radius:r,
				clickable:true, zIndex:1000+(m.gvi.index*10)-i
			});
			circle.title = cr+' around '+m.gvi.name;
			circle.info_window_contents = '<div style="text-align:left;" class="gv_marker_info_window">'+circle.title+'</div>';
			circle.on('click', function(click) { GV_Open_Circle_Window(click,this); });
			m.circles.push(circle);
		}
	}
	return m;
}
function GV_Open_Circle_Window(click,circle) {
	/* LEAFLET_HOW??
	if (!click || !circle || !circle.info_window_contents) { return; }
	if (gv_options.multiple_info_windows) {
		if (!circle.info_window) {
			circle.info_window = new google.maps.InfoWindow({ content:circle.info_window_contents,maxWidth:gv_options.info_window_width_maximum });
		}
		circle.info_window.setPosition(click.latlng);
		circle.info_window.open(gmap);
	} else {
		gvg.info_window.setOptions({maxWidth:gv_options.info_window_width_maximum,content:circle.info_window_contents,position:click.latlng});
		gvg.info_window.open(gmap);
		gvg.open_info_window_index = null;
	}
	*/
}

function GV_Open_Marker_Window(marker) {
	if (!marker) { return false; }
	if (typeof(marker) == 'string') {
		var w = GV_Find_Marker({'pattern':marker,field:'name','partial_match':false});
		if (w) { marker = w; } else { return false; }
	} else if (!marker.gvi) {
		return false;
	}
	if (marker.gvi.info_window_contents) {
		if (gv_options.multiple_info_windows) {
			if (!gvg.open_popups[marker.gvi.index]) {
				var pu = L.popup({autoClose:false,closeOnClick:false,maxWidth:gv_options.info_window_width_maximum},marker).setLatLng(marker.getLatLng()).setContent(marker.gvi.info_window_contents);
				pu.once('remove',function() { gvg.open_popups[marker.gvi.index] = false; });
				gvg.open_popups[marker.gvi.index] = true;
				gmap.addLayer(pu);
			}
		} else {
			if (!gmap.getBounds().contains(marker.getLatLng())) { gmap.panInside(marker.getLatLng(),{animate:false,padding:[100,80]}); } // this is needed because SOMETHING is aborting/screwing up animated panning
			if (gv_options.marker_clustering && gvg.marker_cluster) {
				window.setTimeout('wpts['+marker.gvi.index+'].openPopup()',500);
			} else {
				marker.openPopup();
			}
			gvg.open_info_window_index = marker.gvi.index;
		}
	}
}

function GV_Toggle_Marker(marker,link,link_color,dimmed_color) {
	marker.gv_hidden_by_click = (marker.gv_hidden_by_click) ? false : true;
	GV_Process_Marker(marker);
	if (link_color && link.style.color) {
		link_color = GV_Color_Hex2CSS(link_color);
		dimmed_color = (dimmed_color) ? GV_Color_Hex2CSS(dimmed_color) : GV_Color_Hex2CSS('#999999');
		if (marker.gv_hidden_by_click) { link.style.color = dimmed_color; }
		else { link.style.color = link_color; }
	}
}
function GV_Toggle_All_Labels(force_show) {
	if (!gvg.labels) { return false; }
	if (force_show || (gv_options.hide_labels && force_show !== false)) {
		gvg.labels_are_visible = true; gv_options.hide_labels = false;
		gvg.labels.addTo(gmap);
		gvg.labels.eachLayer( function(l){ if(l.parent_marker.gv_hidden()) { l.remove(); } });
	} else {
		gvg.labels_are_visible = false; gv_options.hide_labels = true;
		gvg.labels.remove();
	}
}
function GV_Preload_Info_Window(m) {
	if ($('gv_preload_infowindow') && m && m.gvi && m.gvi.desc && m.gvi.desc.match(/<img/i)) {
		$('gv_preload_infowindow').innerHTML = m.gvi.info_window_contents;
	}
}

function GV_Coordinate_Info_Window(coords,multiple) {
	/* LEAFLET_HOW??
	var html = '<div class="gv_click_window" style="max-width:200px;">'+coords.lat.toFixed(6)+','+coords.lng.toFixed(6)+'<'+'/div>';
	if (multiple !== false) {
		var ciw = new google.maps.InfoWindow({position:coords,content:html});
		ciw.open(gmap);
	} else {
		if (gvg.coordinate_info_window) { gvg.coordinate_info_window.close(); }
		else { gvg.coordinate_info_window = new google.maps.InfoWindow(); }
		gvg.coordinate_info_window.setPosition(coords);
		gvg.coordinate_info_window.setContent(html);
		gvg.coordinate_info_window.open(gmap);
	}
	*/
}


//  **************************************************
//  * marker lists
//  **************************************************

function GV_Marker_List() {
	if (gvg.marker_list_exists) {
		var mlo = gv_options.marker_list_options; if (!mlo.header) { mlo.header = ''; } if (!mlo.footer) { mlo.footer = ''; }
		var header = '<div id="gv_marker_list_header" class="gv_marker_list_header">'+mlo.header+'</div>';
		var footer = '<div id="gv_marker_list_footer" class="gv_marker_list_footer">'+mlo.footer+'</div>';
		var top_border = (mlo.dividers) ? '<div class="gv_marker_list_border_top"></div>' : '';
		var folders = '';
		if (!gvg.marker_list_folder_state) { gvg.marker_list_folder_state = {}; }
		if (!gvg.marker_list_folder_number) { gvg.marker_list_folder_number = {}; }
		if (!gvg.marker_list_folder_name) { gvg.marker_list_folder_name = {}; }
		if (gvg.marker_list_folders) {
			var fcount = 0;
			var minus_graphic = gvg.embedded_images['minus'];
			var plus_graphic = gvg.embedded_images['plus'];
			var folder_triangle_open = gvg.embedded_images['folder_triangle_open']+'';
			var folder_triangle_closed = gvg.embedded_images['folder_triangle_closed']+'';
			var open_graphic = folder_triangle_open; var closed_graphic = folder_triangle_closed;
			var folder_toggle = (mlo.folder_checkboxes === false || mlo.folder_toggle_visibility === false) ? false : true;
			var toggle_message = "show/hide this folder's markers";
			var collapse_message = "open/close this folder";
			var folder_name_message = (folder_toggle) ? toggle_message : collapse_message;
			// These next variables are defaults for when the folders are pre-collapsed when the map first loads
			for (var fname in gvg.marker_list_folders) { // gvg.marker_list_folders is an array of HTML marker lists
				fcount += 1;
				if (!gvg.marker_list_folder_state[fname]) { gvg.marker_list_folder_state[fname] = {}; }
				if (mlo.folders_collapsed && typeof(gvg.marker_list_folder_state[fname].collapsed) == 'undefined') { gvg.marker_list_folder_state[fname].collapsed = true; }
				if (mlo.folders_hidden && typeof(gvg.marker_list_folder_state[fname].hidden) == 'undefined') { gvg.marker_list_folder_state[fname].hidden = true; }
				var c = (gvg.marker_list_folder_state[fname] && gvg.marker_list_folder_state[fname].collapsed) ? true : false;
				var h = (gvg.marker_list_folder_state[fname] && gvg.marker_list_folder_state[fname].hidden) ? true : false;
				gvg.marker_list_folder_state[fname] = {collapsed:c,hidden:h}; // just to make sure they both have T/F values
				gvg.marker_list_folder_number[fname] = fcount;
				gvg.marker_list_folder_name[fcount] = fname;
				var initial_icon = (c) ? closed_graphic : open_graphic;
				var initial_contents_display = (c) ? 'none' : 'block';
				var initial_checkbox_checked = (h) ? '' : 'checked';
				var initial_opacity = (h) ? 40 : 100;
				var initial_opacity_style = 'filter:alpha(opacity='+initial_opacity+'); -moz-opacity:'+(initial_opacity/100)+'; -khtml-opacity:'+(initial_opacity/100)+'; opacity:'+(initial_opacity/100)+';';
				var collapse_onclick = "GV_Folder_Collapse_Toggle("+fcount+");";
				var toggle_onclick = "GV_Folder_Visibility_Toggle("+fcount+");";
				var folder_name_onclick = (folder_toggle) ? toggle_onclick : collapse_onclick;
				var n = (mlo.folder_titles && mlo.folder_titles[fname]) ? mlo.folder_titles[fname] : fname;
				var icon = ''; if (mlo.folder_icons) { icon = (mlo.folder_icons[fname]) ? mlo.folder_icons[fname] : (mlo.folder_icons[fcount] ? mlo.folder_icons[fcount] : (mlo.folder_icons[0] ? mlo.folder_icons[0] : '')); }
				var folder_name_displayed = (mlo.count_folder_items) ? icon+n+' <span class="gv_marker_list_folder_item_count">('+gvg.marker_list_folder_item_count[fname]+')</span>' : icon+n;
				if (typeof(mlo.folder_name_click) != 'undefined') {
					if (mlo.folder_name_click.match(/coll/i)) { folder_name_onclick = collapse_onclick; folder_name_message = toggle_message; }
					else if (mlo.folder_name_click.match(/toggle|vis|viz/i)) { folder_name_onclick = toggle_onclick; folder_name_message = toggle_message; }
					else if (mlo.folder_name_click === false || mlo.folder_name_click.match(/no/i)) { folder_name_onclick = ''; folder_name_message = ''; }
				}
				var folder_zoom = (mlo.folder_zoom) ? '<span title="zoom to folder&apos;s contents" onclick="GV_Autozoom({filter:{folder:\''+attribute_safe(fname)+'\'},adjustment:'+(mlo.folder_zoom_adjustment?parseFloat(mlo.folder_zoom_adjustment):0)+'});">'+'<img src="'+gvg.embedded_images['goto']+'" width="9" height="9" border="0" alt="" style="padding-left:3px; cursor:zoom-in;" />'+'</span>' : '';
				
				var this_folder = '<div class="gv_marker_list_folder" id="folder_'+fcount+'">';
				this_folder += '<div class="gv_marker_list_folder_header" id="folder_header_'+fcount+'"><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr valign="top">';
				this_folder += '<td align="left" nowrap><img src="'+initial_icon+'" width="11" height="11" id="gv_folder_collapse_'+fcount+'" style="cursor:pointer; margin:2px 2px 0px 2px;" title="'+collapse_message+'" onclick="'+collapse_onclick+'" /></td>';
				this_folder += (mlo.folder_checkboxes !== false) ? '<td align="left"><input type="checkbox" id="gv_folder_checkbox_'+fcount+'" class="gv_marker_list_folder_checkbox" '+initial_checkbox_checked+' title="'+toggle_message+'" onclick="'+toggle_onclick+'"></td>' : '';
				this_folder += '<td width="99%" align="left"><div class="gv_marker_list_folder_name" id="gv_folder_name_'+fcount+'" style="cursor:pointer; max-width:100%; '+initial_opacity_style+'"><span title="'+folder_name_message+'" onclick="'+folder_name_onclick+'">'+folder_name_displayed+'</span>'+folder_zoom+'</div></td>'; // this has to be a DIV with a width or max-width, otherwise IE won't adjust its opacity
				this_folder += '</tr></table></div>';
				this_folder += '<div class="gv_marker_list_folder_contents" id="gv_folder_contents_'+fcount+'" style="display:'+initial_contents_display+'; max-width:100%; '+initial_opacity_style+'">'+gvg.marker_list_folders[fname]+'</div>';
				this_folder += '</div>';
				folders = folders + this_folder;
			}
		}
		top_border = (!gvg.marker_list_html) ? '' : top_border;
		$(gvg.marker_list_div_id).innerHTML = (mlo.folders_first === false) ? header+top_border+gvg.marker_list_html+folders+footer : header+top_border+folders+gvg.marker_list_html+footer;
		
		// This is done AFTER the folders are created because collapsed/hidden folders may have been specified by number rather than name
		// (Also, we need to hide the markers in should-be-hidden folders)
		if (!gvg.folders_have_been_initialized) { // brand new map; use gv_options to set state of individual folders
			gvg.folders_have_been_initialized = true;
			
			if (mlo && mlo.folders_collapsed) {
				for (var fname in gvg.marker_list_folders) { GV_Folder_Collapse_Toggle(fname,true); }
			}
			if (mlo && mlo.folders_hidden) {
				for (var fname in gvg.marker_list_folders) { GV_Folder_Visibility_Toggle(fname,true); }
			}
			// These only work with folder names, not numbers, because we don't know yet what their numbers will be and besides, we may need to create them on the fly
			if (mlo && mlo.collapsed_folders && mlo.collapsed_folders.length) {
				for (var i=0; i<mlo.collapsed_folders.length; i++) {
					var fname = mlo.collapsed_folders[i];
					if (!gvg.marker_list_folder_state[fname]) { gvg.marker_list_folder_state[fname] = {}; }
					gvg.marker_list_folder_state[fname].collapsed = true; // set it even if the folder doesn't exist yet
					GV_Folder_Collapse_Toggle(fname,true);
				}
			}
			if (mlo && mlo.hidden_folders && mlo.hidden_folders.length) {
				for (var i=0; i<mlo.hidden_folders.length; i++) {
					var fname = mlo.hidden_folders[i];
					if (!gvg.marker_list_folder_state[fname]) { gvg.marker_list_folder_state[fname] = {}; }
					gvg.marker_list_folder_state[fname].hidden = true; // set it even if the folder doesn't exist yet
					GV_Folder_Visibility_Toggle(fname,true);
				}
			}
		}
		gvg.marker_list_count = 0;
		gv_options.marker_list_options = mlo;
	}
}
function GV_Reset_Marker_List() {
	if (!gvg) { return false; }
	gvg.marker_list_html = '';
	gvg.marker_list_count = 0;
	gvg.marker_list_folders = {};
	gvg.marker_list_folder_number = {};
	gvg.marker_list_folder_name = {};
	gvg.marker_list_folder_item_count = {};
	// gvg.folders_have_been_initialized = false; // don't set this; it should only happen the FIRST time the map is loaded
	// gvg.marker_list_folder_state = {}; // don't clear this; it should be remembered even if/while the folder is rebuilt
}
function GV_Remove_Marker_List() {
	GV_Reset_Marker_List();
	if ($('gv_marker_list_container')) { GV_Delete('gv_marker_list_container'); }
	if (gv_options.marker_list_options) { gv_options.marker_list_options.enabled = false; }
	gvg.marker_list_exists = false;
}

function GV_Update_Marker_List_With_Marker(m) {
	if (!m) { return false; }
	if (m.gvi.folder) {
		if (!m.gv_hidden() || (m.gv_hidden_by_folder && !m.gv_hidden_by_filter)) {
			if (!gvg.marker_list_folders[m.gvi.folder]) {
				gvg.marker_list_folders[m.gvi.folder] = m.gvi.list_html;
				gvg.marker_list_folder_item_count[m.gvi.folder] = 1;
			} else {
				gvg.marker_list_folders[m.gvi.folder] += m.gvi.list_html;
				gvg.marker_list_folder_item_count[m.gvi.folder] += 1;
			}
		}
	} else {
		if (!m.gv_hidden() && m.gvi.list_html) {
			gvg.marker_list_html += m.gvi.list_html;
		}
	}
	gvg.marker_list_count += 1;
}
function GV_Folder_Collapse_Toggle(index,force_collapse) {
	var fname = GV_Get_Folder_Name(index);
	if (!fname || !gvg.marker_list_folder_state) { return false; }
	var fn = GV_Get_Folder_Number(fname);
	var open_graphic = gvg.embedded_images['folder_triangle_open'];
	var closed_graphic = gvg.embedded_images['folder_triangle_closed'];
	if (!gvg.marker_list_folder_state[fname]) { gvg.marker_list_folder_state[fname] = {}; }
	if((gvg.marker_list_folder_state[fname].collapsed && force_collapse !== true) || force_collapse === false) {
		$('gv_folder_collapse_'+fn).src = open_graphic;
		$('gv_folder_contents_'+fn).style.display = 'block';
		gvg.marker_list_folder_state[fname].collapsed = false;
	} else {
		$('gv_folder_collapse_'+fn).src = closed_graphic;
		$('gv_folder_contents_'+fn).style.display = 'none';
		gvg.marker_list_folder_state[fname].collapsed = true;
	}
}
function GV_Collapse_Folder(index) {
	GV_Folder_Collapse_Toggle(index,true);
}
function GV_Expand_Folder(index) {
	GV_Folder_Collapse_Toggle(index,false);
}

function GV_Collapse_All_Folders() {
	if (gvg.marker_list_folders) {
		for (var fname in gvg.marker_list_folders) { GV_Folder_Collapse_Toggle(fname,true); }
	}
}
function GV_Expand_All_Folders() {
	if (gvg.marker_list_folders) {
		for (var fname in gvg.marker_list_folders) { GV_Folder_Collapse_Toggle(fname,false); }
	}
}
function GV_Hide_All_Folders() {
	if (gvg.marker_list_folders) {
		for (var fname in gvg.marker_list_folders) { GV_Folder_Visibility_Toggle(fname,true); }
	}
}
function GV_Show_All_Folders() {
	if (gvg.marker_list_folders) {
		for (var fname in gvg.marker_list_folders) { GV_Folder_Visibility_Toggle(fname,false); }
	}
}

function GV_Folder_Visibility_Toggle(index,force_hidden) {
	var fname = GV_Get_Folder_Name(index);
	if (!fname || !gvg.marker_list_folder_state) { return false; }
	var fn = GV_Get_Folder_Number(fname);
	if (!gvg.marker_list_folder_state[fname]) { gvg.marker_list_folder_state[fname] = {}; }
	if((gvg.marker_list_folder_state[fname].hidden && force_hidden !== true) || force_hidden === false) {
		if ($('gv_folder_checkbox_'+fn)) {
			$('gv_folder_checkbox_'+fn).checked = true;
			GV_Adjust_Opacity('gv_folder_contents_'+fn,100);
			GV_Adjust_Opacity('gv_folder_name_'+fn,100);
			for (var j=0; j<wpts.length; j++) {
				if (wpts[j] && wpts[j].gvi.folder && wpts[j].gvi.folder == fname) {
					wpts[j].gv_hidden_by_folder = false;
					GV_Process_Marker(wpts[j]);
				}
			}
		}
		gvg.marker_list_folder_state[fname].hidden = false;
	} else {
		if ($('gv_folder_checkbox_'+fn)) {
			$('gv_folder_checkbox_'+fn).checked = false;
			GV_Adjust_Opacity('gv_folder_contents_'+fn,40);
			GV_Adjust_Opacity('gv_folder_name_'+fn,40);
			for (var j=0; j<wpts.length; j++) {
				if (wpts[j] && wpts[j].gvi.folder && wpts[j].gvi.folder == fname) {
					wpts[j].gv_hidden_by_folder = true;
					GV_Process_Marker(wpts[j]);
				}
			}
		}
		gvg.marker_list_folder_state[fname].hidden = true;
	}
}
function GV_Hide_Folder(index) {
	GV_Folder_Visibility_Toggle(index,true);
}
function GV_Show_Folder(index) {
	GV_Folder_Visibility_Toggle(index,false);
}
function GV_Toggle_Folder(index,force_hidden) {
	GV_Folder_Visibility_Toggle(index,force_hidden);
}

function GV_Set_Folder_State(index,opts) {
	if (index == '' || !opts) { return false; }
	var fname = GV_Get_Folder_Name(index); if (!fname) { return false; }
	if (!gvg.marker_list_folder_state) { gvg.marker_list_folder_state = {}; }
	if (!gvg.marker_list_folder_state[fname]) { gvg.marker_list_folder_state[fname] = {}; }
	for (var property in opts) {
		gvg.marker_list_folder_state[fname][property] = opts[property];
	}
}
function GV_Get_Folder_Number(index) {
	var fnum = null;
	if (gvg.marker_list_folder_name && gvg.marker_list_folder_name[index]) { // a valid folder number was supplied
		fnum = index;
	} else if (gvg.marker_list_folder_number && gvg.marker_list_folder_number[index]) { // a valid folder name was supplied
		fnum = gvg.marker_list_folder_number[index];
	}
	return (fnum);
}
function GV_Get_Folder_Name(index) {
	var fname = null;
	if (gvg.marker_list_folder_number && gvg.marker_list_folder_number[index]) { // a valid folder name was supplied
		fname = index;
	} else if (gvg.marker_list_folder_name && gvg.marker_list_folder_name[index]) { // a valid folder number was supplied
		fname = gvg.marker_list_folder_name[index];
	}
	return (fname);
}

function GV_Marker_List_Item(m,marker_name) { // marker_name is something like "wpts[1]"
	if (!m.gvi) { return false; }
	var mlo = gv_options.marker_list_options;
	var default_color = (mlo.default_color) ? mlo.default_color : '';
	var color = (mlo.colors) ? m.gvi.color : default_color;
	var color_style = (color) ? 'color:'+color : '';
	
	var set_view = ''; var sv_c = ''; var sv_z = 'gmap.getZoom()';
	var sv_c = (mlo.center) ? marker_name+'.getLatLng()' : '';
	if (mlo.zoom && (mlo.zoom_level || m.gvi.zoom_level)) {
		var zoom_level = (m.gvi.zoom_level) ? parseFloat(m.gvi.zoom_level) : parseFloat(mlo.zoom_level);
		sv_z = zoom_level;
	} else if (mlo.zoom) {
		sv_z = 'gmap.getZoom()+1';
	}
	set_view = (sv_c) ? 'gmap.setView('+sv_c+','+sv_z+');' : 'gmap.setZoom('+sv_z+');';
	var hide_crosshair = (mlo.center && $('gv_crosshair')) ? "$('gv_crosshair').style.display = 'none'; gvg.crosshair_temporarily_hidden = true; " : '';
	var text_toggle = (mlo.toggle) ? 'GV_Toggle_Marker('+marker_name+',this,\''+color+'\');' : ''; // only affects marker list text, not the icon
	var text_open_info_window = (mlo.info_window !== false && !mlo.toggle) ? 'GV_Open_Marker_Window('+marker_name+'); ' : ''; // disable info windows upon text clicking if "toggle" is…