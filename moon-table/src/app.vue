<template>
  <div class="all-doc">
    <div class="main-content">
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
export default {
  data () {
    return {
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
    }
  },
  components: {
    'VTableSearch': VTableSearch,
    'VTable': VTable
  }
}
</script>

