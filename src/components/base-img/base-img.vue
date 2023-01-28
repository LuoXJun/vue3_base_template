<!-- @format -->

<template>
  <div>
    <img :src="getImageUrl()" alt="" style="width: 100px; height: 100px" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    default: ''
  }
});
/**测试静态资源引用*/
function getImageUrl() {
  return new URL(`../../assets/${props.imgUrl}`, import.meta.url).href;
}
</script>

<style scoped></style>
