<template >
  <div class="px-4 " style="padding-bottom: 50px;">
    <div
      class="row cab-details align-items-center"
      v-for="(cab, cabIndex) in availableCabs"
      :key="cabIndex"
      :class="cab.active"
    >
      <div class="col-md-3 cab-icon text-center">
        <i class="fa fa-car"></i>
      </div>
      <div class="col-md-6 cab-info">
        <div class="d-flex align-items-center">
          <h6 class="cab-name">{{cab.cab}}</h6>
          <h6 class="text-danger passenger-limit ms-2">1-5</h6>
          <i class="fa fa-users ms-2 text-danger"></i>
        </div>
        <div>
          <p class="text-secondary cab-description">{{cab.desc}}</p>
        </div>
      </div>
      <div class="col-md-3 cab-price">
        <h5 class="text-danger price">25.00 &euro;</h5>
        <p class="text-secondary time">11:50pm</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      availableCabs: [
        {cab: 'GoCab', desc: 'Berline ou VAN éléctrique',  active: "inactive" },
        {cab: 'GoWomen ', desc: 'Berline électrique conduit uniquement par des femmes',  active: "active" },
        {cab: 'GoShare ', desc: 'Berline électrique conduit uniquement par des femmes',  active: "inactive" },
      ],
    };
  },
};
</script>
<style >
i.fa.fa-money-bill {
  font-size: 30px;
  color: #f8a900;
}

.cab-details {
  padding: 10px;
  cursor: pointer;
}

.cab-details.active {
  background-color: #41aa54;
  color: #fff !important;
}

.cab-details.active .fa-users,
.cab-details.active .passenger-limit,
.cab-details.active .cab-description,
.cab-details.active .price,
.cab-details.active .time {
  color: #fff !important;
}

.col-md-3.cab-icon i {
  font-size: 55px;
}
</style>    