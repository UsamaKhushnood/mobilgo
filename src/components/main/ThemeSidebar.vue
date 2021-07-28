<template >
  <div class="theme-sidebar">
    <div class="bg-white sidebar-links">
      <div>
        <h3 class="text-center">Commandez Une Courses</h3>
        <div class="sidebar-nav-links">
          <router-link to="/mes-coruses" class="sidebar-link">
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
            Profil Fiscal
          </router-link>
          <router-link
            to="#dsad"
            variant="danger"
            class="sidebar-link text-danger logout"
          >
            <div class="link-icon">
              <i class="fas fa-power-off"></i>
            </div>
            Se déconnecter</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.timeline-block:nth-child(even) {
  background: #f1f1f1 !important;
}

.sidebar-links {
  min-height: calc(100vh - 140px);
  padding: 30px;
}
.sidebar-nav-links {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 298px);
  position: relative;
  min-height: 300px;
}
a.sidebar-link {
  display: flex;
  padding: 10px;
  margin: 2px 0;
  font-weight: 500;
  color: #9d9bb2;
}

.link-icon {
  margin-right: 10px;
}

a.sidebar-link:hover {
  background: #e9ecef;
  color: #000;
}
a.sidebar-link.logout {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>