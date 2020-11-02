<template>
  <list
    :items="$store.getters.plans"
    collection="plans"
  />
</template>

<script>
import List from '../components/List'

export default {
  name: 'Plans',
  components: {
    List,
  }
}
</script>
