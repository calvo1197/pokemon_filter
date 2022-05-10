<template>
  <nav>
    <div class="nav-container">
      <div class="nav-img-container">
         <router-link to="/landing">
          <img class="nav-img" src="../../assets/logo_full_color.svg" alt="Logo">
         </router-link>
      </div>
      <container v-if="route.path === '/landing'" >
        <div class="button-container">
          <button class="button button-p shake" @click="scrollToElement('home')">
            Inicio
          </button>
          <button class="button button-p shake" @click="scrollToElement('benefits')">
            Beneficios
          </button>
          <button class="button button-s shake">
            <router-link to="/register">Registro</router-link>
          </button>
        </div>
      </container>
      <container v-else>
         <div class="button-container" style="justify-content: end;">
          <button class="button button-p shake">
            <router-link to="/landing">Inicio</router-link>
          </button>
        </div>
      </container>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'nav-page',
  props: { scrollToElement: { type: Function } },
  setup () {
    const route = useRoute()
    console.log(route.path)
    return {
      route
    }
  }
}
</script>

<style>
nav {
  position: fixed;
  background-color: white;
  align-items: center;
  width: 95%;
  z-index: 100;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-img {
  width: 200px;
  cursor: pointer;
  margin-left: 50px;
}

.nav-img-container {
  text-align: left;
}

.nav-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;
  height: 70px;
}

.button-container {
  display: flex;
  justify-self: right;
  gap: 20px;
  align-items: center;
}

.button {
  width: 200px;
  font-size: 16px;
  border: none;
  font-family: 'Montserrat-semibold';
  transition: 0.5s;
  border: 0px solid #a3cc39;
  border-radius: 50px;
  height: 40px;
  cursor: pointer;
  background-color: #ffffff;
}

.button-p:hover {
  color: #ffffff;
  background: #a3cc39;
}

.button-s {
  border: 1px solid #2aa7df;
  color: #2aa7df;
}

.button-s:hover {
  color: #ffffff;
  background: #2aa7df;
}
</style>
