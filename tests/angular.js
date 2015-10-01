var Ctrl = function($scope) {
	$scope.data = [];
};
$(document).ready(function() {
	angular.element(document).ready(function() {
		var ang_scope = $('#angList').scope();

		window.ANGclear = function(optimize) {
			ang_scope.data.splice(0, ang_scope.data.length);
			if(!optimize){
				ang_scope.$digest();
			}
		};
		window.ANGpush = function(data, optimize) {
			ang_scope.data.push(data);
			if(!optimize){
				ang_scope.$digest();
			}
		};
		window.ANGUpdate = function(){
			ang_scope.$digest();
		}
	});
});