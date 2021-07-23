$( document ).ready(function() {
	console.log( "console ready!" );
	$("#first").keyup(ch);
	$("#last").keyup(ch);
});

function ch() {
	f = $("#first").val();
	l = $("#last").val();
	r = f + " - " + l;
	$("#result").val(r);
}
