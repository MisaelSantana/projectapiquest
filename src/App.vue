<template>
  <v-app id="inspire">
    <v-navigation-drawer class="navdrawer"
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>People</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item><v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-rocket-launch</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Aircrafts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      src="" class="barbackground"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Star Wars API - Quest</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height background"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Projeto quest API Star Wars - Misael Santana</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>


<style>
.barbackground {
  background-image: url(https://i.pinimg.com/originals/60/c2/17/60c2177448cbf90408ed1df7da78cf00.jpg);
  background-size: cover;
}
.background {
  background-image: url(https://i.pinimg.com/originals/a8/66/97/a866972eff1943ec3d8d96c52110d5bc.jpg);
  background-size: cover;
}
.navdrawer {
  background-image: url(https://i.pinimg.com/originals/94/bc/90/94bc9097cc143f3b83e3c7439527e0d8.jpg);
  background-size: cover;
}
</style>