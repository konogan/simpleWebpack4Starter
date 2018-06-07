<template>

  <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle">
        {{stitle}} a moi
      </h2>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      title: "Mon titre de header",
      stitle: "Mon sous titre de header"
    };
  }
};
</script>

<style scopped>
</style>
