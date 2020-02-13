<template>
  <section class="container">
    <section class="menu">
      <menus></menus>
    </section>
    <div class="content-overlay"></div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
import Menus from './menus'
import Todo from './todo'
export default {
  components: {
    Menus,
    Todo
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>