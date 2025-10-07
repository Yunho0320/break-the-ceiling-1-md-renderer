<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs v-model="tab" align-tabs="title">
        <v-tab value="home">Home</v-tab>
        <v-tab value="tutorials">Tutorials</v-tab>
        <v-tab value="about">About</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="home">
            <p>Welcome to the homepage!</p>
          </v-tabs-window-item>
          <v-tabs-window-item value="tutorials">
            <p>Tutorials content goes here.</p>
          </v-tabs-window-item>
          <v-tabs-window-item value="about">
            <p>About page content.</p>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    tab: "home",
  }),
};
</script>
