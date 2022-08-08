<template>
<div>
  <!-- <section class="sidebar full" aria-labelledby="sidebar-title">
    <button class="btn btn-close-sidebar" @click="toggleSidebar">x</button>
    <h3 class="sidebar-title">Architectural and decorative lighting</h3>
    <div class="sidebar-tag tag-text">Design</div>
  <p class="sidebar-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque sint
    architecto omnis rerum. Fugiat, quaerat nisi quia reprehenderit architecto
    ullam eum ratione aliquid harum ea exercitationem necessitatibus blanditiis
    doloremque.
  </p>
  </section> -->
</div>
</template>

<script>
export default {
  name: "Cards",

  methods: {
    toggleSidebar() {
      document.body.classList.toggle("sidebar-open");
    },
  },
};
</script>
