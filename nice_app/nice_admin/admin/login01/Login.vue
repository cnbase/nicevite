<template>
    <div class="boxer">
        <div class="box1">
            <div class="middle1">
                <div class="middle_left">
                    <img :src="'./login/01/left.png'" />
                </div>
                <div class="middle_right">
                    <div class="mr_box">
                        <h2>欢迎登录</h2>
                        <form>
                            <div class="form-group">
                                <span class="iconfont icon-Profile icon_p"></span>
                                <input type="mobile" class="form-control icon-user" placeholder="请输入您的用户名/手机号">
                            </div>
                            <div class="form-group mar_b">
                                <span class="iconfont icon-Unlock icon_p"></span>
                                <input type="password" class="form-control icon-pass" placeholder="请输入您的密码">
                            </div>
                            <button type="submit" class="login">登录</button>
                        </form>
                    </div>
                </div>
            </div>
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
    methods: {

    }
})
</script>
<style>
</style>