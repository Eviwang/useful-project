<script>
export default {
  name: 'Tab',
  props: {
    index: {
      type: String,
      require: true
    },
    content: {
      type: String
    }
  },
  mounted () {
    this.$parent.panes.push(this);
  },
  methods: {
    handleClick (e) {
      console.log(e, this.index)
      this.$parent.handleChange(this.index);
    }
  },
  computed: {
    active () {
      return this.index === this.$parent.value;
    }
  },
  render () {
    var content = this.$slots.tab || this.content;
    var classObj = {
      'v-tab-item': true,
      active: this.active
    }
    console.log('render', this.index, content)
    return (<li onClick={this.handleClick} class={classObj}>
      {content}
    </li>)
  }
}
</script>

<style>
.v-tab-item{
  padding: 5px;
  display:inline-block;
  border: solid 1px #ccc;
  color:#3071d4;
  list-style:none;
  cursor: pointer;
}
.v-tab-item.active{
  color:red;
}

</style>
