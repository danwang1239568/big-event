<script setup>
  import {
    RouterLink,
    RouterView,
    useRoute,
    useRouter
  } from 'vue-router';
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

  const route = useRoute()
  const router = useRouter()

</script>

<template>
  <div class="box">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>

  </div>
</template>

<style scoped lang="scss">
</style>
