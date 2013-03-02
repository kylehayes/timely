'use strict';

define(
  [
    'app/Counter',
    'app/CounterUI',
    'app/CounterLogUI',
    'app/HighResolutionTimer'
  ],

  function(
    Counter,
    CounterUI,
    CounterLogUI,
    HighResolutionTimer) {

    function initialize() {
      HighResolutionTimer.attachTo(document);
      Counter.attachTo(document);
      CounterUI.attachTo('#counterUI');
      CounterLogUI.attachTo('#counterLogUI');
    }

    return initialize;
  }
);