<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6">
        <v-card>
          <v-card-title class="text-center text-h4 mt-3 font-weight-bold">
            Shorter URL
          </v-card-title>
          <v-card-subtitle class="text-center text-h6 py-3">
            Generate a short link for your long link.
          </v-card-subtitle>
          <v-card-text>
            <link-form />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-container
    class="fill-height bg--red red--bg"
    style="background-color: green"
  >
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row>
        <v-col cols="12" md="6">
          <text-input v-model="name" name="test" label="test" />
        </v-col>
        <v-col cols="12" md="6">
          <text-input v-model="name2" name="test2" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> </v-col>
      </v-row>
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14"></div>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="mdi-view-dashboard" size="large" start />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon icon="mdi-speedometer" size="large" start />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="mdi-account-group" size="large" start />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container> -->
</template>

<script setup>
import LinkForm from "./forms/LinkForm.vue";
</script>
