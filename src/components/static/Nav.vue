<template>
  <nav>
    <div class="nav-container">
      <div class="nav-img-container">
        <img class="nav-img" src="../../assets/logo_full_color.svg" alt="" onclick="">
      </div>
      <div class="button-container">
        <button class="button-p">
          Inicio
        </button>
        <button class="button-p">
          Beneficios
        </button>
        <button class="button-s">
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
  padding: 30px;
  /* position: fixed; */
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-img {
  width: 50%;
  cursor: pointer;
}

.nav-img-container {
  justify-content: left;
}

.nav-container {
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.button-container {
  display: flex;
  justify-self: right;
  gap: 20px;
  align-items: center;
}

.button-p {
  width: 200px;
  font-size: 16px;
  border: none;
  font-family: 'Montserrat-semibold';
  transition: 0.5s;
  border: 0px solid #a3cc39;
  border-radius: 50px;
  height: 40px;
}
.button-p:hover {
  color: #ffffff;
  background: #a3cc39;
}

.button-s {
  width: 200px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #2aa7df;
  color: #2aa7df;
  border-radius: 50px;
  justify-content: center;
  cursor: pointer;
  font-family: 'Montserrat-semibold';
  transition: 0.5s;
}

.button-s:hover {
  color: #ffffff;
  background: #2aa7df;
}
</style>
