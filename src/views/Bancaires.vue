<template>
  <div class="bg-white form-page self-scroll">
    <div class="tax-form">
      <h3>Informations bancaires</h3>
      <h6 class="text-secondary mt-2"></h6>
      <form class="mt-2">
        <div class="row">
          <div class="col-md-6 mt-4">
            <div role="group">
              <label class="mb-2" for="input-live"
                ><h6>
                  Nom (patronymique ou de l’entreprise)
                  <span class="text-danger">*</span>
                </h6>
              </label>
              <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Entrez nom titulaire du compte"
                trim
              ></b-form-input>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>Adresse (rue)<span class="text-danger">*</span></h6>
            </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Entrez adresse titulaire du compte"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4">
            <div role="group">
              <label class="mb-2" for="input-live"
                ><h6>
                  IBAN (34 caractères maximum)
                  <span class="text-danger">*</span>
                </h6>
              </label>
              <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Entrez votre IBAN"
                trim
              ></b-form-input>
            </div>
          </div>
          <div class="col-md-12 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>Confirmer IBAN (34 caractères maximum)</h6>
            </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Entrez votre IBAN"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>B.I.C / SWIFT (11 caractères maximum)</h6>
            </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Entrez votre BIC / SWIFT"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4"></div>
          <div class="col-md-12 mt-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                <h6>Disclaimer</h6>
              </label>
            </div>
          </div>
          <div class="col-md-12 additional-info mt-2">
            <ol>
              <li class="m-3">
                <h6 class="text-secondary">
                  En tant que titulaire du compte, je suis la seule personne
                  dont l’autorisation est requise pour effectuer ou recevoir des
                  virements. En soumettant un compte bancaire, j’autorise
                  MobilGo à réaliser des virements vers ce compte bancaire via
                  le système de virement SEPA (Single Euro Payment Area), et je
                  confirme avoir lu et accepte les
                  <a href="/driver" style="font-weight: 700">
                    Conditions d’utilisation du service MobilGo</a
                  >.
                </h6>
              </li>
            </ol>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style scoped>
::marker {
  color: #000;
  font-weight: 900;
}

ol {
  padding: 0;
}

li {
  list-style: unset !important;
}
.form-page {
  padding: 60px 120px;
}

.col-md-6,
.col-md-12 {
  padding-left: 0;
}

.tax-form input[type="text"] {
  background: #f1f1f1;
  border-radius: 0;
  border: 2px solid #f1f1f1;
  padding: 10px;
}

input[type="text"]:focus {
  box-shadow: none !important;
  border: 2px solid #000 !important;
}

.tax-form input[type="checkbox"] {
  border-radius: 0;
}
.tax-form input[type="checkbox"]:checked {
  background-color: rgb(65 170 84);
  border-radius: 0;
}

input[type="checkbox"]:focus {
  box-shadow: none !important;
}

.input-group-prepend .input-group-text {
  border: 0;
  padding: 10px 17px;
  border-radius: 0;
  background: #41aa54;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
</style>
