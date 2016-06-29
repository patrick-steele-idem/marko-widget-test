var Pubsub = require('raptor-pubsub');

require('./style.styl');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  // Setup state variables
  getInitialState: function(input) {
    return {
      loginError: false,
      visible: input.visible === true
    };
  },

  // Setup template data on template load
  getTemplateData: function(state, input) {
    return {
      loginError: state.loginError,
      visible: state.visible
    };
  },

  init: function() {
    var self = this;
    var modal = this.getWidget('component-modal-one');
    var changeStateButton = this.getEl('change-state-one-button');

    // Event Handler
    if (changeStateButton) {
      changeStateButton.addEventListener('click', function(e){
        self.setState('loginError', 'State Change Login Error');
        console.log('State Change One', self.state);
      });
    }

    // Setup Pub Sub
    Pubsub.on('showModalOne', function(arg) {
      self.setState('visible', true);
    });
  }
});