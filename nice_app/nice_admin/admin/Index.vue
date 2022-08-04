<template>
    <p>后台首页</p>
    <a-button type="primary" @click="alert">Primary Button</a-button>
</template>

<script>
import { Button, message } from 'ant-design-vue';

export default {
    components: {
        AButton: Button
    },
    methods: {
        alert: function () {
            message.success('ok');
        }
    }
}
</script>

<style>
</style>