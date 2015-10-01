$(document).ready(function() {
	var ExtWidgets = [];
	window.ExtClear = function() {
		ExtWidgets.forEach(function(entry){entry.close();});
	}
	window.ExtPush = function(data) {
		ExtWidgets.push(Ext.widget('panel', {
			width: 200,
			height: 100,
			data: data,
			renderTo: 'ExtJSSpan'
		}));
	}
});