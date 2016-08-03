(function(window){
	window.GBL = {};
	GBL.debug = false; // debug mode on
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
}(window));