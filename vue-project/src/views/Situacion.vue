<template>
  <header>
    <NavBar></NavBar>
  </header>

  <body>
    <div class="google-maps">
      <iframe
        class="map"
        width="1000"
        height="500"
        src="https://maps.google.com/?ie=UTF8&t=m&ll=42.7028706,0.7907158&spn=0.003381,0.017231&z=16&output=embed"
      ></iframe>
    </div>
    <div class="text">
      <div class="text1">
        <p>
          Situada en el Pirineo central, la Val d’Aran tiene una extensión de
          620 Km. y un 30% de su territorio por encima de
        </p>
        <p>
          los 2.000 m. de altitud. Limita al norte con Francia (Ariège), al sur
          con la Alta Ribagorza y Aragón, al este con el
        </p>
        <p>
          Pallars Sobirà, y al oeste, de nuevo, con Aragón (Benasque) y Francia
          (Haute Garonne). Este singular Valle de
        </p>
        <p>
          vertiente atlántica tiene el Garona como rio principal, el cual se
          abre paso por tierras aquitanas para desembocar
        </p>
        <p>en Burdeos (Francia).</p>
      </div>
      <div class="text2">
        <div class="pr1">
          <p>
            Las altas montañas que rodean la Val d’Aran forman una barrera
            natural, situación que condiciona, no solo su climatología sino
            también sus relaciones con otros
          </p>
          <p>
            pueblos y su propia historia. Durante siglos, las aguas del Garona
            hacia Francia por los relieves más suaves del Bajo Arán, han sido su
            único puente con el
          </p>
          <p>
            exterior, hecho que ha mantenido y consolidado la lengua y la
            cultura occitanas en este territorio integrado administrativamente
            en Cataluña.
          </p>
        </div>

        <div class="pr1">
          <p>
            Otra muestra de la estrecha relación con el país vecino es el
            privilegio de la Querimònia, que le fue concedido en el siglo XIV
            por el rey Jaime II a cambio de su
          </p>
          <p>
            integración en la corona Catalano-Aragonesa. Mediante esta
            prerrogativa, se respetaba su autonomía organizativa y
            administrativa, con sus ‘conselhers’ y su ‘Síndic’.
          </p>
          <p>
            También permitió que la Val d’Aran fuera administrada
            eclesiásticamente por el obispado de Comenge (Francia) hasta finales
            del siglo XVIII.
          </p>
        </div>

        <div class="pr1">
          <p>
            La inauguración de la carretera del puerto de la Bonaigua en 1924,
            fue un primer paso en la comunicación con Cataluña, dado que hasta
            entonces los puertos de montaña
          </p>
          <p>
            que comunican el valle con Cataluña y Aragón eran inaccesibles
            durante el invierno y muy dificultosos el resto del año. Pero no fue
            hasta 1948 cuando el túnel de Vielha
          </p>
          <p>
            abrió paso masivo a los vehículos, permitiendo así la conexión con
            el territorio español durante todo el año.
          </p>
        </div>
      </div>
    </div>
  </body>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.google-maps {
  display: flex;
  justify-content: center;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "montserrat", sans-serif;
  padding-top: 70px;
  padding-bottom: 70px;
  text-align: justify;
}

.text1 {
  font-size: x-large;
  color: darkturquoise;
}

.text2 {
  font-size: medium;
  color: darkgrey;
  padding-top: 50px;
}
.pr1 {
  padding-bottom: 20px;
}
</style>
