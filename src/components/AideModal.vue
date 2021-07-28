<template>
  <div>
    <b-modal
      id="aideModal"
      ref="aideModal"
      centered
      title="Aide"
      header-bg-variant="success"
      header-text-variant="light"
      hide-footer
    >
      <b-form class="container row pb-4 add-new-card-form">
        <div class="col-md-12 mt-4">
          <b-form-textarea
            id="textarea-message"
            placeholder="Votre message"
            rows="8"
          ></b-form-textarea>
        </div>

        <div class="col-md-12 mt-4">
          <b-button variant="dark" squared block @click="closeModal()"
            >Envoyer ma demande</b-button
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
    }
  },
  methods: {
    closeModal() {
      this.$refs["aideModal"].hide();
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
</style>