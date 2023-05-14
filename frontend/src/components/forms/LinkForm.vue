<template>
  <div class="text-center">
    <text-input v-model="url" name="url" label="Enter your link"></text-input>
    <v-btn class="mt-4" color="success" @click="generateLink"
      >Generate Link</v-btn
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "@/components/inputs/TextInput";
import { useForm } from "vee-validate";

import * as yup from "yup";

const url = ref(null);

const schema = yup.object({
  url: yup.string().required(),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    url: null,
  },
  validateOnBlur: false,
  validateOnChange: false,
});

const failValidation = ({ values, errors, results }) => {
  console.log("values => ", values);
  console.log("errors => ", errors);
  console.log("results => ", results);
  console.log("fail");
};

const generateLink = handleSubmit((values) => {
  //if validates, this code will work; else executes failValidation
  console.log("validated", values);
}, failValidation);
</script>

<style></style>
