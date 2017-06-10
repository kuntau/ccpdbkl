var jsonURL = '/assets/location_rate.bak';
var app = new Vue({
  el: '#search',
  data: {
    message: 'hi',
    location_filter: 'amp',
    location_rates: [],
    location_rate: [
      [1, "ZON A", "KUALA_LUMPUR", "Ampang", "1.50", "RM 300.00 [Harga tanpa GST] + RM 18.00 [GST]", "Permohonan Lama:\r((RM400.00 [Kadar Sebulan] + RM 24.00 [GST]) X [bilangan bulan]) + (RM 215.00 [Barriers stand] + RM 12.90 [GST])) \rPermohonan Baru:\r+ RM 800 (Cagaran 2 bulan)"],
      [2, "ZON A", "WANGSA_MAJU", "Bandar Baru Wangsa Maju", "1.50", "RM 300.00 [Harga tanpa GST] + RM 18.00 [GST]", "Permohonan Lama:\r((RM400.00 [Kadar Sebulan] + RM 24.00 [GST]) X [bilangan bulan]) + (RM 215.00 [Barriers stand] + RM 12.90 [GST])) \rPermohonan Baru:\r+ RM 800 (Cagaran 2 bulan)"],
      [3, "ZON A", "", "Bandar Tasik Selatan", "1.50", "RM 300.00 [Harga tanpa GST] + RM 18.00 [GST]", "Permohonan Lama:\r((RM400.00 [Kadar Sebulan] + RM 24.00 [GST]) X [bilangan bulan]) + (RM 215.00 [Barriers stand] + RM 12.90 [GST])) \rPermohonan Baru:\r+ RM 800 (Cagaran 2 bulan)"],
      [4, "ZON A", "", "Bedford Park", "1.50", "RM 300.00 [Harga tanpa GST] + RM 18.00 [GST]", "Permohonan Lama:\r((RM400.00 [Kadar Sebulan] + RM 24.00 [GST]) X [bilangan bulan]) + (RM 215.00 [Barriers stand] + RM 12.90 [GST])) \rPermohonan Baru:\r+ RM 800 (Cagaran 2 bulan)"],
      [5, "ZON A", "KUALA_LUMPUR", "Bukit Bintang", "1.50", "RM 300.00 [Harga tanpa GST] + RM 18.00 [GST]", "Permohonan Lama:\r((RM400.00 [Kadar Sebulan] + RM 24.00 [GST]) X [bilangan bulan]) + (RM 215.00 [Barriers stand] + RM 12.90 [GST])) \rPermohonan Baru:\r+ RM 800 (Cagaran 2 bulan)"],
    ],
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      var self = this;
      axios.get(jsonURL)
      .then(function(response) {
        self.location_rates = response.data;
        // console.log(response.data);
      })
    }
  },
  computed: {
    filtered_loc: function() {
      var self = this;
      // return self.location_rates;
      return self.location_rates.filter(function(location, i) {
        var filter = self.location_filter.toLowerCase();
        var location_name = location[3].toLowerCase();
        // console.log(location[3] + '  +  ' + filter);
        return (~location_name.indexOf(filter) ? true : false );
      })
    }
  }
})
