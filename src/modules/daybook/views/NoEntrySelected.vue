<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <float-action-btn />
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FloatActionBtn: defineAsyncComponent(() =>
      import(
        /* WebpackChunkName: 'FloatActionBtn' */ "@/modules/daybook/components/FloatActionBtn.vue"
      )
    ),
  },
};
</script>
<style lang="scss" scoped>
div {
  height: 100%;
}
</style>