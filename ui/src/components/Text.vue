<template>
  <div class="text">
    {{ content[0] }}
  </div>
</template>

<script>
export default {
  name: "BasicText",
  props: {
    content: Array,
  },
};
</script>

<style scoped>
.text {
  font-size: 16px;
}
</style>
