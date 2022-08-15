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
                            <nice-icon-font type="nice-user" />
                        </template>
                    </a-avatar>
                    <a-dropdown>
                        <a class="ant-dropdown-link" :style="{ marginLeft: '5px', color: '#fff', fontWeight: 'bold' }"
                            @click.prevent>
                            游客,你好
                            <nice-icon-font type="nice-shuangxiangxia" />
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
                <nice-menu :menuList="menuList" @click-menu="onClickMenu">
                </nice-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content :style="{ margin: '5px 16px 0' }">
                    <a-tabs v-model:activeKey="tabs.currentTabKey" type="editable-card" :hideAdd="true"
                        @edit="onCloseTab" @change="onChangeTab">
                        <a-tab-pane v-for="pane in tabs.TabPane" :key="pane.id" :closable="pane.id != '0'">
                            <template #tab>
                                <nice-icon-font type="nice-caidan" v-if="pane.id == '0'" />
                                <icon-font :type="pane.icon" v-if="pane.id != '0' && pane.icon" />
                                <span v-text="pane.name"></span>
                            </template>
                        </a-tab-pane>
                        <template #rightExtra>
                            <a-dropdown-button @click="onClickReload">
                                <nice-icon-font type="nice-shuaxin" title="刷新" />
                                <template #overlay>
                                    <a-menu @click="onClickTabMore">
                                        <a-menu-item key="target">
                                            <nice-icon-font type="nice-tiaozhuan" title="新窗口打开"
                                                style="margin-right: 4px;" />
                                            <span>新窗口打开</span>
                                        </a-menu-item>
                                        <a-menu-item key="closeOther">
                                            <nice-icon-font type="nice-guanbi" title="关闭其他页面"
                                                style="margin-right: 4px;" />
                                            <span>关闭其他页面</span>
                                        </a-menu-item>
                                        <a-menu-item key="closeAll">
                                            <nice-icon-font type="nice-lajixiang" title="关闭所有页面"
                                                style="margin-right: 4px;" />
                                            <span>关闭所有页面</span>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown-button>
                        </template>
                    </a-tabs>
                    <div class="nice_tab_pane">
                        <iframe v-for="pane in tabs.TabPane" :key="pane.id" :id="'iframe_'+pane.id" :ref="'iframe_' + pane.id" :src="pane.url"
                            frameborder="0" class="iframe" v-show="pane.id == tabs.currentTabKey">
                            <p>Your browser does not support iframes.</p>
                        </iframe>
                    </div>
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
import { Layout, LayoutHeader, LayoutSider, LayoutFooter, LayoutContent, Menu, MenuItem, Tabs, TabPane, Avatar, Dropdown, DropdownButton, Modal, message, Form, FormItem, Input, InputPassword } from 'ant-design-vue'
import { NiceIconFont, IconFont } from './IconFont'
import { defineComponent } from 'vue'
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
        ADropdownButton: DropdownButton,
        AMenu: Menu,
        AMenuItem: MenuItem,
        NiceIconFont,
        IconFont,
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
            //菜单列表
            menuList: [
                { id: '0', name: '控制台', icon: 'nice-caidan', url: '/admin/welcome/index.html', children: [] },
                {
                    id: '1', name: 'Menu 1', icon: 'nice-caidan', url: '/abc', children: [
                        { id: '2', name: 'SubMenu 2', icon: 'nice-caidan', url: '/abcd', children: [] },
                        { id: '3', name: 'SubMenu 3', icon: 'nice-caidan', url: '/abcde', children: [] },
                    ]
                },
                { id: '4', name: '淘宝', icon: 'nice-caidan', url: 'https://www.h5w3.com/81344.html', children: [] },
            ],
            //重组1维数组格式菜单
            allMenuList: [],
            //标签页相关
            tabs: {
                //当前激活状态的tab标签
                currentTabKey: '0',
                //标签页列表
                TabPane: [
                    { id: '0', name: '控制台', icon: 'nice-caidan', url: '/admin/welcome/index.html', children: [] },
                ],
            },
        };
    },
    mounted() {
        window.onOpenTab = this.onOpenTab
        this.buildMenuList(this.menuList)
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
        //刷新当前页
        onClickReload() {
            let currentPane = this.tabs.TabPane.find(pane => pane.id == this.tabs.currentTabKey)
            currentPane && this.$refs['iframe_'+this.tabs.currentTabKey][0].contentWindow.location.replace(currentPane.url)
        },
        //监听更多按钮
        onClickTabMore({ key }) {
            if (key == 'target') {
                //新窗口打开
                let currentPane = this.tabs.TabPane.find(pane => pane.id == this.tabs.currentTabKey)
                currentPane && window.open(currentPane.url,'_blank')
            }
            if (key == 'closeOther') {
                //关闭其他标签页
                this.tabs.TabPane = this.tabs.TabPane.filter((pane) => { return pane.id == '0' || pane.id == this.tabs.currentTabKey})
            }
            if (key == 'closeAll') {
                //关闭所有标签页
                this.tabs.TabPane = this.tabs.TabPane.filter(pane => pane.id == '0')
                this.tabs.currentTabKey = '0'
            }
        },
        //监听切换tab
        onChangeTab(activeKey) {
            let pane = this.tabs.TabPane.find((item) => item.id == activeKey)
            if (!pane) {
                //打开新标签页
                let activePane = this.allMenuList.find(item => item.id == activeKey)
                if (activePane) {
                    this.tabs.TabPane.push(activePane)
                }
            }
            this.tabs.currentTabKey = activeKey
        },
        //监听关闭tab标签
        onCloseTab(targetKey, action) {
            if (action === 'remove') {
                let currentTabKey = this.tabs.currentTabKey
                if (targetKey === currentTabKey) {
                    //关闭当前标签页
                    let currentIndex = this.tabs.TabPane.findIndex(pane => pane.id == targetKey)
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
            if ('' + tab.id == '0') {
                this.tabs.currentTabKey = '0'
            } else {
                let find = this.tabs.TabPane.find((item) => '' + item.id == '' + tab.id)
                if (find) {
                    this.tabs.currentTabKey = tab.id
                } else {
                    this.tabs.TabPane.push(tab)
                    this.tabs.currentTabKey = '' + tab.id
                }
            }
        },
        //点击菜单
        onClickMenu(menu) {
            if (menu && menu.url) {
                this.onOpenTab(menu)
            }
        },
        //重组一维数组格式
        buildMenuList(menuList) {
            for (let i = 0; i < menuList.length; i++) {
                this.allMenuList.push(menuList[i])
                if (menuList[i].children && menuList[i].children.length > 0) {
                    this.buildMenuList(menuList[i].children)
                }
            }
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

.iframe {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
}
</style>