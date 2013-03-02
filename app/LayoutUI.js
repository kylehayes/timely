/* LayoutUI.js */

define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(LayoutUI);

    function LayoutUI() {

      // defaults
      this.defaultAttrs({
        span9: ".span9",
        logSelector: "#counterLogUI",
        counterSelector: "#counterUI",
        notesSelector: "#notesUI"
      });

      // custom functions
      this.initUI = function() {
      };

      this.windowResizeHandler = function(event) {
        this.setLayout();
      };

      this.setLayout = function() {
        console.log(this.select('span9'));
        this.$node.css({
          height: $(window).height() - 22
        });
        this.select('logSelector').css({
          height: ($(window).height() - 22) - 120
        });
        this.select('counterSelector').css({
          height: 120
        });
        this.select('notesSelector').css({
          height: ($(window).height() - 22)
        });
      };

      // init component
      this.after('initialize', function() {
        this.on(window, 'resize', this.windowResizeHandler);
        this.initUI();
        this.setLayout();
        console.log('initialized LayoutUI');
      });
    }
  }
);