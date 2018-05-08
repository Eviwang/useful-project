<template>
  <div class="search-group">
    <select class="form-control input-sm search-select">
      <option value="" selected="selected">{{}}</option>
      <option v-for="s in options" :value="s.id">{{s.name}}</option>
    </select>
  </div>
</template>


<script>
export default {
  props: {
    options: {
      type: Array,
      require: true
    },
    txt: {
      require: true
    }
  }
}
</script>

