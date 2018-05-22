<template>
  <div class="all-doc">
    <div class="main-content">
      <input v-model="txt"/>
      <notification content="test"></notification>


      <tabs :value="tabIndex" @change="handleTabsChange">
        <tab index="1" content="tab-1">
          tab1 {{txt}}
        </tab>
        <tab index="2" content="tab-2">
          tab2
        </tab>
      </tabs>

      <v-table-search @submit="handleSubmit"></v-table-search>
      <v-table
               @page-index-change = "handlePageIndexChange"
               @sort = "handleSort"
               :total-count="totalCount"
               >
      </v-table>
    </div>
  </div>
</template>

<script>
import VTableSearch from './components/v-table-search.vue'
import VTable from './components/v-table.vue'
import Notification from './components/notification/notification.vue'

export default {
  data () {
    return {
      tabIndex: '1',
      txt: '',
      totalCount: 99
    }
  },
  methods: {
    handleSubmit (query) {
      console.log(query);
    },
    handleSort (sortObj) {
      console.log('sort Obj:', sortObj)
    },
    handlePageIndexChange (currentPageIndex) {
      console.log('page index:' + currentPageIndex)
    },
    handleTabsChange (index) {
      this.tabIndex = index;
      console.log(index)
    }
  },
  components: {
    'VTableSearch': VTableSearch,
    'VTable': VTable,
    'Notification': Notification
  }
}
</script>

