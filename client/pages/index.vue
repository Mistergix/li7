<template>
  <b-container fluid>
    <b-row>
      <b-col v-for="gallery in galleries" :key="gallery._id" lg="4" md="6">
        <b-button href="#" variant="dark" block>
          {{ gallery.title }}
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const galleries = await $axios.$get('/galleries')
    return { galleries: galleries }
  }
}
</script>
