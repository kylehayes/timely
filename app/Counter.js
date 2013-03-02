/* Counter.js */

define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(Counter);

    function Counter() {
      this._seconds = 0;
      this._minutes = 0;
      this._hours = 0;

      // custom functions
      this.pad = function(sec) {
        return sec < 10 ? "0" + sec : sec;
      };

      this.start = function() {
        this.trigger(document, 'HighResolutionTimer#start');
        console.log('counter started');
      };

      this.lap = function() {
        console.log('lap');
      };

      this.stop = function() {
        this.trigger(document, 'HighResolutionTimer#stop');
        console.log('counter stopped');
      };

      this.onCounterChange = function() {
        this.trigger(document, "counter#changed", {
          s: this.pad(this._seconds),
          m: this.pad(this._minutes),
          h: this.pad(this._hours)
        });
      };

      this.onHighResolutionTimerChange = function(event, data) {
        this._hours = Math.floor( ( ( (1000 / data.duration) * data.total_ticks) / 60) / 24) % 24;
        this._minutes = Math.floor( ( (1000 / data.duration) * data.total_ticks) / 60) % 60;
        this._seconds = ( (1000 / data.duration) * data.total_ticks) % 60;
        this.onCounterChange();
      };

      // init component
      this.after('initialize', function() {
        this.on('counter#start', this.start);
        this.on('counter#stop', this.stop);
        this.on('counter#lap', this.lap);
        this.on('HighResolutionTimer#change', this.onHighResolutionTimerChange);
        console.log('initialized Counter');
      });
    }
  }
);