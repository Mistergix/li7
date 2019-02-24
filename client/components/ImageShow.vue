<template>
  <div>
    <img id="image" src="#" alt="" srcset="">
  </div>
</template>

<script>
export default {
  props: { gallery: {
    type: Object,
    default: () => {}
  } },

  data: function () {
    return {
      urls: this.gallery.photos.map((data) => { return `${data.url.replace('/uploads', `${process.env.DEPLOY_ENV === 'GH_PAGES' ? '/li7' : ''}`)}` })
    }
  },
  mounted() {
    const image = document.getElementById('image')
    const urls = this.urls
    console.log(urls)
    const url = urls[Math.floor(Math.random() * urls.length)]
    image.src = url
  }
}
</script>
