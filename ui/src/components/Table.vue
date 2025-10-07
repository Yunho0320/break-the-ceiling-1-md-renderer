<template>
    <v-container>
      <v-data-table
          :headers="headers "
          :items="items"
          class="elevation-1"
          hide-default-footer
          density="compact"
      />
    </v-container>
</template>

<script>
// We parse the table data dynamically - it's a bit tricy to parse on Java side because the content type is List<String> rather than map
export default {
  name: "DataTable",
  props: {
    content: Array,
  },
  computed: {
    headers() {
      if (!this.content || this.content.length === 0) return [];

      const headerRow = this.content[0]
          .split("|")
          .slice(1, -1)
          .map(cell => cell.trim());

      return headerRow.map(h => ({
        title: h,
        key: h.toLowerCase().replace(/\s+/g, "_").replace(/[^\w]/g, "")
      }));
    },
    items() {
      if (this.content.length < 3) return [];

      const headerKeys = this.headers.map(h => h.key);

      return this.content.slice(2).map(row => {
        const cells = row
            .split("|")
            .slice(1, -1)
            .map(cell => cell.trim());

        const item = {};
        headerKeys.forEach((key, i) => {
          item[key] = cells[i] || "";
        });
        return item;
      });
    }
  }
};
</script>

<style scoped>
::v-deep(.v-data-table thead th) {
  font-weight: bold !important;
}
</style>
