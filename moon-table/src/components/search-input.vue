<template id="search-group">
  <div class="search-group">
    <input type="text" class="form-control input-sm" :placeholder="placeholder" :value="value" @input="$emit('input',$event.target.value)">
    <a href="javascript:void(0)" tabindex="-1" class="close" @click="handlerClear">
      <i class="fa fa-close f12"></i>
    </a>
  </div>
</template>


<script>
export default {
  props: {
    value: {
      type: String | Number
    },
    placeholder: {
      type: String,
      require: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handlerClear () {
      this.$emit('clearValue')
    },
    handleInput () {
      this.$emit('input', this.value)
    }
  }
}
</script>
