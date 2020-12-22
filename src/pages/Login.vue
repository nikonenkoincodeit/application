<template>
  <q-page class="flex flex-center">
    <div class="row">
      <TabsForm />
    </div>
  </q-page>
</template>

<script>

import TabsForm from '../components/Tabs';

export default {
  name: 'Login',
  components: {
    TabsForm
  },
}
</script>
