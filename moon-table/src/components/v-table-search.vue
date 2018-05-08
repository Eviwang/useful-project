<template id="v-table-search">
        <!-- Search -->
        <div class="row">
            <div class="col-lg-12">
                <!-- Card -->
                <div class="widget-container fluid-height clearfix">
                    <div class="widget-content">
                        <!-- Entries Search group -->
                        <div class="row">
                            <form class="ofv" @submit="handleSubmit">
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <search-group placeholder="WO #" v-model="woNum"></search-group>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <search-group placeholder="Store #" v-model="store"></search-group>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="search-group">
                                        <select class="form-control input-sm search-select" v-model="selectedStatusId">
                                            <option value="" selected="selected">Filter by Status</option>
                                            <option v-for="s in woStatus" :value="s.id">{{s.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="search-group">
                                        <button type="submit" class="btn btn-primary btn-long btn-sm" id="searchBtn"><i class="fa fa-search"></i>Submit</button>
                                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#advanSearch"><i class="fa fa-bars"></i>Test</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- End Search group -->
                    </div>
                </div>
                <!-- End Card -->
            </div>
        </div>
        <!-- End Search -->
    </template>
<script>
import SearchGroup from './search-input.vue'
export default {
  data () {
    return {
      woNum: '33',
      store: 'store',
      selectedStatusId: '',
      woStatus: [
        {
          id: 0,
          name: 'All'
        },
        {
          id: 1,
          name: 'Unscheduled'
        }
      ]
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.$emit('submit', {
        woNum: this.woNum,
        store: this.store,
        selectedStatusId: this.selectedStatusId
      })
    }
  },
  components: {
    'SearchGroup': SearchGroup
  }
}
</script>
