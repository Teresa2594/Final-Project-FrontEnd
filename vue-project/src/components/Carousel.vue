<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="next">
      <i class="fa-solid fa-chevron-right fa-3x"></i>
    </button>
    <button @click="prev" class="previous">
      <i class="fa-solid fa-chevron-left fa-3x"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  display: inline-block;
  text-align: center;
}

.next:active,
.next:hover,
.previous:active,
.previous:hover {
  outline: none;
  cursor: pointer;
}

.next {
  height: 40px;
  width: 50px;
  border: none;
  background-color: transparent;
  color: white;
  border-radius: 50px;
  position: absolute;
  top: 45%;
  right: 0%;
  margin-right: 45px;
}

.previous {
  height: 40px;
  width: 50px;
  border: none;
  background-color: transparent;
  color: white;
  border-radius: 50px;
  position: absolute;
  top: 45%;
  left: 0%;
  margin-left: 45px;
}
</style>
