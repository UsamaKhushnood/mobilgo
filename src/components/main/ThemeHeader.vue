<template>
  <div>
    <b-navbar class="bg-black">
      <div class="container-fluid">
        <b-navbar-brand href="/">
          <div class="site-logo text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="100"
              viewBox="0 0 151 121"
            >
              <defs>
                <pattern
                  id="pattern"
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                  viewBox="0 0 527 334"
                >
                  <image
                    width="527"
                    height="334"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </pattern>
              </defs>
              <g
                id="Group_189"
                data-name="Group 189"
                transform="translate(2162 728)"
              >
                <rect
                  id="Rectangle_43"
                  data-name="Rectangle 43"
                  width="151"
                  height="121"
                  transform="translate(-2162 -728)"
                  fill="#fff"
                ></rect>
                <rect
                  id="P40c_1_"
                  data-name="P40c (1)"
                  width="79"
                  height="50"
                  transform="translate(-2126 -673)"
                  fill="url(#pattern)"
                ></rect>
                <rect
                  id="Rectangle_38"
                  data-name="Rectangle 38"
                  width="35"
                  height="21"
                  transform="translate(-2126 -707)"
                  fill="#41aa54"
                ></rect>
                <rect
                  id="Rectangle_40"
                  data-name="Rectangle 40"
                  width="34"
                  height="21"
                  transform="translate(-2081 -707)"
                ></rect>
              </g>
            </svg></div
        ></b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button squared variant="outline-light" class="px-4 me-4 my-2"
            >Aide</b-button
          >
          <b-nav-item-dropdown
            size="xs"
            left
            type="c-white"
            id="header-dropdown"
            right
          >
            <template #button-content>
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="me-2"
              ></b-avatar>
              <strong>Dale Bradely</strong>
            </template>
            <b-dropdown-item href="#" disabled class="align-item-center"
              >Commandez Une Courses</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <router-link to="/" exact class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-history"></i>
              </div>
              Mes Courses
            </router-link>
            <router-link to="/wallet" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-wallet"></i>
              </div>
              Wallet
            </router-link>
            <router-link to="/sponser" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-user-tie"></i>
              </div>
              Parrainge
            </router-link>
            <router-link to="/profile" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-cog"></i>
              </div>
              Paramatress du Profile
            </router-link>
            <router-link to="/tax-profile" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-file-word"></i>
              </div>
              Profile Fiscal
            </router-link>
            <b-dropdown-divider></b-dropdown-divider>
            <b-button squared variant="danger" block>Logout</b-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul.dropdown-menu.show {
  padding: 3px;
}

hr.dropdown-divider {
  margin-bottom: 3px;
}

a.dropdown-item.disabled {
  color: #000;
  font-weight: 600;
}

.navbar-expand .navbar-nav .dropdown-menu{
  right: 10px;
}
</style>