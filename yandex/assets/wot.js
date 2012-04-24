wot = {

	url_scorecard:          "//www.mywot.com/scorecard",
	pref_update_interval:   60,   // how often to get reputation data
	sites: [],
	pref_cache: {},
	reputation: {},
	update_timer: null,

	load_preferences: function() {

		// TODO: replace to real loading from prefs
		var s = JSON.stringify(['yandex.ru', 'google.fi', 'web-kassa.com', 'joker-6.ru']);

		try {
			var sl = JSON.parse(s);
			if(sl && sl.length > 0) {
				wot.sites = sl;
			}
		} catch(e) {}

	},

	save_preferences: function() {

	},

	add_site: function(hostname) {

	},

	update_reputation: function(forced) {
		if(wot.sites.length) {
			for(var i=0; i<wot.sites.length; i++) {
				var name = wot.sites[i];
				var current = wot.reputation[name];
				var last_updated = null;
				if(current) {
					last_updated = current.last_updated || null;
				}

				// TODO: complete this function...

			}
		}
	},

	ui_show_hide_prompt: function(show) {
		$(".wot-prompt").toggle(show);
	},

	ui_render_sites: function() {
		var W = wot;
		for(var i=0; i < W.sites.length; i++) {

			var site = {
				url_scorecard: W.url_scorecard,
				name: W.sites[i],
				r: 95,
				r_icon: 5,
				c: 5,
				change: '+4'
			};

			$.tmpl("siteLine", site).appendTo("#container");

		}
	},

	init: function() {

		var W = wot;

		W.load_preferences();

		$("#siteLine").template("siteLine");

		if(W.sites.length) {
			W.ui_show_hide_prompt(false);
			W.ui_render_sites();
		} else {
			W.ui_show_hide_prompt(true);
		}
	}
};

$(document).ready(wot.init);
