<template>
    <div class="menu-item" @click="isOpen = !isOpen">
      <router-link :to="header.link">
        {{ header.title }}
      </router-link>
      
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen" >
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <router-link :to="item.link">{{ item.title }}</router-link>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'dropdown',
    props: ['header', 'items'],
    data () {
      return {
        isOpen: false
      }
    }
  }
  </script>
  
  <style>
  nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
  }
  nav .menu-item .sub-menu {
    position: absolute;
    background-color: white;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all .1s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>