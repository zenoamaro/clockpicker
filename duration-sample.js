
var $clockpickerDuration = $('.clockpicker-duration').clockpicker({
	placement: 'right',
	twelveHour: true,
	hourStep: 0.5,
	minuteStep: 30,

  init: function() {
    console.log("colorpicker initiated");
  },
  beforeShow: function() {
    console.log("before show");
  },
  afterShow: function() {
    console.log("after show");
  },
  beforeHide: function() {
    console.log("before hide");
  },
  afterHide: function() {
    console.log("after hide");
  },
  beforeHourSelect: function() {
    console.log("before hour selected");
  },
  afterHourSelect: function() {
    console.log("after hour selected");
  },
  beforeDone: function() {
    console.log("before done");
  },
  afterDone: function() {
    console.log("after done");
  },
  beforeClear: function() {
    console.log("before clear");
  },
  afterClear: function() {
    console.log("after clear");
  },
  beforeChange: function(time) {
    console.log("before change: " + time);
  },
  afterChange: function(time) {
    console.log("after change: " + time);
  }
});

$clockpickerDuration.find('input').change(function(){
  console.log('duration value', this.value);
});

var clockpickerDuration = $clockpickerDuration.data('clockpicker');

console.log('Clockpicker API', Object.keys(clockpickerDuration));

clockpickerDuration.now();
