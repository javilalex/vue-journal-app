<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'EntryView', params: { id: 1 } })"
  >
    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <!-- description -->
    <div class="entry-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt vero
      ullam omnis? Quibusdam, ipsam veritatis dolor omnis ad hic magnam earum
      rerum molestiae accusamus? Eius quisquam corporis officiis rem temporibus.
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid var(--cs-primary);
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 0.8rem;
  }
}
</style>