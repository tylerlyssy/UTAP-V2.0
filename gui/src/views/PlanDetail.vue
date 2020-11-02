<template>
  <v-card class="mx-auto"
          width="97.5%"
          height="80vh"
  >
    <v-card-title style="text-transform: capitalize;">
      {{ plan.name }}
    </v-card-title>
    <v-card-subtitle>
      <v-chip-group>
        <v-chip
          v-for="tag of plan.tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>
    <v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'PlanDetail',
  computed: {
    plan () {
      return this.$store.getters.plan_by_id(parseInt(this.$route.params.id))
    }
  }
}
</script>
