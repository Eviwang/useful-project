<template id="v-table-page-size">
  <div class="row">
    <div class="col-md-6 col-xs-12">
      <label class="page-select">
        Show&nbsp;
        <select size="1" :value="pageSize" @change="$emit('page-size-change',Number($event.target.value))">
          <option value="12" selected="selected">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>&nbsp;entries
      </label>
    </div>
    <slot name="export-button">

    </slot>
  </div>
</template>

<script>
export default {
  props: {
    pageSize: {
      require: true,
      type: Number
    }
  }
}
</script>
