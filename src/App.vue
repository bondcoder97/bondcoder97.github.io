<template>
  <div class="container">
    <page-header />
    <router-view class="page" />
  </div>
</template>
<script>
import PageHeader from "@/components/page_header/page_header.vue";

export default {
  components: {
    "page-header": PageHeader
  },
  mounted(){
    this.$router.beforeEach((to, from, next)=>{
      if(to.name === "Home") this.$store.commit("set_current_page", "");
      next();
    });
  }
};
</script>


<style lang="scss">
@import "./assets/styles/css/reset.css";
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat&display=swap');

.container{
  background-color: #e4ea8c;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.page{
  padding: 2% 10%;
}

.info{
  color: #50312f;
  line-height: 1.5;
  padding: 2%;
  border-radius: 10px;
  font-size: 20px;
  border: 1px solid #50312f;
  margin-top: 1%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

h3{
  font-family: 'Comfortaa', cursive;
  color: #50312f;
  text-align: center;
  font-size: 40px;
  margin-top: 3%;

  &:first-child{
    margin-top: 0;
  }
}

h4 a{
    border-bottom: 1px solid #cb0000;
}

a{
    text-decoration: none;
    color: #cb0000;

    &:visited, &:active{
        color: #cb0000;
    }
}
</style>
