<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-title class="text-center text-h4 mt-3 font-weight-bold">
            Shorter URL
          </v-card-title>
          <v-card-subtitle class="text-center text-h6 py-3">
            Generate a short link for your long link.
          </v-card-subtitle>
          <v-card-text>
            <link-form @generate-link="updateNewLink" />
            <div v-if="link" class="text-center mt-4">
              your new link is <a :href="link" target="_blank">{{ link }}</a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import LinkForm from "@/components/forms/LinkForm.vue";

const link = ref(null);

const updateNewLink = (newLink) => {
  link.value = newLink;
};
</script>
