(function(player, debug, doc) {
	let elms = [];
	
	let linkElm = doc.createElement('a');
	linkElm.textContent = 'First Shoppable Item';
	linkElm.setAttribute('href','http://www.google.co.in');
	linkElm.setAttribute('class','btn btn-primary');
	linkElm.setAttribute('target','_blank');
	elms.push(linkElm);

	linkElm = doc.createElement('a');
	linkElm.textContent = 'Second Shoppable Item';
	linkElm.setAttribute('href','http://www.google.co.in');
	linkElm.setAttribute('class','btn btn-primary');
	linkElm.setAttribute('target','_blank');
	elms.push(linkElm);

	linkElm = doc.createElement('a');
	linkElm.textContent = 'Third Shoppable Item';
	linkElm.setAttribute('href','http://www.google.co.in');
	linkElm.setAttribute('class','btn btn-primary');
	linkElm.setAttribute('target','_blank');
	elms.push(linkElm);

	player.overlay({
		debug: debug,
		showBackground:false,
		// class: 'btn btn-primary',
		overlays: [{
		  content: elms[0],
		  start: 0,
		  end: 16,
		  align: 'top-right'
		}, {
		  content: elms[1],
		  start: 17,
		  end: 27,
		  align: 'right'
		}, {
		  content: elms[2],
		  start: 28,
		  end: 38,
		  align: 'bottom-right'
		}]
	});
}(GBL.player, GBL.debug, window.document));