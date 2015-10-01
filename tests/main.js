function runTest(clear, add, times){
	var starttime = new Date().getTime();
	for (var i = 0; i < times; i++){
		add(i);
	}
	clear();
	var endtime = new Date().getTime();
	return endtime-starttime;
}

function runTest2(clear, add, update, times){
	var starttime = new Date().getTime();
	for (var i = 0; i < times; i++){
		add(i,true);
	}
	update();
	clear(true);
	update();
	var endtime = new Date().getTime();
	return endtime-starttime;
}
function clearResults(){
	$('#results tbody > tr').remove();
}
function run() {
	var times = $("#times").val();
	console.log("generating " + times + " elements per framework");
	var optimize = $("#optimize").is(':checked');
	var Angular,Ember,React,Raw,ExtJS;
	if (optimize){
		React = runTest2(window.RClear,window.RPush, window.RUpdate, times);
		Angular = runTest2(window.ANGclear,window.ANGpush, window.ANGUpdate, times);	
	}else{
		React = runTest(window.RClear,window.RPush, times);
		Angular = runTest(window.ANGclear,window.ANGpush,times);	
	}
	Ember = runTest(window.EMclear,window.EMpush,times);
	ExtJS = runTest(window.ExtClear,window.ExtPush,times);
	Raw = runTest(window.RawClear,window.RawPush,times);
	tableRow = "<tr>";
	tableRow += "<td><input type=\"checkbox\" disabled " +(optimize? "checked>" : ">") + "</input></td>";
	tableRow += "<td>" + times + "X</td>";
	tableRow += "<td>" + Angular + "ms</td>";
	tableRow += "<td>" + Ember + "ms</td>";
	tableRow += "<td>" + React + "ms</td>";
	tableRow += "<td>" + Raw + "ms</td>";
	tableRow += "<td>" + ExtJS + "ms</td>";
	tableRow += "</tr>";
	$("#results").append(tableRow);
};