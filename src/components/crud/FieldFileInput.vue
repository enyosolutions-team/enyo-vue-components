<template>
  <div class="input-group field-file-input">
    <base64-upload
      :disabled="schema.disabled"
      :readonly="schema.readonly"
      :type="type"
      :placeholder="placeholder"
      :inputClass="inputClass"
      :key="refresh"
      :image-src="value"
      @change="onChangeImage"
    />
  </div>
</template>
<script>
import VueFormGenerator from "vue-form-generator";
// import { defaults } from "lodash";
// import moment from "moment";

// You need a specific loader for CSS files
import Base64Upload from "./Base64Upload";

export default {
  components: { Base64Upload },
  mixins: [VueFormGenerator.abstractField],
  data() {
    return {
      refresh: new Date(),
      type: this.schema && this.schema.fieldOptions && this.schema.fieldOptions.inputType,
      placeholder: this.schema && this.schema.fieldOptions && this.schema.fieldOptions.placeholder,
      inputClass: this.schema && this.schema.fieldOptions && this.schema.fieldOptions.inputClass,
    };
  },
  computed: {},
  watch: {
    value(change, old) {
      if (change !== old) {
        this.refresh = Date.now();
      }
    }
  },
  mounted() {
    this.oldValue = this.value;
  },

  beforeDestroy() {},
  methods: {
    onChangeImage(file) {
      // console.log('Field File input', Object.keys(file));
      this.value = file.base64;
    }
  }
};
</script>
<style lang="scss">
.field-file-input {
  cursor: pointer;

  > * {
    cursor: pointer;
    width: 100%;
    height: auto;
  }
}
</style>
