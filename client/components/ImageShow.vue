<template>
  <div>
    <img :src="getRandomImageUrl()" alt="" srcset=""> OK
  </div>
</template>

<script>

export default {
  props: { gallery: {
    type: Object,
    default: () => {}
  } },
  methods: {
    getRandomImageUrl() {
      const urls = this.gallery.photos.map((data) => { return `${data.url.replace('/uploads', `${process.env.DEPLOY_ENV === 'GH_PAGES' ? '/li7' : ''}`)}` })
      const url = urls[Math.floor(Math.random() * urls.length)]
      return url
    }
  }
}
</script>
