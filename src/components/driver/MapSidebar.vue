<template >
  <div class="map-sidebar">
    <div class="bg-white mapLinks self-scroll">
      <div class="position-relative" style="height: calc(100vh - 140px)">
        <div
          class="
            widget-header
            bg-green
            d-flex
            justify-content-between
            c-white
            align-items-center
            px-4
          "
        >
          <h4 class="text-center">Ride Booking</h4>
          <b-form-select
            class="select-ride-type"
            v-model="selectedRideType"
            :options="['Imidiate Pickup', 'Schedule Pickup']"
            @change="onOptionChanged"
          >
            ></b-form-select
          >
        </div>
        <SelectScheduleModal />
        <div class="p-4 bg-white">
          <h6>Booking Details</h6>
          <div class="addresses-cont mt-4">
            <div class="grouped-input pickup-location-address">
              <b-form-input
                id="pickup-address"
                class="inputField"
                placeholder="Pickup Address"
              ></b-form-input>
            </div>
            <div
              class="grouped-input destination-location-address"
              v-for="(x, xIndex) in destinationLocation"
              :key="xIndex"
            >
              <b-form-input
                id="destination-address"
                class="inputField"
                placeholder="Destination Address"
              ></b-form-input>
              <b-button
                variant="light"
                class="border-left add-another-destination-btn"
                @click="addAnotherDestination"
                v-if="xIndex == destinationLocation.length - 1"
              >
                <i class="fa fa-plus"></i>
              </b-button>
              <b-button
                variant="light"
                class="border-left add-another-destination-btn"
                v-else
                @click="deleteDestination(xindex)"
              >
                <i class="fa fa-times-circle"></i>
              </b-button>
            </div>
          </div>
          <div>
            <b-button
              variant="outline-dark"
              size="md"
              squared
              block
              class="mt-5"
              @click="bottomSheetOpen = true"
              >Profile fiscal</b-button
            >
          </div>
        </div>
        <div
          class="bottom-sheet-backdrop"
          :class="[bottomSheetOpen ? 'opened' : 'closed']"
          @click="bottomSheetOpen = false"
        ></div>
        <div
          class="bottom-sheet"
          :class="[bottomSheetOpen ? 'opened' : 'closed']"
        >
          <div class="bottom-sheet-content">
            <header
              class="
                bottom-sheet-header
                d-flex
                justify-content-between
                align-items-center
                p-4
              "
            >
              <h5 class="text-dark">Choose your cab</h5>
              <b-button
                class="close text-light"
                size="sm"
                variant="light"
                @click="bottomSheetOpen = false"
              >
                <i class="fa fa-times"></i>
              </b-button>
            </header>
            <main class="bottom-sheet-body">
              <ChooseCab />
            </main>
            <footer class="px-4 chooseCabFooter">
              <div
                class="d-flex justify-content-between align-items-center mt-2 clickable-item"
                @click="bottomSheetOpen2 = true"
              >
                <div class="d-flex align-items-lg-stretch">
                  <i class="fa fa-money-bill"></i>
                  <h5 class="ms-3">Cash Payment</h5>
                </div>
                <div >
                  <i class="fa fa-chevron-right"></i>
                </div>
              </div>
              <b-button block squared variant="dark" class="mt-4" @click="bottomSheetOpen = false"
                >Confrim Trip</b-button
              >
            </footer>
          </div>
        </div>
        <div
          class="bottom-sheet-backdrop"
          :class="[bottomSheetOpen2 ? 'opened' : 'closed']"
          @click="bottomSheetOpen2 = false"
        ></div>
        <div
          class="bottom-sheet"
          :class="[bottomSheetOpen2 ? 'opened' : 'closed']"
        >
          <div class="bottom-sheet-content">
            <header
              class="
                bottom-sheet-header
                d-flex
                justify-content-between
                align-items-center
                p-4
              "
            >
              <h5 class="text-dark">Payment Method</h5>
              <b-button
                class="close text-light"
                size="sm"
                variant="light"
                @click="bottomSheetOpen2 = false"
              >
                <i class="fa fa-times"></i>
              </b-button>
            </header>
            <main class="bottom-sheet-body">
              <PaymentMethod />
            </main>
            <footer class="px-4 chooseCabFooter">

              <b-button block squared variant="outline-dark"  class="mt-4" v-b-modal.addNewCard
                >Add Card</b-button
              >
              <b-button block squared variant="dark" class="mt-2" @click="bottomSheetOpen2 = false"
                >Confrim Trip</b-button
              >
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectScheduleModal from "../SelectScheduleModal.vue";
import ChooseCab from "../ChooseCab.vue";
import PaymentMethod from "../PaymentMethod.vue";
export default {
  components: { SelectScheduleModal, ChooseCab, PaymentMethod },
  data() {
    return {
      destinationLocation: [1, 1],
      selectedRideType: "Imidiate Pickup",
      bottomSheetOpen: false,
      bottomSheetOpen2: false,
    };
  },
  methods: {
    addAnotherDestination() {
      this.destinationLocation.push(1);
    },
    deleteDestination(index) {
      this.destinationLocation.splice(index, 1);
    },
    onOptionChanged() {
      if (this.selectedRideType == "Schedule Pickup") {
        this.$bvModal.show("selectScheduleModal");
      }
    },
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
  },
};
</script>

<style>
.widget-header {
  padding: 15px 0;
}

.mapLinks {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 999;
  width: 450px;
}

.grouped-input {
  position: relative;
}

.grouped-input .inputField {
  border: none;
  border-radius: 0;
  background-color: #f1f1f1;
  margin-bottom: 10px;
  padding: 10px 15px;
  margin-left: auto;
  width: 90%;
}

.add-another-destination-btn {
  display: flex !important;
  position: absolute;
  top: 8px;
  right: 0;
  height: 28px;
  width: 50px;
  border: 0 !important;
  border-left: 1px solid #c1c1c1 !important;
  border-radius: 0 !important;
  background: none !important;
  justify-content: center;
  align-items: center;
}

.add-another-destination-btn:focus {
  box-shadow: none !important;
}

.grouped-input.pickup-location-address:before {
  content: "\f111";
  margin-right: 15px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 14px;
  position: absolute;
  color: #000;
  z-index: 99999;
  display: flex;
  left: 8px;
  top: 50%;
  transform: translate(50%, -50%);
}

.grouped-input.destination-location-address:before {
  content: "\f45c";
  margin-right: 15px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 14px;
  position: absolute;
  color: red;
  z-index: 99999;
  display: flex;
  left: 8px;
  top: 50%;
  transform: translate(50%, -50%);
}

.grouped-input.pickup-location-address:after,
.grouped-input.destination-location-address:after {
  content: ". . . .";
  position: absolute;
  left: 13px;
  transform: rotate(90deg);
  top: 36px;
}

.grouped-input.destination-location-address:last-of-type:after {
  content: none !important;
}

.select-ride-type {
  border: none;
  background: no-repeat;
  color: #fff;
  font-size: 20px;
}

.select-ride-type option {
  color: #000 !important;
}

.select-ride-type:focus-visible {
  border: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}

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

.bottom-sheet-content {
  height: 100%;
  position: relative;
}

.chooseCabFooter {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  box-shadow: -2px -4px 20px 0px #0000003b;
  padding: 20px;
}

main.bottom-sheet-body {
    overflow: auto;
    height: calc(100vh - 470px);
}

.clickable-item {
  cursor: pointer;
  padding: 10px 10px;
}

.clickable-item:hover {
  background-color: #f1f1f1;
}


</style>