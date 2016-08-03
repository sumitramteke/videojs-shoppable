(function(player, debug) {
	player.overlay({
		debug: debug,
		overlays: [{
		  content: 'First Shoppable Item',
		  start: 0,
		  end: 16,
		  align: 'top-right'
		}, {
		  content: 'Second Shoppable Item',
		  start: 17,
		  end: 27,
		  align: 'right'
		}, {
		  content: 'Third Shoppable Item',
		  start: 28,
		  end: 38,
		  align: 'bottom-right'
		}]
	});
}(GBL.player, GBL.debug));