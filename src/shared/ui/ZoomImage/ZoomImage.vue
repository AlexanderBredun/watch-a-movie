<template>
   <div class="zoom-img">
       <div class="zoom-content">
        <slot></slot>
       </div>
    </div>
</template>

<script lang="ts" setup>
   
</script>

<style lang="scss" scoped>
.zoom-img {
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform-origin: center;
  
  .zoom-content {
    transition: 0.3s;
  }

  &:hover {
    .zoom-content {
      transform: scale(1.06);
    }
  }
}

</style>