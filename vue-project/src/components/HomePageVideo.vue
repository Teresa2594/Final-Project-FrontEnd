<template>
  <div class="container">
    <img src="../assets/paisajeHome.jpeg" class="imagen-fondo" />
    <div class="izquierda">
      <img src="../assets/guidaran.png" />
      <a
        href="https://apps.apple.com/es/app/guidaran/id1510742827"
        target="_blank"
        >Descarga en App Store</a
      >
      <a
        href="https://play.google.com/store/apps/details?id=com.alvaroarinocabau.guidaran&gl=ES"
        target="_blank"
        >Descarga en Google</a
      >
    </div>
    <div class="centrado">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/43_HevFLWts"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="derecha">
      <img src="../assets/foment.png" />
      <img
        src="../assets/logo-era-porta-800725f2be175189fa739e6c42bf4ffa.jpeg"
      />
      <img src="../assets/deportur1-b01a0061161c7f5e82df124553717e1e.png" />
      <img
        src="../assets/mountainlines-85393d5c59057ffd7b3c6727faf76443.jpeg"
      />
    </div>
  </div>
</template>

<script></script>

<style>
.container {
  margin-top: 30px;
  position: relative;

  text-align: center;
}
.container .imagen-fondo {
  width: 1500px;
  height: 700px;
  opacity: 0.6;
  margin-left: -25px;
}

.izquierda {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-0%, -50%);
  padding-left: 50px;
}

.izquierda img {
  width: 350px;
  height: 400px;
}

.izquierda a {
  margin-top: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: darkturquoise;
  color: aliceblue;
  height: auto;
  text-decoration: none;
  font-weight: 500;
  font-size: large;
}

.izquierda a:hover {
  background-color: rgba(227, 227, 227, 0.986);
}

.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.derecha {
  position: absolute;
  top: 25%;
  right: 0%;
  transform: translate(-25%, -0%);
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  padding-left: 10px;
}

.derecha img {
  width: 300px;
  height: 100px;
}
</style>
