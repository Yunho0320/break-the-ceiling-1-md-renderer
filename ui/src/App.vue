<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="#36558f" dark>
      <v-tabs align-tabs="start">
        <v-tab to="/home" replace>Home</v-tab>
        <v-tab to="/tutorials" replace>Tutorials</v-tab>
        <v-tab to="/about" replace>About</v-tab>
      </v-tabs>
    </v-app-bar>


    <v-navigation-drawer app permanent width="250" color="#f0f4fa">
      <v-list dense>
        <v-list-item>
          <v-list-item-title class="text-h6">Navigation</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
