<template>
  <q-page class="row flex-center">
    <q-card-section class="col-lg-3 col-md-4">
      <h2 class="title">Suadeo</h2>
      <p class="sub-title">Recommendations at your findertips</p>
      <div class="column">
        <q-btn
          label="Login"
          type="button"
          class="btn-login"
          @click="goToLoginForm"
        />
        <q-btn
          label="Create Account"
          type="button"
          class="btn-crea-acc"
          @click="goToRegistrationForm"
        />
      </div>
    </q-card-section>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  methods: {
    goToRegistrationForm() {
      this.$router.push({ path: "/signup" });
    },
    goToLoginForm() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style>
.title {
  font-size: 40px;
  color: #354443;
  font-weight: 600;
  text-align: center;
}
.sub-title {
  color: #354443;
  font-size: 20px;
  margin-bottom: 40px;
}
.btn-crea-acc {
  background: #64ad9e;
  color: #fff;
  text-transform: capitalize;
}
.btn-login {
  background: #fff;
  color: #64ad9e;
  border: 1px solid #64ad9e;
  text-transform: capitalize;
  margin-bottom: 30px;
}
</style>
