<template>
  <v-card class="mx-auto"
          width="97.5%"
          height="80vh"
  >
    <v-card-title style="text-transform: capitalize;">
      {{ test.name }}
    </v-card-title>
    <v-card-subtitle>
      <v-chip-group>
        <v-chip
          v-for="tag of test.tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-list
            three-line
            height="60vh"
          >
            <v-subheader>Steps</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, i) in test.steps.split('\n')"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    Step {{ i }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
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
  name: 'TestDetail',
  computed: {
    test () {
      return this.$store.getters.test_by_id(parseInt(this.$route.params.id))
    }
  }
}
</script>
