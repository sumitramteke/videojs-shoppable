(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    
ga('create', 'UA-81218750-1', 'auto');
ga('send', 'pageview');

window.GBL = {};
GBL.debug = true; // debug mode on
GBL.client = 'Invodo'; // for now example client is invodo

GBL.vidActions = {
	play: 'play',
	pause: 'pause',
	ended: 'ended',
	seeked: 'seeked',
	fullscreenchange: 'fullscreenchange',
	volumechange: 'volumechange'
};

GBL.checkDebug = function(action, label = '') {
	if(!!GBL.debug) {
		console.log("action : " , action, " \t\t\t ", label)
	} else return
};

GBL.recordEvent = function(action, objectVal = '') {
	let label = objectVal + ' \t ' + GBL.client + ' ' + new Date().toISOString();
	GBL.checkDebug(GBL.vidActions[action] , label);	
	ga('send', 'event', 'Videos', GBL.vidActions[action], label);
};
