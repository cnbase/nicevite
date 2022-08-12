<template>
    <a-layout style="height: 100vh">
        <a-layout-header :style="{ padding: '0 10px' }">
            <div :style="{ width: '200px', padding: '0 10px' }">
                <img class="logo" :src="'./images/logo.png'" />
            </div>
            <div :style="{ display: 'flex', justifyContent: 'flex-end' }">
                <div :style="{ lineHeight: '64px', marginLeft: '10px', textAlign: 'center' }">
                    <a-avatar :style="{ fontSize: '32px', backgroundColor: '#001529' }">
                        <template #icon>
                            <nice-icon-font type="icon-user" />
                        </template>
                    </a-avatar>
                    <a-dropdown>
                        <a class="ant-dropdown-link" :style="{ marginLeft: '5px', color: '#fff', fontWeight: 'bold' }"
                            @click.prevent>
                            游客,你好
                            <DownOutlined />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item @click="onClickChangePwd">
                                    <a href="javascript:;">修改密码</a>
                                </a-menu-item>
                                <a-menu-item @click="onLogout">
                                    <a href="javascript:;">注销登录</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider v-model:collapsed="sideShow" collapsible :style="{ width: '200px', overflow: 'auto' }">
                <nice-menu :selectedKeys="menu.selectedKeys" :openKeys="menu.openKeys" :menuList="menu.list">
                </nice-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content :style="{ margin: '5px 16px 0' }">
                    <a-tabs v-model:activeKey="tabs.currentTabKey" type="editable-card" :hideAdd="true"
                        @edit="onCloseTab">

                        <a-tab-pane key="0" tab="控制台" :closable="false" class="nice_tab_pane">
                            控制台主页
                        </a-tab-pane>

                        <a-tab-pane v-for="pane in tabs.TabPane" :key="pane.id" :tab="pane.name" :closable="true"
                            class="nice_tab_pane">
                            <iframe :src="pane.url" frameborder="0" class="iframe" v-if="pane.url">
                                <p>Your browser does not support iframes.</p>
                            </iframe>
                        </a-tab-pane>
                    </a-tabs>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
    <a-modal title="修改登录密码" v-model:visible="changePwd.visible" :maskClosable="false"
        :confirm-loading="changePwd.loading" :cancelText="'取消'" :okText="'提交'" @ok="onChangePwd">
        <a-form-item label="原密码" :labelCol="changePwd.labelCol">
            <a-input-password v-model:value="changePwd.old" />
        </a-form-item>
        <a-form-item label="新密码" :labelCol="changePwd.labelCol">
            <a-input-password v-model:value="changePwd.new" />
        </a-form-item>
        <a-form-item label="确认密码" :labelCol="changePwd.labelCol">
            <a-input-password v-model:value="changePwd.confirm" />
        </a-form-item>
    </a-modal>
</template>

<script>
import { Layout, LayoutHeader, LayoutSider, LayoutFooter, LayoutContent, Menu, MenuItem, Tabs, TabPane, Avatar, Dropdown, Modal, message, Form, FormItem, Input, InputPassword } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue';
import { NiceIconFont } from './IconFont'
import { defineComponent, nextTick } from 'vue';
import NiceMenu from './components/NiceMenu.vue'

