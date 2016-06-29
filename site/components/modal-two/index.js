var Pubsub = require('raptor-pubsub');

require('./style.styl');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  // Setup state variables
  getInitialState: function(input) {
    return {
      firstNameError: false,
      lastNameError: false
    };
  },

  // Setup template data on template load
  getTemplateData: function(state, input) {
    return {
      firstNameError: state.firstNameError,
      lastNameError: state.lastNameError
    };
  },
  init: function() {
    var self = this;
    // Our modal is outside our w-bind, so we cant have reusable component functionality here, move it to modal-group.

    // Setup Button
    var changeStateButton = this.getEl('change-state-two-button');

    if (changeStateButton) {
      changeStateButton.addEventListener('click', function(e){
        self.setState('firstNameError', 'First Name State Change');
        self.setState('lastNameError', 'Last Name State Change');
        console.log('State Change Two', self.state);
      });
    }
  }
});
