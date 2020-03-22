<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  *, *:after, *:before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: .5s ease-in-out; /* добавим плавность переходов для всех элементов страницы*/
  }

  #app {
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    padding: 0 15px;
  }
</style>
