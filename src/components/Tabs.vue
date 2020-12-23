<template>
  <div class="col-md-6">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="register" label="Register" />
          <q-tab name="login" label="Login" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="register">
            <SignUpForm />
          </q-tab-panel>

          <q-tab-panel name="login">
            <LoginForm />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>

<script>
import LoginForm from './Forms/LoginForm';
import SignUpForm from './Forms/SignUpForm';
export default {
  data () {
    return {
      tab: 'register'
    }
  },
  components: {
    LoginForm,
    SignUpForm,
  }
}
</script>