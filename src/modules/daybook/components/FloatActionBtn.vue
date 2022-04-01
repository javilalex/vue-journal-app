<template>
  <button class="btn btn-primary rounded-circle">
    <span class="fa fa-2x" :class="icon"></span>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
}
</style>