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
      this._startTime = null;
      this._intervalTimer = null;

      // custom functions
      this.pad = function(sec) {
        return sec < 10 ? "0" + sec : sec;
      };

      this.start = function() {
        this._startTime = new Date(1362763455839) //new Date();
        var that = this;
        this._intervalTimer = window.setInterval(function() {
          var diff = Math.round(((new Date()).getTime() - that._startTime.getTime()))
          
          that.onHighResolutionTimerChange(null, {
            duration: diff
          });
        }, 100);
        //this.trigger(document, 'HighResolutionTimer#start');
        console.log('counter started', this._startTime);
      };

      this.lap = function() {
        
        console.log('lap');
      };

      this.stop = function() {
        //this.trigger(document, 'HighResolutionTimer#stop');
        console.log('counter stopped');
        window.clearInterval(this._intervalTimer);
      };

      this.pause = function() {
        //this.trigger(document, 'HighResolutionTimer#pause');
        console.log('counter paused');
      };

      this.onCounterChange = function() {
        this.trigger(document, "counter#changed", {
          s: this.pad(this._seconds),
          m: this.pad(this._minutes),
          h: this.pad(this._hours)
        });
      };

      this.onInterval = function() {
        console.log( ((new Date()).getTime() - this._startTime.getTime())/1000 );
      };

      this.onHighResolutionTimerChange = function(event, data) {
        this._hours = Math.floor(data.duration / 3600000);
        this._minutes = Math.floor(data.duration / 60000) % 60;
        this._seconds = Math.floor(data.duration / 1000) % 60;
        this.onCounterChange();
      };

      // init component
      this.after('initialize', function() {
        this.on('counter#start', this.start);
        this.on('counter#stop', this.stop);
        this.on('counter#pause', this.pause);
        this.on('counter#lap', this.lap);
        //this.on('HighResolutionTimer#change', this.onHighResolutionTimerChange);
        console.log('initialized Counter');
      });
    }
  }
);