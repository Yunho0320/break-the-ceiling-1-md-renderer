<template>
  <div class="heading">
    {{ content[0] }}
  </div>
</template>

<script>
export default {
  name: "HeadingThree",
  props: {
    content: Array,
  },
};
</script>

<style scoped>
.heading {
  font-size: 20px;
  color: #36558F;
  margin-top: 20px;
  margin-bottom: 8px;
}
</style>
