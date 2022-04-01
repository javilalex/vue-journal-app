<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <span class="fa fa-trash-alt"></span>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <span class="fa fa-upload"></span>
      </button>
    </div>
  </div>
  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy"></textarea>
  </div>

  <float-action-btn icon="fa-save" />

  <img
    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    alt="Entry Picture"
    class="img-thumbnail"
  />
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
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
textarea {
  font-size: 1.5rem;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>