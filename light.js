$(document).ready(function() {
	$("#light-select").val(1);
	changeLight();
});

function changeLight() {
	var selectedLight = $("#light-select").val();
	$(".light").removeClass("selected");
	$("#light" + selectedLight).addClass("selected");
}

function changeColor() {
	var selectedColor = $("#color-picker").val();
	var selectedLight = $("#light-select").val();
	$("#light" + selectedLight).css("background-color", selectedColor);
}
