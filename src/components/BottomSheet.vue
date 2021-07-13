<template >
  <div>
    <div
      class="bottom-sheet-backdrop"
      :class="[bottonSheetOpen ? 'opened' : 'closed']"
    ></div>
    <div
      class="bottom-sheet"
      :class="[bottonSheetOpen ? 'opened' : 'closed']"
    >
      <header
        class="
          bottom-sheet-header
          d-flex
          justify-content-between
          align-items-center
          p-4
        "
      >
        <h5 class="text-dark">{{ headerTitle }}</h5>
        <b-button
          class="close text-light"
          size="sm"
          variant="light"
          @click="bottonSheetOpen = false"
        >
          <i class="fa fa-times"></i>
        </b-button>
      </header>
      <main class="bottom-sheet-body">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  props: ["headerTitle", 'openBottonSheet'],
  data() {
    return {
      bottonSheetOpen: this.openBottonSheet,
    };
  },
  methods: {},
};
</script>
<style >
/* bottom sheet  */
.bottom-sheet-backdrop.opened {
  height: 100%;
  background: black;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999993;
  opacity: 0.5;
  overflow: hidden;
}

.bottom-sheet {
  overflow: hidden;
  height: 0;
  transition: 0s !important;
}

.bottom-sheet.opened {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  height: 80%;
  width: 100%;
  z-index: 9999999;
  transition: 0.5s all !important;
}
</style>