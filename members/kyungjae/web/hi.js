$().ready( function() { main(); } );

function main()
{
	createBasicButtons();
	flip("page_welcome", true);
}

function createBasicButtons()
{
	// 1bbc9b, 2dcc70, 3598db, f1c30f, 34495d, 15a086

	createMenuBar('welcome-signup', '회원가입', '#1bbc9b').appendTo($("#page_welcome"));
	createMenuBar('welcome-login', '로그인', '#2dcc70').appendTo($("#page_welcome"));
	createMenuBar('welcome-forgot', '암호 복구', '#3598db').appendTo($("#page_welcome"));
	
	createMenuBar('signup-name', '', '#1bbc9b').appendTo($("#page_signup"))
		.append(createInputBox('welcome-txt-name', 'text', '이름'));
	createMenuBar('signup-email', '', '#2dcc70').appendTo($("#page_signup"))
		.append(createInputBox('welcome-txt-email', 'text', '이메일'));
	createMenuBar('signup-pw', '', '#3598db').appendTo($("#page_signup"))
		.append(createInputBox('welcome-txt-pw', 'password', '암호'));
	createMenuBar('signup-signup', '탭하여 가입하기', '#34495d').appendTo($("#page_signup"));
	createMenuBar('signup-back', '돌아가기', '#15a086').appendTo($("#page_signup"));
	
	createMenuBar('login-name', '', '#1bbc9b').appendTo($("#page_login"))
		.append(createInputBox('login-txt-name', 'text', '이름'));
	createMenuBar('login-pw', '', '#2dcc70').appendTo($("#page_login"))
		.append(createInputBox('login-txt-pw', 'password', '암호'));
	createMenuBar('login-login', '탭하여 로그인', '#3598db').appendTo($("#page_login"));
	createMenuBar('login-back', '돌아가기', '#34495d').appendTo($("#page_login"));
	
	createMenuBar('forgot-email', '', '#2dcc70').appendTo($("#page_forgot"))
		.append(createInputBox('forgot-txt-email', 'text', '이메일'));
	createMenuBar('forgot-reset', '탭하여 재설정', '#34495d').appendTo($("#page_forgot"));
	createMenuBar('forgot-back', '돌아가기', '#1bbc9b').appendTo($("#page_forgot"));
}

function createMenuBar(commandName, label, color)
{
	return $("<span>").addClass('menuBar')
		.data('command', commandName)
		.text(label)
		.css('background-color', color)
		.click(onMenuClick);
}

function createInputBox(id, boxType, placeholderText)
{
	return $("<input>").attr('id', id).attr('type', boxType).attr('placeholder', placeholderText).addClass("inputBox");
}

function onMenuClick()
{
	var commandName = $(this).data('command');
	if (typeof commandName === 'undefined')
		return;
		
	if (commandName == "welcome-signup")
	{
		flip("page_signup");
	}
	if (commandName == "welcome-login")
	{
		flip("page_login");
	}
	if (commandName == "welcome-forgot")
	{
		flip("page_forgot");
	}
	if (commandName == "signup-back")
	{
		flip("page_welcome");
	}
	if (commandName == "login-back")
	{
		flip("page_welcome");
	}
	if (commandName == "forgot-back")
	{
		flip("page_welcome");
	}
}

function flip(pageName, isQuick)
{
	if (typeof isQuick === 'undefined')
		isQuick = false;
	$(".flipElement").toggleClass('flipFront', false);
	$("#" + pageName).toggleClass('flipFront', true);

	$(".flipElement").toggleClass('flipAnimation', isQuick == false);
}
