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
                placeholder="Enter your name"
                trim
              ></b-form-input>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>Addresse (rue)<span class="text-danger">*</span></h6>
            </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
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
                placeholder="Enter your name"
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
              placeholder="Enter your name"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>Code Postal (format de sailsie: 5 chiffres, p. ex. 9999)</h6>
            </label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
            ></b-form-input>
          </div>
          <div class="col-md-12 mt-4">
            <label class="mb-2" for="input-live"
              ><h6>
                Numero de TVA (format de sailsie: 5 chiffres, p. ex. 9999 format
                de sailsie: 5 chiffres, p. ex. 9999 format de sailsie
              </h6>
            </label>
            <b-input-group prepend="FR">
              <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your name"
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  dicta possimus officia quaerat voluptatem eveniet dolore
                  corrupti repudiandae facere? Accusamus quidem blanditiis in
                  fugiat non corporis nisi nemo vel qui. Accusamus quidem blanditiis in
                  fugiat non corporis nisi nemo vel qui. Accusamus quidem blanditiis in
                  fugiat non corporis nisi nemo vel qui.
                </h6>
              </li>
              <li class="m-3">
                <h6 class="text-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  dicta possimus officia quaerat voluptatem eveniet dolore
                  corrupti repudiandae facere? Accusamus quidem blanditiis in
                  fugiat non corporis nisi nemo vel qui.
                </h6>
              </li>
              <li class="m-3">
                <h6 class="text-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  dicta possimus officia quaerat voluptatem eveniet dolore
                  corrupti repudiandae facere? Accusamus quidem blanditiis in
                  fugiat non corporis nisi nemo vel qui.
                </h6>
              </li>
            </ol>
          </div>
          <div class="col-md-12 text-center mt-5">
              <b-button class="bg-black " block squared>Envoyer</b-button>
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