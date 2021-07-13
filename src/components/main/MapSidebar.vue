<template >
  <div class="map-sidebar">
    <div class="bg-white mapLinks self-scroll">
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
            @click="open"
            >Profile fiscal</b-button
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SelectScheduleModal from "../SelectScheduleModal.vue";
export default {
  components: { SelectScheduleModal },
  data() {
    return {
      destinationLocation: [1, 1],
      selectedRideType: "Imidiate Pickup",
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
  width: 500px;
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
</style>