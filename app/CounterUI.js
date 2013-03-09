/* CounterUI.js */

define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(CounterUI);

    function CounterUI() {
      this.$startButton = null;
      this.$stopButton = null;
      this.$markButton = null;

      // defaults
      this.defaultAttrs({
        startButtonSelector: "#startCounter",
        stopButtonSelector: "#stopCounter",
        markButtonSelector: "#markCounter",
        clockSelector: "#clock"
      });

      // custom functions
      this.onStartButtonClick = function(event) {
        this.trigger(document, "counter#start");
        this.mark("Start");
        this.$startButton.hide();
        this.$stopButton.show();
      };

      this.onStopButtonClick = function(event) {
        this.trigger(document, "counter#pause");
        this.mark("Stop");
        this.$stopButton.hide();
        this.$startButton.show();
      };

      this.onMarkButtonClick = function(event) {
        this.mark();
      };

      this.mark = function(msg) {
        this.trigger(document, "counter#mark", {
          time: this.select('clockSelector').html(),
          message: msg == undefined ? null : msg
        });
      };

      this.onCounterChanged = function(event, data) {
        this.select('clockSelector').html(data.h + ":" + data.m + ":" + data.s);
      };

      this.initUI = function() {
        this.$stopButton = this.select('stopButtonSelector');
        this.$startButton = this.select('startButtonSelector');
        this.$markButton = this.select('markButtonSelector');
        this.$stopButton.hide();
      };

      // init component
      this.after('initialize', function() {
        this.on(document, 'counter#changed', this.onCounterChanged);
        this.initUI();
        this.on(this.attr.startButtonSelector, 'click', this.onStartButtonClick);
        this.on(this.attr.stopButtonSelector, 'click', this.onStopButtonClick);
        this.on(this.attr.markButtonSelector, 'click', this.onMarkButtonClick);
        console.log('initialized CounterUI');
      });
    }
  }
);