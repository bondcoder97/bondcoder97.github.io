<template>
  <header class="page_header">
    <h2 class="codename" @click="goto_page('/', '')">
      <font-awesome-icon icon="fa-brands fa-github" /> bondcoder97
    </h2>
    <h2 class="page_name">
      <template v-if="current_page">{{current_page}}</template>
    </h2>
  </header>
</template>

<script>
export default {
  computed:{
    current_page(){
      return this.$store.state.current_page;
    }
  },
  methods:{
    goto_page(path, page_name){
      if(this.$route.path === path) return;
      this.$router.push(path);
      this.$store.commit("set_current_page", page_name);
    }
  }
}
</script>

<style lang="scss">
.page_header{
  background-color: #3f6c45;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  color: white;
}
.codename, .page_name{
  font-size: 30px;
}

.codename{
  cursor: pointer;
}


//mobile
@media (max-width: 480px) {
  .page_header{
    justify-content: center;
  }

  .codename{
    font-size: 25px;
  }

  .page_name{
    display: none;
  }
}
</style>