export default defineComponent({
    components: {
        ALayout: Layout,
        ALayoutHeader: LayoutHeader,
        ALayoutSider: LayoutSider,
        ALayoutFooter: LayoutFooter,
        ALayoutContent: LayoutContent,
        ATabs: Tabs,
        ATabPane: TabPane,
        AAvatar: Avatar,
        ADropdown: Dropdown,
        AMenu: Menu,
        AMenuItem: MenuItem,
        NiceIconFont,
        DownOutlined,
        AModal: Modal,
        NiceMenu,
        AFormItem: FormItem,
        AInputPassword: InputPassword,
    },
    data() {
        return {
            changePwd: {
                visible: false,
                loading: false,
                old: '',
                new: '',
                confirm: '',
                labelCol: { style: { width: '80px' } }
            },
            //侧边栏显隐状态
            sideShow: false,
            //菜单相关
            menu: {
                //默认选中的菜单数组
                selectedKeys: ['1'],
                //默认展开的subMenu菜单数组
                openKeys: ['1'],
                //菜单列表
                list: [
                    {
                        id: '1', name: 'Menu 1', icon: 'icon-caidan', url: '/abc', children: [
                            { id: '2', name: 'SubMenu 2', icon: 'icon-caidan', url: '/abcd', children: [] },
                            { id: '3', name: 'SubMenu 3', icon: 'icon-caidan', url: '/abcde', children: [] },
                        ]
                    },
                    { id: '4', name: 'Menu 4', icon: 'icon-caidan', url: '/aaa', children: [] }
                ]
            },
            //标签页相关
            tabs: {
                //当前激活状态的tab标签
                currentTabKey: '1',
                //标签页列表
                TabPane: [
                    { id: '1', name: 'Tab 1', url: 'http://www.baidu.com' },
                    { id: '2', name: 'Tab 2', url: 'http://www.163.com' },
                    { id: '3', name: 'Tab 3', url: 'http://www.qq.com' },
                    { id: '4', name: 'Tab 4', url: 'http://www.douyin.com' },
                    { id: '5', name: 'Tab 5', url: 'http://www.taobao.com' },
                ],
            },
        };
    },
    mounted() {
        window.onOpenTab = this.onOpenTab
    },
    methods: {
        //监听修改密码
        onClickChangePwd() {
            this.changePwd.visible = true;
        },
        //修改密码
        onChangePwd() {
            this.changePwd.loading = true;
            setTimeout(() => {
                this.changePwd.visible = false;
                this.changePwd.loading = false;
                message.success('修改成功')
            }, 2000);
        },
        //注销登录
        onLogout() {
            console.log('注销登录')
            message.success('注销登录')
        },
        //监听关闭tab标签
        onCloseTab(targetKey, action) {
            if (action === 'remove') {
                let currentTabKey = this.tabs.currentTabKey
                if (targetKey === currentTabKey) {
                    //关闭当前标签页
                    let currentIndex = -1
                    this.tabs.TabPane.forEach((pane, i) => {
                        if (pane.id == targetKey) {
                            currentIndex = i
                        }
                    })
                    if (currentIndex > 0) {
                        //切换到前一个标签页
                        currentTabKey = '' + this.tabs.TabPane[currentIndex - 1].id
                    } else if (currentIndex == 0 && this.tabs.TabPane.length - 1 > 0) {
                        if (this.tabs.TabPane.length - 1 > 0) {
                            //切换到后一个标签页
                            currentTabKey = '' + this.tabs.TabPane[currentIndex + 1].id
                        }
                    } else {
                        //切换到控制台
                        currentTabKey = '0'
                    }
                }
                //过滤关闭tab
                let tmpTabPane = this.tabs.TabPane.filter(pane => pane.id != targetKey)
                //最后赋值
                this.tabs.currentTabKey = currentTabKey
                this.tabs.TabPane = tmpTabPane
            }
        },
        //添加标签页
        onOpenTab(tab) {
            console.log('添加标签页')
            this.tabs.TabPane.push(tab)
            this.tabs.currentTabKey = '' + tab.id
        }
    }
});
</script>

<style>
.logo {
    float: left;
    width: 126px;
    height: 43px;
    margin: 10px 24px 10px 0;
}

/* tabs */
.ant-tabs-top>.ant-tabs-nav,
.ant-tabs-bottom>.ant-tabs-nav,
.ant-tabs-top>div>.ant-tabs-nav,
.ant-tabs-bottom>div>.ant-tabs-nav {
    margin: 0 0 5px 0;
}

/**
 * tab 内容高度
 * 186px = 64px - 5px - 40px - 5px - 10px - 48px - 14px
 * 100vh - header头(64px,ant-layout-header) - 主体部分margin(5px,ant-layout-content) - tab标签高度(40px,ant-tabs-nav) - tab标签margin-bottom(5px,ant-tabs-nav) - tab内容padding(5px*2,ant-tabs-tabpane) - footer底部padding(24px*2,ant-layout-footer) - footer字体高度font-size(14px,ant-layout-footer)
 */
.nice_tab_pane {
    border-radius: 5px;
    padding: 5px;
    background: #fff;
    /* min-height: 360px; */
    height: calc(100vh - 189px);
    overflow: hidden;
}

/* 滚动条 */
::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(226, 226, 226, 0.1);
    background: rgb(110, 110, 110);
}

::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(226, 226, 226, 0.1);
    border-radius: 10px;
    background: #ededed;
}

.iframe {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
}
</style>