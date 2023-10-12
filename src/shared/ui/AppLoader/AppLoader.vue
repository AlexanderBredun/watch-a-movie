<template>
    <div class="loader" :style="{ '--loader-color': color, width: `${size}px`, height: `${size}px` }"><div></div><div></div><div></div></div>
</template>

<script setup lang="ts">

interface LoaderProps {
    size?: number;
    color?: string;
   
}

withDefaults(defineProps<LoaderProps>(), {
    color: '#7f58af',
    size: 80,
});
</script>

<style scoped>
.loader {
  display: grid;
  grid-template-columns: repeat(3, 29%);
  align-items: center;
  justify-content: space-between;
  gap: 1%;
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
}
.loader div {
  background: var(--loader-color);
  animation: loader 1.2s ease-in-out infinite;
}
.loader div:nth-child(1) {
  animation-delay: -0.24s;
}
.loader div:nth-child(2) {
  animation-delay: -0.12s;
}
.loader div:nth-child(3) {
  
  animation-delay: 0;
}
@keyframes loader {
  0% {
    
    height: 100%;
  }
  50%, 100% {
    
    height: 80%;
  }
}
</style>