<template>
  <div class="bigContainer">
    <div class="izq">
      <iframe
        class="iframe"
        src="https://www.instagram.com/p/Cm3ZoMbKuIw/embed"
        frameborder="0"
      ></iframe>
    </div>
    <div class="centro">
      <img src="../assets/logoVallAran.png" />
      <img src="../assets/LogoConsell.png" />
      <p>+34 973 64 06 88</p>
      <p>web.torisme@aran.org</p>
      <p>Plaça d'aran, 1-2 25530 Vielha</p>
    </div>

    <div class="drch">
      <img src="../assets/LogoLleida.png" />
      <img src="../assets/LogoPirinees.png" />
    </div>
  </div>
</template>

<script></script>

<style>
.bigContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.bigContainer .iframe {
  width: 260px;
  height: 300px;
}

.bigContainer .izq {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bigContainer .centro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
}

.bigContainer .drch {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.centro img {
  width: 200px;
  width: 200px;
}

.drch img {
  width: 300px;
  width: 300px;
}
</style>
