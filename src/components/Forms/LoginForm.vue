<template>
  <div class="q-pa-md" style="max-width: 600px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <q-input
        filled
        outlined
        type="email"
        v-model="email"
        label="Email *"
        square
        lazy-rules
        v-bind:rules="[val => !!val || 'Email is missing', isValidEmail]"
    />

    <q-input filled
      v-model="password"
      label="Enter your password"
      hint="Enter your password"
      v-bind:type="isPwd ? 'password' : ''"
      lazy-rules
      v-bind:rules="Required"
      ref="fldPasswordChange">
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          v-on:click="isPwd = !isPwd"></q-icon>
      </template>
    </q-input>


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>e>


<script>

export default {
  data () {
    return {
      email: null,
      password: null,
      isPwd: true,
    }
  },
computed: {
    ConfirmPWD() {
      
        return [
            (v) => !!v || "Saisissez quelque chose :-)",
            (v) => v === this.$refs.fldPasswordChange.value || "Mots de passe différents"
        ]
    },
    Required() {
        return [(v) => !!v || 'Saisissez quelque chose :-)']
    }
},
methods: {
    onSubmit () {

        // this.$q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'cloud_done',
        //   message: 'Submitted'
        // })
     
    },

    onReset () {
      this.email = null
      this.password = null
    },
    isValidEmail (val) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'Invalid email';
  }
  }
}
</script>
