var Pubsub  = require('raptor-pubsub');

require('./styles.styl');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {};
  },

  getTemplateData: function(state){
    return {};
  },

  init: function() {
    /*
     * Setup Variables
     * Using standard jQuery to pull ALL page data elements. This stops one from
     * being limited to the immediate scope for this.getWidget
     */
    var modalOneIcon = $('[data-modal-one-button]');
    var modalTwoIcon = $('[data-modal-two-button]');
    var modalThreeIcon = $('[data-modal-three-button]');

    /*
     * Setup Event Handlers
     */
    if (modalOneIcon) {
      modalOneIcon.on('click', function(event) {
        Pubsub.emit('showModalOne', {});
      });
    }

    if (modalTwoIcon) {
      modalTwoIcon.on('click', function(event) {
        Pubsub.emit('showModalTwo', {});
      });
    }

    if (modalThreeIcon) {
      modalThreeIcon.on('click', function(event) {
        Pubsub.emit('showModalThree', {});
      });
    }

    /*
     * Assuming Header is always present on a page.
     */
     // Massage form data into JSON object
     $.fn.serializeObject = function()
     {
         var o = {};
         var a = this.serializeArray();
         $.each(a, function() {
             if (o[this.name] !== undefined) {
                 if (!o[this.name].push) {
                     o[this.name] = [o[this.name]];
                 }
                 o[this.name].push(this.value || '');
             } else {
                 o[this.name] = this.value || '';
             }
         });
         return o;
     };
  }
});
