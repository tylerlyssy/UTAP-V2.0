<template>
  <v-row align="center">
    <v-col>
      <v-switch
        input-value="true"
        v-model="$vuetify.theme.dark"
        label="Dark Mode"
      />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'UserSettings'
}
</script>
