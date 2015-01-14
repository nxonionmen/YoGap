$().ready( function() { main(); input_info(); } );

function main()
{
	flip("page1", true);
}


function flip(pageName, isQuick)
{
	$(".flipElement").toggleClass('flipFront', false);
	$("#" + pageName).toggleClass('flipFront', true);

	$(".flipElement").toggleClass('flipAnimation', isQuick == false);
}

function input_info() {
	$('.flipElement li label').on('click', function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
	});
	$('.flipElement li input').on('focusout', function(){
		if($(this).val().length < 1){
			$(this).prev().show();
			$(this).hide();
		}
	});
}