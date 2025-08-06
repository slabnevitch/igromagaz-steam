(function() {
	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		
		if(document.querySelector('#select-vallet') !== null) {
			var lcSelect = new lc_select('#select-vallet', {
				wrap_width: '100%', 
				pre_placeh_opt: true,
				min_for_search : 2,
			});
		}
	});
})();