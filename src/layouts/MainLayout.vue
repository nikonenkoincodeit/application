<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-secondary">
          Suadeo
        </q-toolbar-title>

        <div>
          <q-btn
            @click="login"
            color="secondary"
            :label="returnUserName ? returnUserName : 'Login / Register'"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Suadeo
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Home",
    caption: "",
    icon: "home",
    link: "/"
  },
  {
    title: "Search",
    caption: "Let's find something good",
    icon: "code",
    link: "/"
  },
  {
    title: "Post a Suadeoiew",
    caption: "Let the world know",
    icon: "add",
    link: "/"
  },
  {
    title: "Account",
    caption: "Preferences and Settings",
    icon: "settings",
    link: "/"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  computed: {
    ...mapGetters(["returnUserName"])
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
