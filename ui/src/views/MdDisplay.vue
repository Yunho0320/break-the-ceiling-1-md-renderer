<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div v-for="(block, index) in markdownData" :key="index">
          <component :is="getComponent(block)" :content="block.content" v-bind="getExtraProps(block)" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import { parsedData } from "@/api/data_provider";
import HeadingOne from "@/components/Heading1.vue";
import HeadingTwo from "@/components/Heading2.vue";
import HeadingThree from "@/components/Heading3.vue";
import BasicText from "@/components/Text.vue";
import BasicList from "@/components/List.vue";
import DataTable from "@/components/Table.vue";
import CodeAll from "@/components/CodeAll.vue";
import CodeMermaid from "@/components/CodeMermaid.vue";

export default {
  name: "MdDisplay",
  props: {
    filename: {
      type: String,
      required: true
    }
  },
  components: {
   HeadingOne, HeadingTwo, HeadingThree, BasicText, DataTable, BasicList, CodeAll, CodeMermaid
  },
  data: () => ({
    markdownData: [],
  }),
  methods: {
    async getData() {
      try {
        console.log(this.filename);
        this.markdownData = await parsedData(this.filename);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    },
    getComponent(block) {
      switch (block.type) {
        case "HEADING1":
          return "HeadingOne";
        case "HEADING2":
          return "HeadingTwo";
        case "HEADING3":
          return "HeadingThree";
        case "TEXT":
          return "BasicText";
        case "LIST":
          return "BasicList";
        case "TABLE":
          return "DataTable";
        case "CODE_JAVA":
        case "CODE_JS":
        case "CODE_CSS":
        case "CODE_JSON":
        case "CODE_XML":
        case "CODE_YAML":
          return "CodeAll";
        case "CODE_MERMAID":
          return "CodeMermaid";
        default:
          return "BasicText";
      }
    },
    getExtraProps(block) {
      if (block.type.startsWith("CODE_")) {
        const lang = block.type.split("_")[1].toLowerCase();
        return { language: lang };
      }
      return {};
    }
  },
  mounted() {
    this.getData();
  },
};
</script>

