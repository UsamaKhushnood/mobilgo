<template>
  <div class="self-scroll bg-white">
    <div class="profile-header bg-green p-4">
      <div class="d-flex align-items-center">
        <div>
          <b-avatar
            badge-variant="info"
            src="https://placekitten.com/300/300"
            size="6rem"
          >
            <template #badge>
              <b-icon icon="pencil" class="bg-danger" variant="light"></b-icon>
            </template>
          </b-avatar>
        </div>
        <div class="ms-3">
          <h3 class="c-white">Dale Bradly</h3>
          <h6 class="c-white">+33 45454451</h6>
        </div>
      </div>
    </div>
    <div class="profile-body p-4">
      <div class="row">
        <div class="col-md-12 g-input">
          <label for="location" class="label-within-input">Pays</label>
          <b-form-select
            class="main-input"
            :options="['options', 'options', 'options', 'options']"
            >Please select an option</b-form-select
          >
        </div>

        <div class="col-md-12 g-input">
          <label for="location" class="label-within-input">Email</label>
          <b-form-input
            class="main-input"
            type="text"
            id="inviteLink"
            value="dummy@email.com"
          ></b-form-input>
          <b-button class="copyBtn btn-within-input" variant="light"
            >Edit</b-button
          >
        </div>

        <div class="col-md-12 g-input">
          <label for="location" class="label-within-input">Langue</label>
          <b-form-Langue
            class="main-input"
            :options="['options', 'options', 'options', 'options']"
            >Please select an option</b-form-Langue
          >
        </div>

        <div class="col-md-12 g-input">
          <label for="location" class="label-within-input"
            >Invitation Code</label
          >
          <b-form-input
            class="main-input"
            type="text"
            id="inviteLink"
            value="MFSDKJ765"
          ></b-form-input>
          <b-button class="copyBtn btn-within-input" variant="light"
            >Copy</b-button
          >
        </div>
        <div class="col-md-12 g-input">
          <label for="location" class="label-within-input"
            >Prefrences and Habbits</label
          >
          <b-form-input
            class="main-input"
            type="text"
            id="inviteLink"
            value="https://dummy.com/KDFl"
          ></b-form-input>
        </div>
        <div class="col-md-12 mt-5 text-center">
          <b-button class="bg-black w-50" squared>Save Chanes</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
svg.bi-pencil.bg-danger.b-icon.bi.text-light {
  padding: 5px;
  border-radius: 50%;
}

.g-input {
  position: relative;
  height: 50px;
  margin: 20px 0;
}

label.label-within-input {
  font-size: 18px;
  color: #000;
  background: #fff;
  padding: 8px 0;
  z-index: 2;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 250px;
  text-align: center;
}

.profile-body .main-input {
  width: 100%;
  padding: 15px;
  padding-left: 275px;
  border: 0;
  border-radius: 0 !important;
  background: #f1f1f1;
  position: absolute;
  left: 0;
  z-index: 1;
}

.btn-within-input {
  position: absolute;
  z-index: 2;
  right: 5px;
  top: 5px;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  width: 100px;
  height: 44px;
  padding: 10px;
  font-weight: 600;
  color: var(--bs-secondary) !important;
}

.profile-body .main-input:focus{
    box-shadow: none !important;
    background: #f1f1f1 !important;
}
</style>