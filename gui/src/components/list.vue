<template>
  <v-row
    style="height: 90vh"
    class="overflow-y-auto"
  >
    <v-col
      v-for="item in items"
      :key="item.name"
      cols="4"
      md="4"
    >
      <v-item v-slot:default="{ active }">
        <v-card
          :color="active ? 'primary' : ''"
          class="d-flex align-center"
          height="200"
          :to='`/tests/${item.id}`'
        >
          <v-card-title style="text-transform: capitalize;">
          {{ item.name }}
          </v-card-title>
          <v-card-subtitle>
          <v-chip
            v-for="tag in item.tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
          </v-card-subtitle>
        </v-card>
      </v-item>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'List',
  data: () => {
    return {
    }
  },
  mounted () {
    console.log(this.$route)
  },
  watch: {
    $router () {
      console.log(this.$router)
    }
  },
  props: {
    items: Array
  }
}
</script>
