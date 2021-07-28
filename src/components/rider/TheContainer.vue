<template>
  <div id="app">
    <ThemeHeader />
    <div class="body-content" :class="{ skyBlue: $route.name == 'Sponser' }">
      <div class="row">
        <div class="col-md-3">
          <MapSidebar v-if="$route.name == 'Home'" />
          <ThemeSidebar v-else />
        </div>
        <div class="col-md-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ThemeHeader from "@/components/rider/ThemeHeader";
import ThemeSidebar from "@/components/rider/ThemeSidebar";
import MapSidebar from "@/components/rider/MapSidebar";
export default {
  components: { ThemeHeader, ThemeSidebar, MapSidebar },
};
</script>

<style>
.body-content {
  background: #f1f1f1;
  min-height: calc(100vh - 80px);
  padding: 30px;
  position: relative;
}

.skyBlue {
  background: #7cf6f9 !important;
}

.map-container {
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: calc(100vh - 140px);
  min-height: 300px;
}

.background-map {
  border: 0px;
  position: absolute;
  width: 100%;
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  left: 0;
  top: 0;
}
</style>
