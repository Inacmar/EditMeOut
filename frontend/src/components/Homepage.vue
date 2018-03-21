<template>
  <div class="wrap-banner">
    <vue-particles class="particles-js" color="#DC143C"/>

    <div class="main-title">


      <h2>EDIT ME OUT</h2>
      <p class="subtitle"> If you ever wanted to photoshop or get your images photoshoped </p>
      <p class="subtitle">This is the right place for you </p>

      <div class="input"></div>

      <h1>Become a:</h1>
      <div class="row">

        <div class="col-md-1"></div>
        <div class="col-3 col-md-3 offset-2">
          <b-btn href="/#/bootstrap/" size="lg" variant="outline-success">
            Client
          </b-btn>
        </div>
        <div class="col-3 col-md-2">
          <b-btn size="lg"  variant="outline-success">
            Designer
          </b-btn>
        </div>
        <div class="col-md-1"></div>
      </div>

      <h1>Go to homepage:</h1>
      <b-btn size="lg" variant="outline-success">
        Take me to the website
      </b-btn>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
  p.subtitle {
    font-size: 1.7rem;
    margin: 0;
  }

  .input {
    padding-bottom: 20%;
  }

  .wrap-banner {
    /* position: relative; */
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .h1 {
    bottom: 25%;
  }

  .main-title {
    bottom: 25%;
    position: absolute;
    color: #fff;
    z-index: 999;
  }

  .particles-js {
    background-image: url('../assets/background.jpg');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-title h2 {
    margin-bottom: 3%;
    font-size: 7rem;
    font-family: Teko, sans-serif;
    text-shadow: 8px 8px #000;
    text-transform: uppercase;
  }

  @media (max-width: 767px) {
    .main-title h2 {
      margin-bottom: 25%;
      font-size: 3rem;
    }

    .main-title p.subtitle {
      margin-bottom: 5%;
      font-size: 1rem;
    }

    .main-title {
      position: absolute;
      color: #fff;
      z-index: 999;
    }
  }
</style>
