<template>
    <a-menu :selectedKeys="selectedKeys" :openKeys="openKeys" theme="dark" mode="inline" @click="onClickMenu">
        <template v-for="menu in menuList" :key="'' + menu.id">
            <template v-if="!menu.children || menu.children.length === 0">
                <a-menu-item :key="'' + menu.id">
                    <template #icon>
                        <icon-font :type="menu.icon" v-if="menu.icon" />
                        <nice-icon-font type="nice-caidan" v-else />
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
import { defineComponent } from 'vue'
import { Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { NiceIconFont, IconFont } from '../IconFont'

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
            <nice-icon-font type="nice-caidan" v-else />
        </template>
        <template #title>
            <span v-text="menuInfo.name"></span>
        </template>
        <template v-for="menu in menuInfo.children" :key="''+menu.id">
            <template v-if="!menu.children || menu.children.length === 0">
                <a-menu-item :key="'' + menu.id">
                    <template #icon>
                        <icon-font :type="menu.icon" v-if="menu.icon" />
                        <nice-icon-font type="nice-caidan" v-else />
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
    data() {
        return {
            //重新组装菜单格式
            allMenuList: [],
        }
    },
    emits: ['click-menu'],
    methods: {
        onClickMenu(MenuItem) {
            //获取菜单信息
            let menu = this.findMenu(MenuItem.key)
            this.$emit('click-menu', menu, MenuItem)
        },
        findMenu(key) {
            this.buildMenuList(this.menuList)
            return this.allMenuList.find((menu) => menu.id == key)
        },
        buildMenuList(menuList) {
            for (let i = 0; i < menuList.length; i++) {
                this.allMenuList.push(menuList[i])
                if (menuList[i].children && menuList[i].children.length > 0) {
                    this.buildMenuList(menuList[i].children)
                }
            }
        }
    }
})
</script>