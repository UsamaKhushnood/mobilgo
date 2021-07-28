<template>
  <div class="bg-white form-page self-scroll">
    <div class="tax-form">
      <h3>Infromation de societe</h3>
      <h6 class="text-secondary mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        harum eveniet <br />vero ut quasi, placeat doloremque hic soluta?
      </h6>
      <form class="mt-2">
        <div class="row">
          <div class="col-md-6 mt-4">
            <div role="group">
              <label class="mb-2" for="input-live"
                ><h6>
                  Nom (patronique ou de I'entreprise)
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
          <div class="col-md-6 mt-4">
            <div role="group">
              <label class="mb-2" for="input-live"
                ><h6>Ville <span class="text-danger">*</span></h6>
              </label>
              <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Entrez votre ville	"
                trim
              ></b-form-input>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <label class="mb-2" for="input-live"><h6>Pays</h6> </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Entrez votre pays"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>Code Postal (format de saisie à 5 chiffres p. ex. 99999)</h6>
            </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Entrez votre code postal"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>
                Numéro de TVA (format de saisie : « FR » suivi de 2 lettres
                majuscules ou chiffres et de 9 chiffres, p. ex. FR999999999 ou
                FRAA9999999)
              </h6>
            </label>
            <b-input-group prepend="FR">
              <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Entrez numéro de TVA"
                trim
              ></b-form-input>
            </b-input-group>
          </div>
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
                  En cliquant sur « Enregistrer », vous demandez à MobilGo Ltd
                  et/ou ses sociétés affiliées (« MobilGo ») d’ajouter les
                  informations que vous lui fournissez à la facture directement
                  émise par MobilGo, ou au nom de tiers (uniquement si cela est
                  requis par la législation en vigueur).
                </h6>
              </li>
              <li class="m-3">
                <h6 class="text-secondary">
                  J’atteste que les informations que j’ai fournies sont exactes
                  et j’accepte que MobilGo décline toute responsabilité en cas
                  d’inexactitude de ces informations.
                </h6>
              </li>
              <li class="m-3">
                <h6 class="text-secondary">
                  Lorsque la législation en vigueur exige des factures conformes
                  aux lois locales, vos informations peuvent également être
                  communiquées à des prestataires de service tiers dans ce but.
                </h6>
              </li>
              <li class="m-3">
                <h6 class="text-secondary">
                  Pour en savoir plus sur le responsable du traitement des
                  données et sur vos droits, consultez notre Politique de
                  confidentialité.
                </h6>
              </li>
            </ol>
          </div>
          <div class="col-md-12 text-center mt-5">
            <b-button class="bg-black" block squared>Envoyer</b-button>
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
