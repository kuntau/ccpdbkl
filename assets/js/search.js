var jsonURL = '/assets/location_rate.json';
var app = new Vue({
  el: '#search',
  data: {
    location_filter: '',
    location_rates: [],
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
      if (!self.location_filter) return '';
      return self.location_rates.filter(function(location, i) {
        var filter = self.location_filter.toLowerCase();
        var location_name = location[3].toLowerCase();
        // console.log(location[3] + '  +  ' + filter);
        return (~location_name.indexOf(filter) ? true : false );
      })
    }
  }
})
