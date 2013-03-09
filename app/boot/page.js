'use strict';

define(
  [
    'app/Counter',
    'app/CounterUI',
    'app/CounterLogUI'
  ],

  function(
    Counter,
    CounterUI,
    CounterLogUI) {

    function initialize() {
      Counter.attachTo(document);
      CounterUI.attachTo('#counterUI');

      CounterLogUI.attachTo('#counterLogUI');
    }

    return initialize;
  }
);