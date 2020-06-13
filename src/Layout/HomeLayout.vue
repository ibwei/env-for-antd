<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img class="logo-img" src="../assets/logo.png" />
      </div>
      <sidebar :MenuList="SidebarList" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <top-menu :collapsed="collapsed" @change-fold="() => (this.collapsed = !this.collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '400px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Sidebar from '@/views/components/Sidebar'
import TopMenu from '@/views/components/TopMenu'
import { SidebarList } from '../utils/config'
export default {
  data() {
    return {
      collapsed: false,
      SidebarList
    }
  },
  components: {
    Sidebar,
    TopMenu
  }
}
</script>
<style>
#components-layout-demo-custom-trigger {
  min-height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 64px;
  background: #06274d;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.logo-img {
  height: 56px;
  width: auto;
}
</style>
