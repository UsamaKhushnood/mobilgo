<template >
  <div class="px-4" style="padding-bottom: 50px">
    <label
      class="row justify-content-between align-items-center clickable"
      :for="'checkbox' + xIndex"
      v-for="(x, xIndex) in paymentMethods"
      :key="xIndex"
    >
      <div class="col-md-3 card-icon text-center">
        <i :class="x.icon" class="pt-icon"></i>
      </div>
      <div class="col-md-6 payment-method-details">
        <h6>{{ x.title }}</h6>
        <p class="text-secondary">{{ x.desc }}</p>
      </div>
      <div class="selected-method col-md-3 text-end">
        <b-form-radio
          :id="'checkbox' + xIndex"
          name="payment-method"
          :value="xIndex"
          v-model="ptValue"
        >
        </b-form-radio>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ptValue: 0,
      paymentMethods: [
        {
          title: "Cash Payment",
          desc: "Default Method",
          icon: "fa fa-money-bill",
        },
        {
          title: "***********5967",
          desc: "Expires 09/27",
          icon: "fa fa-cc-mastercard",
        },
        {
          title: "***********5784",
          desc: "Expires 12/25",
          icon: "fa fa-cc-visa",
        },
      ],
    };
  },
};
</script>
<style >
.clickable {
  cursor: pointer;
  padding: 10px;
}

.clickable:hover {
  background-color: #f1f1f1;
}

i.pt-icon {
  font-size: 30px;
}
</style>    