<template>
  <div class="heading">
    {{ content[0] }}
  </div>
</template>

<script>
export default {
  name: "HeadingOne",
  props: {
    content: Array,
  },
};
</script>

<style scoped>
.heading {
  font-size: 30px;
  font-weight: bold;
  color: #36558F;
  margin-bottom: 8px;
}
</style>
