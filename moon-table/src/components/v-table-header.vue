<template id="v-table-header">
  <thead>
    <slot>
      <tr>
          <th v-for="(h,i) in newHeaders" :class="h.sortedClass" @click="handleSort(h)">{{h.showName}}</th>
      </tr>
    </slot>
  </thead>
</template>

<script>
const DEFAULT = 0
const DESC = 1
const ASC = 2
const SORT_OBJ = {
  [DEFAULT]: 'sorting',
  [ASC]: 'sorting-asc',
  [DESC]: 'sorting-desc'
}
export default {
  props: {
    headers: Object,
    require: true
  },
  data () {
    return {
      newHeaders: Object.keys(this.headers).map(prop => {
        return {
          sortName: this.headers[prop],
          showName: prop,
          isSorted: !!this.headers[prop],
          state: DEFAULT,
          sortedClass: this.headers[prop] ? 'sorting' : ''
        }
      })
    }
  },
  methods: {
    handleSort (item) {
      if (!item.isSorted) return
      this.newHeaders.forEach(x => {
        if (x !== item && x.isSorted) {
          x.state = DEFAULT
          x.sortedClass = SORT_OBJ[x.state]
        }
      })

      if (item.state === DEFAULT) {
        item.state = DESC
      } else {
        item.state = item.state === DESC ? ASC : DESC
      }
      item.sortedClass = SORT_OBJ[item.state]

      var args = {
        sortName: item.sortName,
        state: item.state
      }
      this.$emit('sort', args)
    }
  }
}
</script>
