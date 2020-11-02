<template>
  <list
    :items="$store.getters.devices"
    collection="devices"
  />
</template>

<script>
import List from '../components/List'

export default {
  name: 'Devices',
  components: {
    List,
  }
}
</script>
