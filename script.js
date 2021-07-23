$( document ).ready(function() {
	$("#first").keyup(ch);
	$("#last").keyup(ch);
});

function ch() {
	f = $("#first").val();
	l = $("#last").val();
	fi = parseInt(f);
	li = parseInt(l);
	if (fi > li) {
		$("#result").val("err");
		return;
	}

	r = "";
	h = Math.floor((li - fi) / 2);
	for (let i = fi; i <= fi + h; i++) { 
		r += i + ',';
		c = i + h + 1;
		if (c <= li) {
			r += c + ',';
		}
	}
	r = r.slice(0, -1);
	$("#result").val(r);
}
