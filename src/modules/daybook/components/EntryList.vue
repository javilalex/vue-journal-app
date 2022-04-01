<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="buscar entrada" />
    </div>
    <div class="entry-scoll-area">
      <entry-item v-for="entry in 100" :key="entry"></entry-item>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    EntryItem: defineAsyncComponent(() =>
      import(/* WebpackChuckName: 'EntryItem' */ "./EntryItem.vue")
    ),
  },
};
</script>
<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scoll-area {
  height: calc(100vh - 120px);
  overflow-y: scroll;
}
</style>