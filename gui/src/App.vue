<template>
  <v-app id="inspire">
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Unified Testing Automation Platform</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-breadcrumbs
          :items="items"
          v-if="items"
          class="text-capitalize mr-8"
          large
        />
      <v-btn
        v-for="page in $store.getters.user_pages"
        icon
        :key="page.title"
        :to="`/${page.title.toLowerCase()}`"
      >
        <v-icon>{{`mdi-${page.icon}`}}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      mini-variant
      expand-on-hover
    >
      <v-list dense>
        <v-list-item
          v-for="page in $store.getters.pages"
          :key="page.title"
          link
          :to="`/${page.title.toLowerCase()}`"
        >
          <v-list-item-action>
            <v-icon>{{`mdi-${page.icon}`}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{page.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="fill-height"
        fluid
        clipped-left
      >
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  async created() {
    await this.$store.dispatch('load_tests')
    await this.$store.dispatch('load_devices')
    await this.$store.dispatch('load_tags')
    await this.$store.dispatch('load_plans')
    this.$vuetify.theme.dark = true
  },
  computed: {
    routes() {
      return this.$route.path.split('/') || []
    },
    route_name() {
      return this.$route.name || ''
    },
    items() {
      if (this.route_name.includes('Detail')) {
        return [
          {
            text: this.routes[1].toUpperCase(),
            disabled: false,
            href: `/${this.routes[1]}`,
          },
          {
            text: this.routes[2].toUpperCase(),
            disabled: true,
            href: `/${this.routes[1]}/${this.routes[2]}`,
          }
        ]
      }
      return [
        {
          text: this.routes[1].toUpperCase(),
          disabled: false,
          href: `/${this.routes[1]}`,
        },
      ]
    }
  }
}
</script>
