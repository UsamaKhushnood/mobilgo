<template>
  <div>
      <div class="map-container" v-if="$route.name == 'Home'">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789870.874989064!2d1.7009353928688749!3d46.93254003189119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1625370798088!5m2!1sen!2s"
          width="100%"
          height="100%"
          class="background-map"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>