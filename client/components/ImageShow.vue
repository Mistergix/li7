<template>
  <div class="img-wrapper">
    <b-img id="image" src="#" alt="" srcset="" fluid />
    <b-button id="back-btn" href="/li7">
      Retour
    </b-button>
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
      urls: this.gallery.photos.map((data) => { return `${data.url.replace('/uploads', '/li7')}` })
    }
  },
  mounted() {
    const image = document.getElementById('image')
    const urls = this.urls
    const url = urls[Math.floor(Math.random() * urls.length)]
    image.src = url
  }
}
</script>

<style>
.img-wrapper
{
  height: 100vh;
  width: 100vw;
}

#back-btn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: white; /* Set a background color */
  color: black; /* Text color */
  border: 1px solid black;
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

#back-btn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>
