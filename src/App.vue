<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400');
@import url('https://fonts.googleapis.com/css?family=Oswald');

$bg-grey: #f2f2f2;

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Work Sans', sans-serif;
  color: #444;
}

h2 {
  color: #111111;
  font-family: Oswald;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}

.btn {
  padding: 15px 25px;
  border: none;
  outline: none;
  font-family: Oswald;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  text-decoration: none;
}

.btn--green {
    color: #ffffff;
    background-color: #68b738;
    &:hover {
        background-color: #5eaa2f;
    }
}

.btn--grey {
  color: #444;
  background-color: #f2f2f2;
  &:hover {
      background-color: #ebebeb;
  }
}

.wrapper {
  display: flex;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
}
</style>
