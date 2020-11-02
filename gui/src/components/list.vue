<template>
  <v-item-group
    style="width: 100%"
  >
    <v-container>
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
          <v-item>
            <v-hover v-slot={hover}>
              <v-card
                height="200"
                :color='hover ? "info" : ""'
                :to='`/${collection}/${item.id}`'
              >
                <v-card-title class="text-capitalize">
                  <v-row justify='space-between' class="mx-auto">
                    {{ item.name }}
                    <v-icon x-large>
                      mdi-heart-pulse
                    </v-icon>
                  </v-row>
                </v-card-title>
                <v-card-subtitle>
                  <v-chip
                    v-for="tag in item.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </v-chip>
                </v-card-subtitle>
                <v-card-text>
                  <v-row align='center'>
                    <v-alert
                      color='secondary'
                      type="info"
                      class="mx-auto my-auto"
                    >
                      I'm a dense alert with a <strong>type</strong> of info
                    </v-alert>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  name: 'List',
  props: { items: Array, collection: String }
}
</script>
