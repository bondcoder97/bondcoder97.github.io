<template>
  <div class="home">
      <h3>Welcome to my Github page!</h3>
      <div class="brief_description info">
        <p>I am <span class="important_text">bondcoder</span>.</p> 
        <p>Coding is my work and hobby.</p>
        <p>In my work I am building backend and frontend for web and desktop apps.</p>
        <p>I like to learn and practice something new.</p>
        <p>A lot of programming trends attract my attention.</p>
      </div>
      <h3>This page must help me as</h3>
      <div class="page_purpose info">
        <ul>
          <li>
            <span class="important_text page_link" @click="goto_page('repositories', 'Repositories Guide')">Repositories Guide</span> 
                  — To order chaos in my repositories :)</li>
          <li>
            <span class="important_text page_link" @click="goto_page('skills_tracker', 'Skills Tracker')">Skills Tracker</span> 
                  — To track my current skills.</li>
          <li>
            <span class="important_text page_link" @click="goto_page('learn_roadmap', 'Learn Roadmap')">Learn Roadmap</span> 
                  — To store list of skills which I am considering as interesting for learning.</li>
          <li>
            <span class="important_text page_link" @click="goto_page('sources_list', 'Sources List')">Sources List</span> — To store links on useful sources.</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    goto_page(path, page_name){
      if(this.$route.path === path) return;
      this.$router.push(path);
      this.$store.commit("set_current_page", page_name);
    }
  }
}
</script>
<style lang="scss" scoped>

.important_text{
  border-bottom: 1px solid #cb0000;
}

ul{
  list-style-type: square;
  padding-left: 2%;
}

.page_link{
  cursor: pointer;

  &:hover{
    border-style: dashed;
  }
}

@import "@/assets/styles/scss/media.scss";
</style>
