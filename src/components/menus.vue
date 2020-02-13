<template>
  <section class="menu">
    <div class="list-todos">
      <a class="list-todo list" 
         v-for="item in todoList"
         :key="item.id">
        <span class="icon-lock" v-if="item.isLock"></span>
        <span class="count-list" v-if="item.count">{{ item.count }}</span>
        {{ item.title }}
      </a>
      <a class=" link-list-new">
        <span class="icon-plus"></span>
        新增
      </a>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.dispatch('getTodo');
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['todoList'])
  }
}
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>