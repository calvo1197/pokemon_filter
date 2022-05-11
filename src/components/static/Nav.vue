<template>
  <nav class="navbar">
    <router-link to="/landing">
      <img class="nav-img" src="../../assets/logo_full_color.svg" alt="Logo">
    </router-link>
    <div class="alignLast">
    <input type="checkbox" id="toggler">
      <label for="toggler">
        <i class="fa-solid fa-bars"></i>
      </label>
      <div class="menu">
        <ul class="list">
          <li v-if="route.path === '/landing'">
            <button class="button button-p shake" @click="scrollToElement('home')">
              Inicio
            </button>
          </li>
          <li v-else>
             <button class="button button-p shake">
              <router-link to="/landing">Inicio</router-link>
            </button>
          </li>
          <li v-if="route.path === '/landing'">
            <button class="button button-p shake" @click="scrollToElement('benefits')">
              Beneficios
            </button>
          </li>
          <li v-if="route.path === '/landing'">
            <button class="button button-s shake">
              <router-link to="/pokemon">Pokemones</router-link>
            </button>
          </li>
        </ul>
      </div>
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
    return {
      route
    }
  }
}
</script>

<style>

.nav-img {
  width: 200px;
  cursor: pointer;
  margin-left: 50px;
}

.nav-img-container {
  text-align: left;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}

.navbar a {
  text-decoration: none;
  color: inherit;
}

.list {
  list-style: none;
  display: flex;
  gap: 10px;
}

#toggler,
.navbar label {
  display: none;
}

@media screen and (max-width: 1000px) {

  .menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }

  .alignLast {
    text-align-last: right;
  }

  .list {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align-last: center;
  }

  .navbar label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  #toggler:checked ~ .menu {
    max-height: 100%;
  }

}

@media screen and (max-width: 500px) {
  .nav-img {
    width: 100px;
    cursor: pointer;
    margin-left: 0px;
  }
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
