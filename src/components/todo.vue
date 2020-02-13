<template>
  <div class="page lists-show">
    <nav>
      <div class="form list-edit-form" style="display: none;">
        <input type="text">
        <div class="nav-group right">
          <a class="nav-item">
            <span class="icon-close"></span>
          </a>
        </div>
      </div>
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered"></span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">Brian</span>
        <span class="count-list">2</span>
      </h1>
      <div class="nav-group right">
        <div class="options-web">
          <a class=" nav-item">
            <span class="icon-unlock"></span>
          </a>
          <a class="nav-item">
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>
      <div class=" form todo-new input-symbol">
        <input type="text" placeholder="请输入">
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <item></item>
    </div>
  </div>
</template>
<script>
import item from './item'
export default {
  components: {
    item
  }
}
</script>
<style lang = "less">
  @import '../common/style/nav.less';
  @import '../common/style/form.less';
  @import '../common/style/todo.less';
</style>