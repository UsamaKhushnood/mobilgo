<template>
  <div id="app">
    <ThemeHeader />
    <div class="body-content" :class="{ 'skyBlue' : $route.name == 'Sponser'}">
      <div class="row">
        <div class="col-md-3">
          <ThemeSidebar />
        </div>
        <div class="col-md-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ThemeHeader from "@/components/main/ThemeHeader";
import ThemeSidebar from "@/components/main/ThemeSidebar";
export default {
  components: { ThemeHeader, ThemeSidebar },
};
</script>

<style>
.body-content {
  background: #F1F1F1;
  min-height: calc(100vh - 80px);
  padding: 30px;
}

.skyBlue {
  background: #7cf6f9 !important;
}
</style>
