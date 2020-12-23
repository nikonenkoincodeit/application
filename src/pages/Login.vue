<template>
  <q-page class="row flex-center">
      <q-card-section class="col-lg-4 col-md-6">
         <h2 class="title">Suadeo</h2>
         <p class="sub-title">Recommendations at your  findertips</p>
         <q-form class="login-form">
            <q-input square outlined v-model="form.email" type="email" label="Email of Username" />
            <q-input square outlined v-model="form.password" type="password" label="Password" />
            <q-btn label="Login" type="button" class="btn-login"/>
         </q-form>  
      </q-card-section>
    </q-card>
  </div>

  </q-page>
</template>

<script>


export default {
  name: 'Login',
  data: () => ({
    form: {
      email: null,
      password: null
    }
  })
  }
</script>

<style>
  .login-form .q-field__inner {
    margin-bottom: 30px;
  }
  .login-form .btn-login {
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>

