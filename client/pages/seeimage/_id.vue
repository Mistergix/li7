<template>
  <image-show :gallery="gallery" />
</template>
<script>
import ImageShow from '~/components/ImageShow.vue'
export default {
  components: {
    ImageShow
  },

  async asyncData({ payload, $axios, params }) {
    if (!payload) {
      const url = `/galleries/${params.id}`
      const response = await $axios.get(url)
      payload = response.data
    }

    return { gallery: payload }
  }
}
</script>
