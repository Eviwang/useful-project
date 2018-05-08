<template id="v-table-footer">
        <!-- Pagination -->
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <p class="paginate-entries">
                    Showing&nbsp;
                    <strong>{{(currentPageIndex - 1 ) * pageSize + 1}}</strong>&nbsp;to&nbsp;
                    <strong>{{ isLast ? totalCount : pageSize * currentPageIndex }}</strong>&nbsp;of&nbsp;
                    <strong>{{totalCount}}</strong>&nbsp;entries
                </p>
            </div>
            <div class="col-md-6 col-xs-12">
                <ul class="paginate paging-full-numbers">
                    <li :class="{ disabled : isFirst }">
                        <a @click="gotoFirst">First</a>
                    </li>
                    <li :class="{ disabled : isFirst }">
                        <a @click="gotoPre">Previous</a>
                    </li>

                    <li v-show="isShowPreDot" class="disabled">
                        <a>...</a>
                    </li>

                    <li v-for="num in showNumbers" :class="{ active : num === currentPageIndex }">
                      <a @click="gotoIndex(num)">{{num}}</a>
                    </li>
                    <li v-show="isShowNextDot"  class="disabled">
                        <a>...</a>
                    </li>
                    <li :class="{ disabled : isLast }">
                        <a @click="gotoNext">Next</a>
                    </li>
                    <li :class="{ disabled : isLast }">
                        <a @click="gotoLast" :class="{ disabled : isLast }" >Last</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End Pagination -->
    </template>

    <script>
    const FIRST_INDEX = 1
    export default {
      props: {
        pageSize: {
          require: true,
          type: Number
        },
        totalCount: {
          require: true,
          type: Number
        }
      },
      data () {
        return {
          currentPageIndex: FIRST_INDEX
        }
      },
      methods: {
        gotoFirst () {
          this.currentPageIndex = FIRST_INDEX
        },
        gotoIndex (index) {
          this.currentPageIndex = index
        },
        gotoPre () {
          this.currentPageIndex -= 1
        },
        gotoNext () {
          this.currentPageIndex += 1
        },
        gotoLast () {
          this.currentPageIndex = Math.ceil(this.totalCount / this.pageSize)
        },
        getTotalPageCount () {
          return Math.ceil(this.totalCount / this.pageSize)
        }
      },
      watch: {
        currentPageIndex (newIndex, oldIndex) {
          this.$emit('page-index-change', newIndex)
        },
        pageSize (size) {
          this.gotoFirst()
        }
      },
      computed: {
        showNumbers () {
          var nums = []
          if (this.getTotalPageCount() === 1) {
            nums = [1]
          } else if (this.isFirst) {
            nums = [1, 2]
          } else {
            nums = [this.currentPageIndex - 1, this.currentPageIndex]
          }
          return nums
        },
        totalPageCount () {
          return this.getTotalPageCount()
        },
        isFirst () {
          return this.currentPageIndex === FIRST_INDEX
        },
        isLast () {
          return this.currentPageIndex === this.totalPageCount
        },
        isShowPreDot () {
          return this.currentPageIndex >= 3
        },
        isShowNextDot () {
          return this.currentPageIndex <= this.totalPageCount - 1
        }
      }
    }
    </script>
