<template>
  <div>
    <div class="row">
      <div
        class="col-md-6 p-5 d-flex align-items-center justify-content-center"
      >
        <img
          src="@/assets/images/vector0.png"
          alt="can't load image"
          class="vector0"
        />
      </div>
      <div class="col-md-6 p-5">
        <div class="text-block mt-5">
          <h2>
            Envoyez votre code promotionnel et bénéficiez d’une réduction sur
            vos courses.
          </h2>
          <h6 class="mt-4">
            A chaque fois qu’un passager s’inscrit avec votre code d’invitation,
            il obtient une réduction sur sa prochaine course (le montant de la
            réduction dépend du montant de la course).
          </h6>
        </div>
        <div class="inputs-block mt-4 w-75">
          <b-form @submit.stop.prevent>
            <label for="pCode">
              <h6 class="mb-2">Code Promotionnel</h6>
            </label>
            <div class="position-relative">
              <b-form-input
                type="text"
                id="pCode"
                value="MUFDI99S"
              ></b-form-input>
              <b-button
                class="copyBtn within-input-btn"
                variant="light"
                v-b-tooltip.click="'Copied'"
                @click="copyCode"
                >copy</b-button
              >
            </div>
          </b-form>

          <b-form @submit.stop.prevent class="mt-4">
            <label for="inviteLink">
              <h6 class="mb-2">Lien d’invitation</h6>
            </label>
            <div class="position-relative">
              <b-form-input
                type="text"
                id="inviteLink"
                value="https://dummy.com/KDFl"
              ></b-form-input>
              <b-button
                class="copyBtn within-input-btn"
                variant="light"
                v-b-tooltip.click="'Copied'"
                @click="copyInviteLink"
                >copy</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    copyCode() {
      var textBox = document.getElementById("pCode");
      textBox.select();
      document.execCommand("copy");
    },
    copyInviteLink() {
      var textBox = document.getElementById("inviteLink");
      textBox.select();
      document.execCommand("copy");
    },
  },
};
</script>
<style scoped>
input#pCode,
input#inviteLink {
  border-radius: 0;
}

.within-input-btn {
  position: absolute;
  top: 0;
  right: 10px;
  background: none;
  border: 0;
  color: green;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}

.within-input-btn:focus {
  border: 0;
  box-shadow: none !important;
}

.vector0 {
  max-width: 100%;
}
</style>
