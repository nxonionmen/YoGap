$().ready( function() { main(); } );

function main()
{
	flip("page1", true);
	$(".flipButton").click(onClickContainer);
}

function onClickContainer()
{
	flip("page" + (Math.floor(Math.random() * 5) + 1), false);
}

function flip(pageName, isQuick)
{
	$(".flipElement").toggleClass('flipFront', false);
	$("#" + pageName).toggleClass('flipFront', true);

	$(".flipElement").toggleClass('flipAnimation', isQuick == false);
}
