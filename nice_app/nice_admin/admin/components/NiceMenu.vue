<template>
    <a-menu :selectedKeys="selectedKeys" :openKeys="openKeys" theme="dark" mode="inline">
        <template v-for="menu in menuList" :key="'' + menu.id">
            <template v-if="!menu.children || menu.children.length === 0">
                <a-menu-item :key="'' + menu.id">
                    <template #icon>
                        <icon-font :type="menu.icon" v-if="menu.icon" />
                        <nice-icon-font type="icon-caidan" v-else />
                    </template>
                    <span v-text="menu.name"></span>
                </a-menu-item>
            </template>
            <template v-else>
                <nice-sub-menu :menuInfo="menu" :key="'' + menu.id"></nice-sub-menu>
            </template>
        </template>
    </a-menu>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { NiceIconFont, default as IconFont } from '../IconFont'

const NiceSubMenu = {
    name: 'NiceSubMenu',
    components: {
        ASubMenu: SubMenu,
        AMenuItem: MenuItem,
        IconFont,
        NiceIconFont,
    },
    props: {
        menuInfo: {
            type: Object,
            default: () => ({})
        }
    },
    template: `
    <a-sub-menu :key="'' + menuInfo.id">
        <template #icon>
            <icon-font :type="menuInfo.icon" v-if="menuInfo.icon" />
            <nice-icon-font type="icon-caidan" v-else />
        </template>
        <template #title>
            <span v-text="menuInfo.name"></span>
        </template>
        <template v-for="menu in menuInfo.children" :key="''+menu.id">
            <template v-if="!menu.children || menu.children.length === 0">
                <a-menu-item :key="'' + menu.id">
                    <template #icon>
                        <icon-font :type="menu.icon" v-if="menu.icon" />
                        <nice-icon-font type="icon-caidan" v-else />
                    </template>
                    <span v-text="menu.name"></span>
                </a-menu-item>
            </template>
            <template v-else>
                <nice-sub-menu :menuInfo="menu" :key="'' + menu.id"></nice-sub-menu>
            </template>
        </template>
    </a-sub-menu>
    `
}

export default defineComponent({
    name: 'NiceMenu',
    components: {
        AMenu: Menu,
        AMenuItem: MenuItem,
        IconFont,
        NiceIconFont,
        NiceSubMenu,
    },
    props: {
        //菜单列表
        menuList: {
            type: Array,
            default: () => ([])
        },
        //选中的菜单数组
        selectedKeys: {
            type: Array,
            default: () => ([])
        },
        //展开的subMenu菜单数组
        openKeys: {
            type: Array,
            default: () => ([])
        }
    },
})
</script>