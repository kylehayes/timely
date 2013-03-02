'use strict';

define(
  [
    'app/LayoutUI',
    'app/Counter',
    'app/CounterUI',
    'app/CounterLogUI',
    'app/HighResolutionTimer'
  ],

  function(
    LayoutUI,
    Counter,
    CounterUI,
    CounterLogUI,
    HighResolutionTimer) {

    function initialize() {
      LayoutUI.attachTo('.container-fluid');
      HighResolutionTimer.attachTo(document);
      Counter.attachTo(document);
      CounterUI.attachTo('#counterUI');
      
      CounterLogUI.attachTo('#counterLogUI');
    }

    return initialize;
  }
);