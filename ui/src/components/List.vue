<template>
  <div class="text">
    <ul> <li>{{listItem}}</li></ul>
  </div>
</template>

<script>
export default {
  name: "BasicList",
  props: {
    content: Array,
  },
  data(){
    return{
      listItem:""
    }
  },
  mounted(){
    this.listItem = this.content[0].replace("-", "").trim();
  }
};
</script>

<style scoped>
.text {
  font-size: 16px;
  padding-left: 16px;
}
</style>
