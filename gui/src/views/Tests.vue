<template>
  <list
    :items="$store.getters.tests"
    collection="tests"
  />
</template>

<script>
import List from '../components/List'

export default {
  name: 'Tests',
  components: {
    List
  }
}
</script>
