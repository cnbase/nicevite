<template>
    <div class="header Cgreen">
        <div class="wrapper clearfix">
            <h1>点教后台管理系统</h1>
            <span class="QRspan">
                <i class="iconfont">&#xe61b;</i>
                <span>关注公众号</span>
                <img class="QRimg" :src="'./login/04/qr.png'" />
            </span>
        </div>
    </div>
    <div class="content">
        <div class="wrapper">
            <img class="bg1" :src="'./login/04/bg1.png'" />
            <div class="loginBox">
                <div class="logo"></div>
                <div class="formDiv">
                    <form action="" method="post">
                        <label class="user">
                            <input type="text" placeholder="请输入用户名" />
                            <i class="iconfont">&#xe614;</i>
                        </label>
                        <label class="pwd">
                            <input type="password" placeholder="请输入密码" />
                            <i class="iconfont">&#xe615;</i>
                        </label>
                        <div class="pwdOper">
                            <span class="remember">
                                <label>
                                    <input type="checkbox" class="hide" />
                                    <span class="checkbox"></span>
                                    记住密码
                                </label>
                            </span>
                            <a class="forget Cred" href="javascript:;">忘记密码?</a>
                        </div>
                        <a href="javascript:;" class="submit">登 录</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="wrapper">
            <span>Copyright © 2005-2018 www.ruixin.com 版权所有 京ICP备16039949号-1 京公网备案 11010802022079号</span>
        </div>
    </div>
</template>
<script>
// import { message } from 'ant-design-vue'
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            mobile: '',
            passwd: '',
            smsCode: '',
        }
    },
    mounted() {
        window.onload = function() {
			setContentHeight();
			window.onresize = setContentHeight;
			function setContentHeight () {
				let windowHeight = document.documentElement.clientHeight;
				document.getElementsByClassName('content')[0].style.height = windowHeight - 102 - 138 + 'px';
			}
		}
    },
    methods: {

    }
})
</script>
<style>
</style>