(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

(function(ga, GBL){
	ga('create', 'UA-81218750-1', 'auto');
	ga('send', 'pageview');

	GBL.recordEvent = function(action, objectVal = '') {
		let label = objectVal + ' \t ' + GBL.client + ' ' + new Date().toISOString();
		GBL.checkDebug(GBL.vidActions[action] , label);	
		ga('send', 'event', 'Videos', GBL.vidActions[action], label);
	};	
}(ga, window.GBL));    
