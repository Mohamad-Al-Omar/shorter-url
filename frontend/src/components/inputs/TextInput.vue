<template>
  <div class="d-flex align-center">
    <label :for="name" class="me-5">{{ label }}</label>
    <v-text-field
      v-model="currentValue"
      v-bind="field"
      :name="props.name"
      :error-messages="errorMessage"
      :hide-details="!errorMessage?.length"
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
  "required",
  {
    initialValue: props.modelValue,
  }
);
</script>

<style></style>
