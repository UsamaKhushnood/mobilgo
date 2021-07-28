<template >
  <div class="self-scroll bg-white">
    <div class="wallet-header p-2 ps-5 bg-green">
      <h5 class="c-white">Mes moyens de paiement</h5>
    </div>
    <div class="wallet-body">
      <div class="cardsList row border-bottom pb-4">
        <div
          class="col-md-4"
          v-for="(card, cardIndex) in cardsList"
          :key="cardIndex"
        >
          <div class="p-card">
            <div class="action-icons">
              <div class="delete-icon action-icon">
                <i class="fas fa-trash" @click="deteteCard(cardIndex)"></i>
              </div>
              <div class="edit-icon action-icon">
                <i class="fas fa-edit" v-b-modal.addNewCard></i>
              </div>
            </div>
            <div class="main-balance-div c-detail">
              <p class="main-balance c-label">Main Balance</p>
              <h5 class="c-balance-amount">$546,545,565</h5>
            </div>
            <div class="c-detail card-no-div">
              ********** {{ card.number.slice(card.number.length - 4) }}
            </div>
            <div class="c-detail valid-thru-div">
              <p class="valid-thru c-label">Valid Thru</p>
              <p class="c-info">{{ card.exp }}</p>
            </div>
            <div class="c-detail card-holder-div">
              <p class="card-holder c-label">Card Holder</p>
              <p class="c-info">{{ card.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="add-new-card-sec mt-4">
        <div class="row">
          <div
            class="col-md-6 d-flex justify-content-center"
            v-b-modal.addNewCard
          >
            <div class="add-new-card-container">
              <h6 class="text-secondary">Ajoutez un moyen de piement</h6>
              <i class="fa fa-plus ms-2 text-secondary"></i>
            </div>
            <AddNewCardModal v-on:add-new-card="addNewCard" />
          </div>
          <div class="col-md-6 profils align-self-center">
            <h6 class="mb-3">Profils</h6>
            <div class="c-profil">
              <div class="cp-icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="cp-title">Personal</div>
              <div class="cp-desc">Master card-4564</div>
            </div>
            <div class="c-profil">
              <div class="cp-icon bg-green">
                <i class="fa fa-users"></i>
              </div>
              <div class="cp-title">Family</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddNewCardModal from "@/components/AddNewCardModal";
export default {
  components: { AddNewCardModal },
  data() {
    return {
      cardsList: [
        { name: "Dale bradely", exp: "8/12", number: "1254" },
        { name: "Dale bradely", exp: "8/12", number: "1254" },
        { name: "Dale bradely", exp: "8/12", number: "1254" },
      ],
    };
  },
  methods: {
    addNewCard(value) {
      this.cardsList.push({
        name: value.name,
        exp: value.exp,
        number: value.number,
      });
      console.log(value);
    },
    deteteCard(index) {
      this.cardsList.splice(index, 1);
    },
  },
};
</script>
<style>
.wallet-body {
  padding: 40px 100px;
}

.cardsList.row {
  column-gap: 20px;
  row-gap: 10px;
}

.cardsList.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  justify-content: center;
}

.p-card {
  position: relative;
  background: #041633;
  height: 200px;
  width: 350px;
}

.action-icons {
  display: flex;
  position: absolute;
  right: 5px;
  top: 10px;
}

.action-icon {
  background: #ffff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.action-icon:hover {
  color: #51aa50;
}

.c-detail {
  position: absolute;
  height: 55px;
  color: #fff;
}

.main-balance-div {
  top: 50px;
  left: 20px;
}

.card-no-div {
  top: 55px;
  right: 25px;
}

.valid-thru-div {
  bottom: 15px;
  left: 25px;
}

.card-holder-div {
  bottom: 15px;
  right: 135px;
}

.c-label {
  color: #a2a2a2;
  font-weight: 700;
}

.c-info {
  color: #fff;
}

.c-balance-amount {
  color: #fff;
}

.main-balance {
  color: #fff;
}

.add-new-card-container {
  height: 200px;
  width: 350px;
  border: 3px dashed #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.c-profil {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  margin-bottom: 10px;
}

.cp-icon {
  background: #adb1c1;
  width: 50px;
  margin-right: 10px;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.cp-title {
  font-weight: 600;
}

.cp-desc {
  margin-left: auto;
  margin-right: 15px;
  color: #b9bcc8;
  font-weight: 600;
}
</style>