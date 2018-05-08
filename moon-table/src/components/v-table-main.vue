    <template id="v-table">
        <!-- Table -->
        <div class="table-responsive-vertical">
            <table class="table table-striped table-condensed table-hover table-bordered">
                <!--<theader is="v-table-header"></theader>-->

                <v-table-header :headers="headers" @sort="handleSort"></v-table-header>
                <tbody>
                  <slot name="v-tbody"></slot>
                </tbody>
            </table>
        </div>
        <!-- End Table -->
    </template>

<script>
import VTableHeader from './v-table-header.vue'
export default{
  props: {
    headers: {
      type: Object,
      require: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleSort (sortObj) {
      this.$emit('sort', sortObj);
    }
  },
  components: {
    'v-table-header': VTableHeader
  }
}
</script>
