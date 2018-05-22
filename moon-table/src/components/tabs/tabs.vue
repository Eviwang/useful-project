<script>
import TabContainer from './tab-container.vue'
export default {
  name: 'Tabs',
  components: {
    TabContainer
  },
  props: {
    value: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      panes: []
    }
  },
  methods: {
    handleChange (index) {
      this.$emit('change', index)
    }
  },
  render () {
    return <div class="v-tab">
      <ul>
        {this.$slots.default}
      </ul>
      <tab-container panes={this.panes}></tab-container>
    </div>
  }
}
</script>



<style>
.v-tab{
  width:400px;
}
</style>
