<template>
  <div>
    <b-navbar class="bg-black">
      <div class="container-fluid" style="padding: 0 42px">
        <b-navbar-brand href="/driver/">
          <div class="site-logo text-center">
             <img src="@/assets/logo.png" class="logoImg" />
          </div>
        </b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
            squared
            variant="outline-light"
            class="px-4 me-4 my-2"
            v-b-modal.aideModal
            >Aide</b-button
          >
          <AideModal />
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
              >Commandez une course</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <router-link to="/driver/mes-coruses" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-history"></i>
              </div>
              Mes Courses
            </router-link>
            <router-link to="/driver/bancaires" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-user-tie"></i>
              </div>
              Mes coordonnées bancaires
            </router-link>
            <router-link to="/driver/sponser" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-user-tie"></i>
              </div>
              Parrainage
            </router-link>
            <router-link to="/driver/profile" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-cog"></i>
              </div>
              Paramètres du profil
            </router-link>
            <router-link to="/driver/tax-profile" class="sidebar-link">
              <div class="link-icon">
                <i class="fas fa-file-word"></i>
              </div>
              Profil fiscal
            </router-link>
            <b-dropdown-divider></b-dropdown-divider>
            <b-button squared variant="danger" block>Se déconnecter</b-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import AideModal from "../AideModal.vue";
export default {
  components: {
    AideModal,
  },
};
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

.navbar-expand .navbar-nav .dropdown-menu {
  right: 10px;
}
</style>