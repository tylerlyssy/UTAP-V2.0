<template>
  <v-item-group
    style="width: 100%"
  >
    <v-container>
      <list :items="$store.getters.tests"/>
    </v-container>
  </v-item-group>
</template>

<script>
import List from '../components/list'

export default {
  name: 'Tests',
  components: {
    List
  }
}
</script>
