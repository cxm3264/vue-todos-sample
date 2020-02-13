<template>
  <div>
    <div class="list-item  editingClass editing  checked">
      <label class="checkbox">
        <input type="checkbox" name="checked">
        <span class="checkbox-custom"></span>
      </label>
      <input type="text" placeholder="写点什么。。。" disabled="disabled">
      <a class="delete-item">
        <span class="icon-trash"></span>
      </a>
    </div>
    <div class="list-item  editingClass editing  checked">
      <label class="checkbox">
        <input type="checkbox" name="checked">
        <span class="checkbox-custom"></span>
      </label>
      <input type="text" placeholder="写点什么。。。">
      <a class="delete-item">
        <span class="icon-trash"></span>
      </a>
    </div>
  </div>
</template>
<script>

export default {
  
}
</script>
<style lang="less">
  @import '../common/style/list-items.less';
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>