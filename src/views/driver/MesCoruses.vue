<template>
  <div class="home">
    <div class="row">
      <div class="col-md-8 p-0 self-scroll">
        <div class="title-bar bg-green p-2 ps-4">
          <h4 class="c-white">Mes courses</h4>
        </div>
        <div class="row">
          <div class="col-md-6 bg-white p-0">
            <div class="timeline">
              <div class="timeline-block">
                <h6 class="pick-up location">7958 Swift Village</h6>
                <h6 class="destination location">
                  105 William St, Chicago, US
                </h6>
                <div
                  class="
                    time-price
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-4
                  "
                >
                  <h6 class="price">75.00 &euro;</h6>
                  <p class="time text-secondary">
                    fri aug 9, 7:15pm <i class="fab fa-cc-paypal"></i>
                  </p>
                </div>
              </div>
              <div class="timeline-block">
                <h6 class="pick-up location">7958 Swift Village</h6>
                <h6 class="destination location">
                  105 William St, Chicago, US
                </h6>
                <div
                  class="
                    time-price
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-4
                  "
                >
                  <h6 class="price">75.00 &euro;</h6>
                  <p class="time text-secondary">
                    fri aug 9, 7:15pm <i class="fab fa-cc-paypal"></i>
                  </p>
                </div>
              </div>
              <div class="timeline-block">
                <h6 class="pick-up location">7958 Swift Village</h6>
                <h6 class="destination location">
                  105 William St, Chicago, US
                </h6>
                <div
                  class="
                    time-price
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-4
                  "
                >
                  <h6 class="price">75.00 &euro;</h6>
                  <p class="time text-secondary">
                    fri aug 9, 7:15pm <i class="fab fa-cc-paypal"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 bg-light-grey">
            <div class="timeline-additional-details">
              <div class="ta-block">
                <h6 class="text-secondary text-uppercase">fri aug 9, 7:15pm</h6>
                <h6 class="text-secondary mt-2">
                  Cash Payment <i class="fab fa-cc-paypal"></i>
                </h6>
                <h1 class="text-danger mt-3">25.50 &euro;</h1>
              </div>
              <div class="timeline">
                <div class="timeline-block m-0">
                  <h6 class="pick-up location">7958 Swift Village</h6>
                  <h6 class="destination location">
                    105 William St, Chicago, US
                  </h6>
                  <h6 class="destination location">
                    105 William St, Chicago, US
                  </h6>
                </div>
              </div>
              <div class="user-details">
                <div class="row">
                  <div class="col-md-5 d-flex justify-content-end">
                    <b-avatar
                      badge-variant="warning"
                      src="https://placekitten.com/300/300"
                      size="6rem"
                    >
                      <template #badge
                        ><b-badge>
                          <p class="text-light badge bg-danger">JUBERGO</p>
                        </b-badge></template
                      >
                    </b-avatar>
                  </div>
                  <div class="col-md-7 d-flex flex-column align-self-end">
                    <h3>Rated</h3>
                    <b-form-rating
                    class="w-25 p-0"
                      variant="warning"
                      no-border
                      size="sm"
                      value="5"
                    ></b-form-rating>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6 ">
                  <b-button variant="outline-dark" block>Details</b-button>
                </div>
                <div class="col-md-6">
                  <b-button variant="outline-dark" block
                    ><i class="fas fa-arrow-down"></i
                  ></b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-0">
        <div class="bg-white right-sidebar d-flex align-items-center">
          <div class="right-sidebar-content text-center">
            <b-avatar
              src="https://placekitten.com/300/300"
              size="6rem"
            ></b-avatar>
            <h4 class="mt-4">Trouver une course en quelques minutes</h4>
            <p class="mt-3 text-secondary">
              Trouvez une course MobilGo depuis votre application à installer sur votre smartphone.
            </p>
            <b-button variant="dark" squared class="mt-4">Se connecter à l’App</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="css">
.b-rating  {
  background: none !important;
}
span.badge.badge-secondary {
  padding: 0 !important;
}
.self-scroll {
  overflow: auto;
  max-height: calc(100vh - 140px);
}

.right-sidebar {
  min-height: calc(100vh - 140px);
  padding: 30px;
}

h6.destination:before {
  content: "\f45c";
  margin-right: 15px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 14px;
  color: red;
}

h6.pick-up:before {
  content: "\f111";
  margin-right: 15px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 14px;
  color: black;
}

.timeline {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.timeline-block h6.location {
  padding: 15px 0;
}

.timeline-block h6.location {
  position: relative;
  display: flex;
  align-items: center;
}

.timeline-block {
  padding: 20px !important;
  margin-left: 20px;
}

.timeline-block h6.location:after {
  content: ". . .";
  position: absolute;
  left: 1px;
  transform: rotate(90deg);
  top: 40px;
}

.timeline-block h6.location:last-of-type:after {
  content: none !important;
}

.timeline-block h6.price:before {
  content: "\f0a3";
  font-family: "FontAwesome";
  font-weight: 900;
  margin-right: 15px;
  color: #8e8e8e;
  font-size: 15px;
}

.timeline-block p.time {
  text-transform: uppercase;
  font-weight: 700;
}

.ta-block {
  padding: 37px 15px;
}
</style>
