<template>
  <v-card class="mx-auto"
          width="97.5%"
          height="80vh"
  >
    <v-card-title style="text-transform: capitalize;">
      {{ device.name }}
    </v-card-title>
    <v-card-subtitle>
      <v-chip-group>
        <v-chip
          v-for="tag of device.tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
        </v-col>
        <v-col cols="6">
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'DeviceDetail',
  computed: {
    device () {
      return this.$store.getters.device_by_id(parseInt(this.$route.params.id))
    }
  }
}
</script>
