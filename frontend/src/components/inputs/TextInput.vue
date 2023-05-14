<template>
  <div class="d-flex align-center">
    <v-text-field
      v-model="currentValue"
      v-bind="field"
      :name="props.name"
      :error-messages="errorMessage"
      :label="props.label"
      :hide-details="!errorMessage?.length"
      solo
      variant="outlined"
    ></v-text-field>
  </div>
</template>

<script setup>
import { ref, watch, toRef } from "vue";
import { useField, defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";
defineRule("required", required);
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  rules: {
    type: [String, Function, Object],
    default: null,
  },
});

const emits = defineEmits(["update:modelValue"]);

const currentValue = ref(props.modelValue);

watch(props.modelValue, (val) => {
  currentValue = val;
});

watch(currentValue, (val) => {
  emits("update:modelValue", val);
});

const { value, errorMessage } = useField(
  toRef(() => props.name),
  props.rules,
  {
    initialValue: props.modelValue,
  }
);
</script>

<style></style>
