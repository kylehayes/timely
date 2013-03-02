/* CounterLogUI.js */

define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(CounterLogUI);

    function CounterLogUI() {
      // defaults
      this.defaultAttrs({
        logListContainer: "#counterLogListContainer"
      });

      // custom functions
      this.onCounterMark = function(event, data) {
        console.log(data);
        var logStr = '<li>' + data.time;
        if(data.message !== null) {
          logStr += " -- " + data.message;
        }
        logStr += "</li>";
        this.select('logListContainer').append(logStr);
        this.node.scrollTop = this.node.scrollHeight;
      };

      // init component
      this.after('initialize', function() {
        this.on(document, 'counter#mark', this.onCounterMark);
        console.log('initialized CounterLogUI');
      });
    }
  }
);