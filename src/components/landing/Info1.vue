<template>
  <div class="body-container content">
    <div class="label-container lbc-positionl" style="margin-left: 50px;">
      <h2 class="font-normal">
        Bienvenido a tu&nbsp;
      </h2>
      <h2 class="font-bold">
        Entrevista técnica&nbsp;
      </h2>
      <h2 class="font-normal">
        en &nbsp;
      </h2>
      <h2 class="font-bold font-green">
        Wolox
      </h2>
    </div>
    <div>
      <img class="img-landing" src="../../assets/Img_Hero/Ic_ilustra_Hero.png" alt="">
    </div>
  </div>
  <div class="body-container content">
    <div class="img-container" style="background-color: #eeeeee">
      <img class="img-landing" src="../../assets/img_woloxer.png" alt="">
      <div class="centered">
        <div class="inline-flex">
          <h2 class="font-bold font-green">
            350 +&nbsp;
          </h2>
          <h2 class="font-blue">
            Woloxers&nbsp;
          </h2>
        </div>
        <div>
          <h4 class="tw-icon">
            <i class="fa-brands fa-twitter"></i>
            @Wolox
          </h4>
          <button class="button-tw shake" @click="goToTwitter">
            Síguenos
          </button>
        </div>
      </div>
    </div>
    <div class="workfor">
      <div class="label-container lbc-positionc" style="padding: 0 15px">
        <h2 class="font-normal">
          Trabajamos para&nbsp;
        </h2>
        <h2 class="font-blue">
          convertir&nbsp;
        </h2>
        <h2 class="font-green">
          ideas&nbsp;
        </h2>
        <h2 class="font-normal">
          en productos.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info1-page',
  props: {},
  setup (props, context) {
    function goToTwitter () {
      window.open('https://twitter.com/wolox', '_blank')
    }
    return {
      goToTwitter
    }
  },
  mounted () {
    console.log('hola') // 0
  }

}
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;
  padding-top: 100px;
}

.label-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 35px;
  align-items: center;
}

.lbc-positionc {
  justify-content: center;
}

.lbc-positionl {
  justify-content: left;
}

.img-landing {
  max-width: 100%;
  height: auto;
  object-fit:cover;
}

.img-container {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.centered {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
}

.workfor {
  display: flex;
  height: 100%;
  background-color: #eeeeee;
  align-items: center;
  justify-content: center;
}

.inline-flex {
  display: flex;
}

.tw-icon {
  color: white;
  margin-bottom: 10px;
}

.button-tw {
  width: 200px;
  font-size: 16px;
  border: none;
  font-family: 'Montserrat-semibold';
  transition: 0.5s;
  border: 1px solid #2aa7df;
  color: #ffffff;
  border-radius: 50px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
}

</style>
