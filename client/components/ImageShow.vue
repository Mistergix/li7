<template>
  <div>
    {{ gallery }}
  </div>
</template>

<script>
export default {
  props: { gallery: {
    type: Object,
    default: () => {}
  } }
}
</script>
