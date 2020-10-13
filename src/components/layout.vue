<template>
  <a-layout id="components-layout-demo-top"
            class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu theme="dark"
              mode="horizontal"
              v-model:selectedKeys="selectedKeys"
              :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">

          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">时间计划</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        {{activeText}}
        <div class="time">storeTime:{{storeTime}}--{{testTime}}</div>
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { reactive, ref, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  data() {
    return {
      selectedKeys: ['2'],
    }
  },
  created() {
    console.log('Created')
  },
  // composition APi 入口,setup中无this
  setup(props, context) {
    console.log('setup:', props, context)
    // 路由
    const route = useRoute()
    // store
    const store = useStore()
    // 响应式
    const state = reactive({
      activeText: 'hello v3',
    })
    const storeTime = ref(store.getters.testTime)
    console.log('storeTime:', storeTime)
    setTimeout(() => {
      state.activeText = 'hello v3 in Cli4.5.x+'
      store.commit('changeTime', 12)
      console.log('storeTime:', storeTime)
    }, 3000)
    // watch
    watch(
      () => route.path,
      (newValue) => {
        console.log('path change:', newValue)
        state.activeText += newValue
      }
    )

    return {
      ...toRefs(state), // 保证返回数据是响应式的，还有结构功能
      ...toRefs(store.state),
      storeTime,
    }
  },
}
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
