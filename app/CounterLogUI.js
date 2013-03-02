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
        this.select('logListContainer').append('<li>' + data.time + '</li>');
      };

      // init component
      this.after('initialize', function() {
        this.on(document, 'counter#mark', this.onCounterMark);
        console.log('initialized CounterLogUI');
      });
    }
  }
);