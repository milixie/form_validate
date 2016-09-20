$.validator.setDefaults({
	submitHandler: function(){
		alert('submit!!!')
	}
})
$().ready(function(){
	$('#signSubmit').validate({
		rules: {
			firstname: 'required',
			lastname: 'required',
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6
			},
			check_password: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			},
			cemail: {
				required: true,
				email: true
			},
			"topic[]": {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			firstname: "请输入您的名字",
			lastname: "请输入您的姓氏",
			username: {
				required: "请输入您的用户名",
				minlength: "用户名必须由两个字母组成"
			},
			password: {
				required: "请输入密码",
				minlength: "密码长度不能小于6个字符"
			},
			check_password: {
				required: "请再次输入密码",
				minlength: "密码长度不能小于6个字符",
				equalTo: "两次密码输入不一致"
			},
			cemail: "请输入一个正确的邮箱",
			agree: "",
			topic: "请选择两个主题"
		}
	})
})