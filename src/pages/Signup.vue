<template>
  <q-page class="row flex-center">
    <q-card-section class="col-lg-4 col-md-6">
      <h2 class="title">Suadeo</h2>
      <p class="sub-title">Recommendations at your findertips</p>
      <q-form class="signup-form">
        <div v-if="step === 0">
          <q-input
            square
            outlined
            v-model.trim="firstName"
            :class="{ invalid: $v.firstName.$error }"
            type="text"
            label="First name"
          />
          <q-input
            square
            outlined
            v-model.trim="lastName"
            :class="{ invalid: $v.lastName.$error }"
            type="text"
            label="Last name"
          />
          <q-input
            square
            outlined
            v-model.trim="userEmail"
            :class="{ invalid: $v.userEmail.$error }"
            type="email"
            label="Email of Address..."
          />
          <q-btn
            label="Next"
            type="button"
            class="btn-next"
            @click="onNextStep"
          />
        </div>
        <div v-else-if="step === 1">
          <q-input
            square
            outlined
            v-model.trim="userName"
            type="text"
            :class="{ invalid: $v.userName.$error }"
            label="Create user name"
          />
          <q-input
            square
            outlined
            v-model.trim="password"
            type="password"
            :class="{ invalid: $v.password.$error }"
            label="Create your password"
          />
          <q-input
            square
            outlined
            v-model.trim="repeatPassword"
            type="password"
            :class="{ invalid: $v.repeatPassword.$error }"
            label="Re-inter Create your password"
          />
          <q-btn
            label="Create Account"
            type="button"
            class="btn-crea-acc"
            @click="createAccount"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Signup",
  data: () => ({
    step: 0,
    firstName: "",
    lastName: "",
    userName: "",
    userEmail: "",
    password: "",
    repeatPassword: "",
    slider: ""
  }),
  validations: {
    userEmail: {
      required,
      email
    },
    firstName: {
      required,
      minLength: minLength(3)
    },
    lastName: {
      required,
      minLength: minLength(3)
    },
    userName: {
      required,
      minLength: minLength(3)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    ...mapActions(["register"]),
    onNextStep() {
      this.$v.lastName.$touch();
      this.$v.userEmail.$touch();
      this.$v.firstName.$touch();
      if (
        !this.$v.lastName.$error &&
        !this.$v.userEmail.$error &&
        !this.$v.firstName.$error
      ) {
        this.step = 1;
      }
    },
    createAccount() {
      this.$v.userName.$touch();
      this.$v.password.$touch();
      this.$v.repeatPassword.$touch();
      if (
        !this.$v.userName.$error &&
        !this.$v.password.$error &&
        !this.$v.repeatPassword.$error
      ) {
        this.register({
          email: this.userEmail,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName
        })
          .then(answer => {
            this.$router.push({ path: "/profile" });
          })
          .catch(error => console.log(error));
      }
    }
  }
};
</script>

<style>
.title {
  font-weight: 600;
  text-align: center;
  font-size: 40px;
}
.sub-title {
  text-align: center;
}
.signup-form .q-field__inner {
  margin-bottom: 30px;
}
.signup-form .btn-crea-acc {
  background: #64ad9e;
  color: #fff;
  text-transform: capitalize;
  width: 100%;
}
.signup-form .btn-next {
  color: #64ad9e;
  border: 1px solid #64ad9e;
  text-transform: capitalize;
  margin-left: 50%;
  transform: translateX(-50%);
}
.invalid .q-field__inner {
  border: 1px solid red;
}
</style>
