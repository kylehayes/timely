define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {
    return defineComponent(HighResolutionTimer);

    function HighResolutionTimer() {
      /******
       * Adapted from tanepiper
       * https://gist.github.com/tanepiper/4215634
       */

      this.defaultAttrs({
        duration: 1000
      });

      this.timer = false;
   
      this.total_ticks = 0;
   
      this.start_time = undefined;
      this.current_time = undefined;
   
      this.run = function() {
        this.current_time = Date.now();
        if (!this.start_time) { this.start_time = this.current_time; }
        
        this.onChange();
        
        var nextTick = this.attr.duration - (this.current_time - (this.start_time + (this.total_ticks * this.attr.duration) ) );
        this.total_ticks++;
   
        (function(i) {
          i.timer = setTimeout(function() {
            i.run();
          }, nextTick);
        }(this));
   
        return this;
      };

      this.onChange = function() {
        this.trigger("HighResolutionTimer#change", {
          total_ticks: this.total_ticks,
          start_time: this.start_time,
          current_time: this.current_time,
          duration: this.attr.duration
        });
      }
   
      this.stop = function(){
        clearTimeout(this.timer);
        return this;
      };

      // init component
      this.after('initialize', function() {
        this.on(document, 'HighResolutionTimer#start', this.run);
        this.on(document, 'HighResolutionTimer#stop', this.stop);
        console.log('initialized HighResolutionTimer');
      });
    }

  }
);