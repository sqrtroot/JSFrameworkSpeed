$(document).ready(function() {
	window.RawClear = function() {
		$("#rawplace").empty();
	}
	window.RawPush = function(data) {
		$("#rawplace").append(data);
	}
});