<template>
    <a-layout style="height: 100vh">
        <a-layout-header :style="{ padding: '0 10px' }">
            <div :style="{ width: '200px', padding: '0 10px' }">
                <div class="logo"></div>
            </div>
            <div :style="{ display: 'flex', justifyContent: 'flex-end' }">
                <div :style="{ lineHeight: '64px', marginLeft: '10px', textAlign: 'center' }">
                    <a-avatar :style="{ backgroundColor: '#87d068' }">
                        <template #icon>
                            <UserOutlined />
                        </template>
                    </a-avatar>
                    <a-dropdown>
                        <a class="ant-dropdown-link" :style="{ marginLeft: '5px', color: '#fff', fontWeight: 'bold' }" @click.prevent>
                            游客,你好
                            <DownOutlined />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ width: '200px', overflow: 'auto' }">
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <a-menu-item key="1">
                        <icon-font type="icon-twitter"/>
                        <span>Option 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <icon-font type="icon-twitter"/>
                        <span>Option 2</span>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <icon-font type="icon-twitter"/>
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
                                <icon-font type="icon-twitter"/>
                                <span>Team</span>
                            </span>
                        </template>
                        <a-menu-item key="6">Team 1</a-menu-item>
                        <a-menu-item key="8">Team 2</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="9">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="10">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="11">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="12">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="13">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="14">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="15">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="16">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="17">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                    <a-menu-item key="18">
                        <icon-font type="icon-twitter"/>
                        <span>File</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content :style="{ margin: '5px 16px 0' }">
                    <a-tabs v-model:activeKey="activeKey" type="editable-card" :hideAdd="true" @edit="onEdit">
                        <a-tab-pane key="1" tab="Tab 1" :closable="false" class="nice_tab_pane">
                            Bill is a cat.
                            <p style="height: 300px;">300px height</p>
                            <p style="height: 300px;">300px height</p>
                            <p style="height: 300px;">300px height</p>
                            <p style="height: 300px;">300px height</p>
                            <p style="height: 300px;">300px height</p>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Tab 2" :closable="true" class="nice_tab_pane">
                            Content of Tab Pane 2
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="Tab 3" :closable="true" class="nice_tab_pane">
                            Content of Tab Pane 3
                        </a-tab-pane>
                    </a-tabs>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
import { Layout, LayoutHeader, LayoutSider, LayoutFooter, LayoutContent, Menu, MenuItem, SubMenu, Tabs, TabPane, Avatar, Dropdown } from 'ant-design-vue'
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import IconFont from './IconFont'
import { defineComponent, ref } from 'vue';

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
        UserOutlined,
        DownOutlined,
    },
    setup() {
        const onEdit = (targetKey, action) => {
            if (action === 'remove') {
                console.log('移除标签页')
            }
        };
        return {
            onEdit
        }
    },
    data() {
        return {
            collapsed: ref(false),
            selectedKeys: ref(['1']),
            activeKey: ref('1'),
        };
    },

});
</script>

<style>
.logo {
    float: left;
    width: 126px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
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
    min-height: 360px;
    max-height: calc(100vh - 186px);
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