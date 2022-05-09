<template>
  <nav>
    <div class="nav-container">
      <div class="nav-img-container">
        <img class="nav-img" src="../../assets/logo_full_color.svg" alt="" onclick="">
      </div>
      <div class="button-container">
        <button class="button button-p shake">
          Inicio
        </button>
        <button class="button button-p shake">
          Beneficios
        </button>
        <button class="button button-s shake">
          Registro
        </button>
      </div>
      <!-- <router-link to="/register">Registro</router-link> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'register-page',
  props: {},
  setup (props, context) {
    // const total = `Total price (50% offer): ${props.price / 2}`;

    // return { total };
    return 0
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
