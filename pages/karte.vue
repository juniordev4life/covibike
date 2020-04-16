<template lang="pug">
  .l-map
    Map
</template>

<script>
export default {
  name: 'MapPage',
  layout: 'map',
  components: {
    Map: () => import('@/components/Map/Map.vue')
  }
}
</script>
