<script>
export default {
  props: {
    panes: {
      type: Array
    }
  },
  computed: {
    activePane () {
      return this.panes.filter(x => x.active)[0];
    }
  },
  render () {
    var content = this.activePane && this.activePane.$slots.default;
    console.log('tab-container-render', content)
    return <div class="v-tab-content">
      {content}
    </div>
  }
}
</script>
