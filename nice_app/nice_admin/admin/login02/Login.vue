<template>
    <div class="login_box">
        <div class="login_l_img"><img :src="'./login/02/login-img.png'" /></div>
        <div class="login">
            <div class="login_logo"><a href="#"><img :src="'./login/02/login_logo.png'" /></a></div>
            <div class="login_name">
                <p>后台管理系统</p>
            </div>
            <form method="post">
                <input name="username" type="text" value="用户名" onfocus="this.value=''"
                    onblur="if(this.value==''){this.value='用户名'}">
                <span id="password_text"
                    onclick="this.style.display='none';document.getElementById('password').style.display='block';document.getElementById('password').focus().select();">密码</span>
                <input name="password" type="password" id="password" style="display:none;"
                    onblur="if(this.value==''){document.getElementById('password_text').style.display='block';this.style.display='none'};" />
                <input value="登录" style="width:100%;" type="submit">
            </form>
        </div>
        <div class="copyright">某某有限公司 版权所有©2016-2018 技术支持电话：000-00000000</div>
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
    methods: {

    }
})
</script>
<style>
</style>