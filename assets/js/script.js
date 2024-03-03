$(function() {
	$("#status").css("visibility:hidden");
	var confirmButton = $('#confirm-purchase');
    confirmButton.click(function(e) {

		$("#status").css("visibility:visible");
		$("#status").removeClass('status-ok');
		
        e.preventDefault();
		if($.trim($('#owner').val())==''||$.trim($('#cvv').val())=='')
		{
			$("#status").addClass("status-fail").html("Please enter mandatory items!");	
		}
		else{
			$("#status").removeClass('status-fail');
			var score=getRandomInt(500,1000);
			$("#status").addClass("status-ok").html("CREDIT SCORE IS: "+(score));	
		}
		/*
		var dt=$("#date").val();
		var mth=$("#month").val();
		var yr=$("#year").val();
		var score=((dt+mth+Math.floor(yr/100))/2);
		*/
		
    });
});


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}