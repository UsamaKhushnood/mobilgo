<template>
  <div>
    <b-modal
      id="addNewCard"
      ref="addNewCard"
      centered
      title="Add Card"
      header-bg-variant="success"
      header-text-variant="light"
      hide-footer
    >
      <b-form class="container row pb-4 add-new-card-form">
        <div class="col-md-12 mt-4">
          <b-form-input
            id="input-live"
            v-model="cardDetails.number"
            type="number"
            trim
          ></b-form-input>
        </div>

        <div class="col-md-12 mt-4">
          <label class="mb-2" for="input-live"><h6>Holder Name</h6> </label>
          <b-form-input
            :state="nameState"
            trim
            v-model="cardDetails.name"
          ></b-form-input>
        </div>
        <div class="col-md-6 mt-4">
          <label class="mb-2" for="input-live"><h6>Exp</h6> </label>
          <b-form-input
            trim
            type="number"
            v-model="cardDetails.exp"
          ></b-form-input>
        </div>
        <div class="col-md-6 mt-4">
          <label class="mb-2" for="input-live"><h6>CVC</h6> </label>
          <b-form-input
            trim
            type="number"
            v-model="cardDetails.cvc"
            @keyup.enter="EmitCardDetails()"
          >
          </b-form-input>
        </div>
        <div class="col-md-12 mt-5">
          <b-button variant="dark" squared block @click="EmitCardDetails()"
            >Add</b-button
          >
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    nameState() {
      return this.cardDetails.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      name: "",
      cardDetails: {
        name: "",
        number: null,
        exp: null,
        cvc: null,
      },
    };
  },
  methods: {
    EmitCardDetails() {
      this.$emit("add-new-card", this.cardDetails);
      (this.cardDetails = {
        name: "",
        number: null,
        exp: null,
        cvc: null,
      }),
        this.$refs["addNewCard"].hide();
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
</style>