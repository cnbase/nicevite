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
                <a-menu v-model:selectedKeys="selectedMenuKeys" theme="dark" mode="inline">
                    <a-menu-item key="1">
                        <nice-icon-font type="icon-caidan" />
                        <span>Option 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <nice-icon-font type="icon-caidan" />
                        <span>Option 2</span>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <icon-font type="icon-twitter" />
                                <span>User</span>
                            </span>
                        </template>
                        <a-menu-item key="3">Tom</a-menu-item>
                        <a-menu-item key="4">Bill</a-menu-item>
                        <a-menu-item key="5">Alex</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                                <icon-font type="icon-twitter" />
                                <span>Team</span>
                            </span>
                        </template>
                        <a-menu-item key="6">Team 1</a-menu-item>
                        <a-menu-item key="8">Team 2</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="9">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="10">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="11">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="12">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="13">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="14">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="15">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="16">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="17">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="18">
                        <icon-font type="icon-twitter" />
                        <span>File</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content :style="{ margin: '5px 16px 0' }">
                    <a-tabs v-model:activeKey="tabs.currentTabKey" type="editable-card" :hideAdd="true"
                        @edit="onCloseTab" @change="onChangeTab">
                        <a-tab-pane key="0" tab="控制台" :closable="false" class="nice_tab_pane">
                            控制台主页
                        </a-tab-pane>
                        <a-tab-pane v-for="pane in tabs.TabPane" :key="pane.id" :tab="pane.name" :closable="true"
                            class="nice_tab_pane">
                            {{ pane.content }}
                        </a-tab-pane>
                    </a-tabs>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
    <a-modal v-model:visible="changePwd.visible" title="修改登录密码" :confirm-loading="changePwd.loading" @ok="onChangePwd">
        <p>修改密码表单</p>
    </a-modal>
</template>

<script setup>

</script>

<script>
import { Layout, LayoutHeader, LayoutSider, LayoutFooter, LayoutContent, Menu, MenuItem, SubMenu, Tabs, TabPane, Avatar, Dropdown, Modal, message } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue';
import { NiceIconFont, default as IconFont } from './IconFont'
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
    components: {
        ALayout: Layout,
        ALayoutHeader: LayoutHeader,
        ALayoutSider: LayoutSider,
        ALayoutFooter: LayoutFooter,
        ALayoutContent: LayoutContent,
        AMenu: Menu,
        AMenuItem: MenuItem,
        ASubMenu: SubMenu,
        ATabs: Tabs,
        ATabPane: TabPane,
        AAvatar: Avatar,
        ADropdown: Dropdown,
        IconFont,
        NiceIconFont,
        DownOutlined,
        AModal: Modal,
    },
    data() {
        return {
            changePwd: {
                visible: false,
                loading: false,
            },
            //侧边栏显隐状态
            sideShow: ref(false),
            //默认选中的菜单数组
            selectedMenuKeys: ref(['1']),
            //标签页相关
            tabs: {
                //当前激活状态的tab标签
                currentTabKey: '1',
                //标签页列表
                TabPane: [
                    { id: '1', name: 'Tab 1', content: '<p style="height: 300px;">300px height</p><p style="height: 300px;">300px height</p><p style="height: 300px;">300px height</p><p style="height: 300px;">300px height</p><p style="height: 300px;">300px height</p>' },
                    { id: '2', name: 'Tab 2', content: 'Content of Tab Pane 2' },
                    { id: '3', name: 'Tab 3', content: 'Content of Tab Pane 3' },
                    { id: '4', name: 'Tab 4', content: 'Content of Tab Pane 4' },
                    { id: '5', name: 'Tab 5', content: 'Content of Tab Pane 5' },
                ],
            },
        };
    },
    mounted() {
        // let app = getCurrentInstance()
        window.niceApp.onOpenTab = this.onOpenTab
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
                //当前要关闭的tab页==当前显示的tab页,切换显示最后一个tab页
                if (targetKey === currentTabKey) {
                    //查找最靠近的tab页索引
                    let lastIndex = 0
                    this.tabs.TabPane.forEach((pane, i) => {
                        if (pane.id == targetKey) {
                            lastIndex = i - 1
                        }
                    })
                    if (lastIndex >= 0) {
                        //还有标签页
                        currentTabKey = '' + this.tabs.TabPane[lastIndex].id
                    } else {
                        //已关闭所有tab页,默认切换到主控制台
                        currentTabKey = '0'
                    }
                }
                //过滤关闭tab
                let tmpTabPane = this.tabs.TabPane.filter(pane => pane.id != targetKey)
                //最后赋值
                this.tabs.currentTabKey = currentTabKey
                this.tabs.TabPane = tmpTabPane
                console.log(typeof targetKey)
                console.log(targetKey)
                console.log('移除标签页')
            }
        },
        //监听tab切换
        onChangeTab(activeKey) {
            console.log(activeKey)
            console.log('切换标签页')
        },
        //添加标签页
        onOpenTab() {
            console.log('添加标签页')
            this.tabs.TabPane.push({id: '7', name: 'Tab 7', content: 'test'})
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
    height: calc(100vh - 186px);
    overflow: auto;
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
</style>