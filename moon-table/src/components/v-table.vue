 <template>
  <div class="row">
    <div class="col-lg-12">
      <div class="widget-container fluid-height clearfix">
        <no-data></no-data>
        <div class="widget-content" id="justDemo">
          <loading></loading>
          <v-table-page-size :page-size="pageSize" @page-size-change = "handlePageSizeChange"></v-table-page-size>
          <v-table-main :headers="headers" @sort="handleSort">

            <tr slot="v-tbody" v-for="item in items">
                <td data-title="WO #" class="wsn">
                    <span class="priority label label-danger" title="2 h response">2H</span><a href="wo-maintenance-detail.html">WO135810</a>
                </td>
                <td data-title="Call Time">2/27/2014 2:00:00 PM</td>
                <td data-title="Customer">Family Dollar</td>
                <td data-title="Store #">4356</td>
                <td data-title="City">Fairburn</td>
                <td data-title="State">GA</td>
                <td data-title="Service Category">Refrige - Product Stop</td>
                <td data-title="Service Type">Coolers/Freezers</td>
                <td data-title="Problem Code">Cooler</td>
                <td data-title="Status">Work Complete Pending Vendor Invoice</td>
                <td data-title="Service Rating"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-grey"></i><i class="fa fa-star text-grey"></i><i class="fa fa-star text-grey"></i></td>
            </tr>
          </v-table-main>
          <v-table-footer :page-size="pageSize" :total-count="totalCount" @page-index-change="handlePageIndexChange"></v-table-footer>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<th class="sorting">WO #</th>
        <th>Call Time</th>
        <th>Customer</th>
        <th>Store #</th>
        <th>City</th>
        <th>State</th>
        <th>Service Category</th>
        <th>Service Type</th>
        <th>Problem Code</th>
        <th>Status</th>
        <th>Service Rating</th>-->
<script>

import NoData from './no-data.vue'
import Loading from './loading.vue'
import VTablePageSize from './v-table-page-size.vue'
import VTableMain from './v-table-main.vue'
import VTableFooter from './v-table-footer.vue'

export default {
  name: 'VTable',
  components: {
    'no-data': NoData,
    'loading': Loading,
    'v-table-page-size': VTablePageSize,
    'v-table-main': VTableMain,
    'v-table-footer': VTableFooter
  },
  props: {
    pageSize: {
      type: Number,
      default: 12
    },
    totalCount: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      headers: {
        'WO #': 'id',
        'Call Time': 'callName',
        'Customer': false,
        'Store #': false,
        'City': false,
        'State': false,
        'Service Category': false,
        'Service Type': false,
        'Problem Code': false,
        'Status': false,
        'Service Rating': false
      },
      items: [
        {

        }
      ]
    }
  },
  methods: {
    handlePageSizeChange (pageSize) {
      this.pageSize = pageSize;
      this.$emit('page-size-change', pageSize);
    },
    handleSort (sortObj) {
      this.$emit('sort', sortObj);
    },
    handlePageIndexChange (pageIndex) {
      this.$emit('page-index-change', pageIndex);
    }
  }
}
</script>
