function Settings() {}
Settings.prototype.init = function() {
	$('#admin_settings_email h2').click(function(){
		admin.show(settingsEmail.address+'showemail',settingsEmail.init);
	});
	$('#admin_settings_general h2').click(function(){
		admin.show(settingsGeneral.address+'general',settingsGeneral.init);
	});
	$('#admin_settings_ssl h2').click(function(){
		admin.show(settingsGeneral.address+'ssl',settingsGeneral.sslInit);
	});
	$('#admin_settings_login h2').click(function(){
		admin.show(settingsSession.address+'login',settingsSession.loginInit);
	});
	$('#admin_settings_sessions h2').click(function(){
		admin.show(settingsSession.address+'sessions',settingsSession.init);
	});
	$('#admin_settings_database h2').click(function(){
		admin.show(settingsDatabase.address+'database',settingsDatabase.init);
	});
	$('#admin_settings_cache h2').click(function(){
		admin.show(settingsCache.address+'cache',settingsCache.init);
	});
	$('#admin_settings_languages h2').click(function(){
		admin.show(settingsLanguage.address+'language',settingsLanguage.init);
	});
}
var settings = new Settings();
$(document).ready(function() {
	settings.init();
});