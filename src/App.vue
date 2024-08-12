<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useToast } from './utils/toast.js';
import { ref } from 'vue';

const invertColorTheme = ref('light')

// Set up the theme
let element = document.body
if (!localStorage.theme) {
  localStorage.theme = 'light'
}
element.dataset.theme = localStorage.theme

const toast = useToast();

function openToast() {
  toast.open({
    message: 'Hello World',
    type: `is-${invertColorTheme.value}`
  })
}


function changeTheme() {
  let element = document.body
  switch (element.dataset.theme) {
    case 'light':
      element.dataset.theme = 'dark'
      localStorage.theme = 'dark'
      invertColorTheme.value = 'light'
      break
    case 'dark':
      element.dataset.theme = 'light'
      localStorage.theme = 'light'
      invertColorTheme.value = 'dark'
      break
  }
}

</script>

<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma">
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-item tag="div" style="display: flex;">
        <b-switch class="pulsing" size="is-medium" type='is-info' @click="changeTheme">
        </b-switch>
        <a class="button is-primary">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light">
          Log in
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
  <div class="content">
    <div class="content-inner">
      <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
          <HelloWorld msg="You did it!" />
        </div>
      </header>

      <main>
        <TheWelcome />
      </main>
    </div>
  </div>

  <div class="buttons">
    <b-button @click="openToast">Launch toast (default)</b-button>
    <b-button type="is-primary">Primary</b-button>
    <b-button type="is-primary is-light">Primary Light</b-button>

    <b-button type="is-success">Success</b-button>
    <b-button type="is-success is-light">Success Light</b-button>

    <b-button type="is-danger">Danger</b-button>
    <b-button type="is-danger is-light">Danger Light</b-button>

    <b-button type="is-warning">Warning</b-button>
    <b-button type="is-warning is-light">Warning Light</b-button>

    <b-button type="is-info">Info</b-button>
    <b-button type="is-info is-light">Info Light</b-button>

    <b-button type="is-link">Link</b-button>
    <b-button type="is-link is-light">Link Light</b-button><br />

    <b-button type="is-light">Light</b-button>
    <b-button type="is-dark">Dark</b-button>
    <b-button type="is-text">Text</b-button>
    <b-button type="is-ghost">Ghost</b-button>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .content {
    display: flex;
    place-items: center;
    min-height: 1000px;
  }

  .content-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1.1);
  }
}

.pulsing {
  animation: pulse 1.7s infinite ease;
}
</style>
