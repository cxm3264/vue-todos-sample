<template>
  <section class="menu">
    <div class="list-todos">
      <a class="list-todo list activeListClass active">
        <span class="count-list">2</span>
        Brian
      </a>
      <a class="list-todo list activeListClass">
        <span class="icon-lock"></span>
        <span class="count-list">2</span>
        Robert
      </a>
      <a class="list-todo list activeListClass">
        <span class="count-list">3</span>
        Jennifer
      </a>
      <a class="list-todo list activeListClass">
        <span class="icon-lock"></span>
        <span class="count-list">1</span>
        James
      </a>
      <a class="list-todo list activeListClass">
        <span class="count-list">2</span>
        Karen
      </a>
      <a class=" link-list-new">
        <span class="icon-plus"></span>
        新增
      </a>
    </div>
  </section>
</template>
<script>

export default {
  
}
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>