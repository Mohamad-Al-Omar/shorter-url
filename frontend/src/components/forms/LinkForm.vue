<template>
  <div class="text-center">
    <text-input v-model="url" name="url" label="Enter your link"></text-input>
    <v-btn class="mt-4" color="success" @click="generateLink">
      Generate Link
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "@/components/inputs/TextInput";
import { useForm } from "vee-validate";
import useFetch from "@/mixins/use-fetch";
import useRegex from "@/mixins/use-regex.js";
import * as yup from "yup";

const emits = defineEmits(["generateLink"]);

const { createShorterLinkAPI } = useFetch();

const url = ref(null);

const { linkRegex } = useRegex();

const schema = yup.object({
  url: yup.string().matches(linkRegex, "URL is not valid").required(),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    url: null,
  },
  validateOnBlur: false,
  validateOnChange: false,
});

// const failValidation = ({ values, errors, results }) => {
const failValidation = () => {
  console.log("fail");
};

const generateLink = handleSubmit(async (values) => {
  console.log("validated", values);
  const response = await createShorterLinkAPI({ link: url });
  if (response.success) {
    emits("generateLink", response.data.new_url);
  }
  console.log("response => ", response);
}, failValidation);
</script>

<style></style>
