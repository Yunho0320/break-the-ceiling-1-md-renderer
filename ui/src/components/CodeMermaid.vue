<template>
    <div>
      <vue-mermaid-string :value="code" />
    </div>
</template>

<script>
import VueMermaidString from "vue-mermaid-string";

export default {
  name: 'CodeMermaid',
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  components: {
    VueMermaidString
  },
  data(){
    return{
      code:""
    }
  },
  mounted(){
    this.code = this.content.join("\n");
  }
};
</script>

<style scoped>

</style>
