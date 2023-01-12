<template>
  <header>
    <NavBar></NavBar>
  </header>

  <body>
    <section class="carousel">
      <carousel @next="next" @prev="prev">
        <carouselSlide
          v-for="(slide, index) in slides"
          :key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
        >
          <img :src="slide" />
        </carouselSlide>
      </carousel>
    </section>

    <section class="HomePageText">
      <HomePageText></HomePageText>
    </section>

    <section class="HomePageVideo">
      <HomePageVideo></HomePageVideo>
    </section>
  </body>

  <footer>
    <HomePageFooter></HomePageFooter>
  </footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import carousel from "../components/Carousel.vue";
import carouselSlide from "../components/CarouselSlide.vue";
import HomePageText from "../components/HomePageText.vue";
import HomePageVideo from "../components/HomePageVideo.vue";
import HomePageFooter from "../components/Footer.vue";

import foto1 from "../assets/vallarannevado.jpeg";
import foto2 from "../assets/masnievevallaran.jpeg";
import foto3 from "../assets/cascadavallaran.jpeg";
import foto4 from "../assets/pradovallaran.jpeg";
import foto5 from "../assets/riovallaran.jpeg";

export default {
  name: "app",
  components: {
    NavBar,
    carousel,
    carouselSlide,
    HomePageText,
    HomePageVideo,
    HomePageFooter,
  },
  data() {
    return {
      slides: [foto1, foto2, foto3, foto4, foto5],
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "montserrat", sans-serif;
}

.carousel img {
  width: 1500px;
  height: 700px;
}

.carousel {
  margin-bottom: 30px;
  margin-top: -25px;
}

.HomePageText {
  margin-bottom: 30px;
}

.HomePageVideo {
  margin-bottom: 30px;
}
</style>
