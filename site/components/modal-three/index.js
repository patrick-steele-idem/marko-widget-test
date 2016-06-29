var Pubsub = require('raptor-pubsub');

require('./style.styl');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  // Setup state variables
  getInitialState: function(input) {
    return {
      loginError: false,
      firstNameError: false,
      lastNameError: false,
      slideOneVisible: input.slideOneVisible || true,
      slideTwoVisible: input.slideTwoVisible || false
    };
  },

  // Setup template data on template load
  getTemplateData: function(state, input) {
    return {
      loginError: state.loginError,
      firstNameError: state.firstNameError,
      lastNameError: state.lastNameError,
      slideOneVisible: state.slideOneVisible,
      slideTwoVisible: state.slideTwoVisible
    };
  },
  init: function() {
    var self = this;
    // Our modal is outside our w-bind, so we cant have reusable component functionality here, move it to modal-group.

    // Setup Button
    var changeStateButtonOne = this.getEl('change-state-three-button-one');
    var changeStateButtonTwo = this.getEl('change-state-three-button-two')

    if (changeStateButtonOne) {
      changeStateButtonOne.addEventListener('click', function(e){
        self.setState('firstNameError', 'First Name State Change');
        self.setState('lastNameError', 'Last Name State Change');
        console.log('State Change Three-One', self.state);
      });
    }

    if (changeStateButtonTwo) {
      changeStateButtonTwo.addEventListener('click', function(e){
        self.setState('loginError', 'State Change Login Error');
        console.log('State Change Three-Two', self.state);
      });
    }
  },

  handleToFormOneClick: function() {
    this.setState('slideOneVisible', true);
    this.setState('slideTwoVisible', false);
    console.log('State Change handleToFormOneClick', this.state);
  },

  handleToFormTwoClick: function() {
    this.setState('slideOneVisible', false);
    this.setState('slideTwoVisible', true);
    console.log('State Change handleToFormTwoClick', this.state);
  }
});
