<template>
  <div>
    <b-modal
      id="selectScheduleModal"
      ref="selectScheduleModal"
      centered
      title="Aide"
      header-bg-variant="success"
      header-text-variant="light"
      hide-footer
    >
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->
        <div>
          <h3>Pick-up Time</h3>
          <p>Schedule Ride</p>
        </div>
        <b-button
          size="sm"
          variant="outline-light"
          class="modal-close-btn"
          pill
          @click="close()"
        >
          <i class="fa fa-times"></i>
        </b-button>
      </template>
      <b-form class="container row pb-4 add-new-card-form">
        <div class="col-md-12 mt-2 text-center">
          <b-time
            class="border rounded p-2"
            locale="en"
            v-model="timeValue"
          ></b-time>
        </div>

        <div class="col-md-12 mt-4">
          <b-button variant="dark" squared block @click="closeModal()"
            >Set Pick-Up Time
          </b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeValue: "",
    };
  },
  methods: {
    closeModal() {
      this.$refs["selectScheduleModal"].hide();
    },
  },
};
</script>

<style >
.add-new-card-form input {
  border: none;
  background-color: #f1f1f1;
  border-radius: 0;
}
.add-new-card-form input:focus {
  box-shadow: none !important ;
  background-color: #f1f1f1;
}

textarea#textarea-message {
  background: #f1f1f1;
  border: none;
  border-radius: 0;
}

.modal-close-btn {
  width: 30px;
  height: 30px;
}
</style>