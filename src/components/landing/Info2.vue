<template>
  <section id="benefits" class="body-container content">
    <div class="content-back">
      <div class="text-container font-semibold" style="margin: 30px;">
        <h1>
          Entre los beneficios que ofrecemos se encuentran&nbsp;
        </h1>
        <h1 class="font-blue">
          {{';)'}}
        </h1>
      </div>
      <div class="icon-items">
        <div v-for="icon in icons" :key="icon.icon">
          <img class="img-landing" style="margin: 20px;" :src="getImgUrl(icon)" alt="pc_landing">
          <h2 class="font-normal" style="font-size: 18px">
            {{icon.text}}
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section class="body-container content" style="justify-items: center;">
    <div class="thanks">
      <h2 class="font-semibold">
        Gracias por&nbsp;
      </h2>
      <h2 class="font-semibold font-blue">
        completar el ejercicio
      </h2>
    </div>
      <h2 class="font-normal" style="margin-bottom: 40px;">
        Te invitamos a ver más información
      </h2>
    <button class="button button-more shake" @click="goToWolox">
      Conocer mas
    </button>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'info2-page',
  props: {},
  setup (props, context) {
    const icons = reactive([
      { icon: 'Ic_Hour', text: 'Flexibilidad Horaria' },
      { icon: 'Ic_HomeOffice', text: 'Home Office' },
      { icon: 'Ic_Workshops', text: 'Capacitaciones y Workshops' },
      { icon: 'Ic_DrinkSnacks', text: 'Snacks, frutas y bebidas gratis' },
      { icon: 'Ic_laptop', text: 'Semana Remota' },
      { icon: 'Ic_brain', text: 'Trabajar en últimas tecnologías' }
    ])
    function getImgUrl (icon) {
      return require(`../../assets/${icon.icon}.svg`)
    }
    function goToWolox () {
      window.open('https://www.wolox.com.ar/', '_blank')
    }
    return {
      icons,
      getImgUrl,
      goToWolox
    }
  }
}
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  height: 400px;
  background-color: #ffffff
}

.text-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.icon-items{
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 20px;
}

.button-more {
  border: 1px solid #2aa7df;
  color: #ffffff;
  background: #2aa7df;
}

.button-more:hover {
  color: #2aa7df;
  background: #ffffff;
}

.content-back {
  background-color: #ffffff;
  height: 400px;
}

.thanks {
 font-size: 30px;
 margin-bottom: 20px;
 display: flex;
 justify-content: center;
}

</style>
