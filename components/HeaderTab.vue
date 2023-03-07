<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="nav">
    <b-navbar-brand href="/" class="tab-name">なしのお菓子部屋</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</template>
<script>
// import HomeTitle from './HomeTitle.vue'
// import Top from './Top.vue'
export default {
  // _components: {
  //   HomeTitle,
  //   Top,
  // },
  // get components() {
  //   return this._components
  // },
  // set components(value) {
  //   this._components=value
  // },
  data() {
    return {
      // title: ['W','e','l','c','o','m','e','   ','t','o',' ','s','w','e',],
      // apple: ['apple', 'banana', 'pain']
 
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.nav {
  background-color: #b18ea6;
}

.tab-name {
  font-family: 'Pacifico', 'Homemade Apple', cursive;
  font-size: 20px;
}

.topAnimation {
  opacity: 0;
  animation: fadeIn 3s ease-in-out;
  animation-delay: 5s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}


</style>
