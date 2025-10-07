<template>
  <div class="code-wrapper">
    <div class="code-toolbar">
      <span class="lang-label">{{ language.toUpperCase() }}</span>
      <v-icon
          class="copy-button"
          size="20"
          @click="copyCode"
      >
        {{ copied ? 'mdi-clipboard-check' :'mdi-clipboard-outline' }}
      </v-icon>
    </div>
    <highlightjs :language="language" :code="code" />
  </div>

</template>

<script>
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/github.css';

export default {
  name: "CodeAll",
  components: {
    highlightjs: hljsVuePlugin.component
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copied: false
    };
  },
  computed: {
    code() {
      return this.content.join("\n");
    }
  },
  methods: {
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.code);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    }
  }

};
</script>

<style scoped>
/* I tried putting the code(highlightjs component) and copy button in separate cols using vuetify but realised that if I do it, they have the different height
  so styling becomes quite tricky. Hence, decided to put it inside highlightjs*/

/* highlightjs has several internal html components and the one defines styling is <code>, hence had to navigate inside using v-deep and change it */
.code-wrapper::v-deep(code) {
  border-left: 3px solid #36558f;
  margin: 0;
  padding-top:0;
  padding-bottom:0;
  background-color:#FAFAFA;
}

/* Positioning */
.code-wrapper{
  position: relative;
}

.code-toolbar {
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
}

.lang-label {
  font-weight: bold;
  color: #36558f;
  border-radius: 4px;
}

.copy-button {
  color:  #36558f;
  cursor: pointer;
}
</style>
