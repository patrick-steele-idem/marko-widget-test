var Pubsub = require('raptor-pubsub');

require('./style.styl');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  init: function() {
    var modalTwo = this.getWidget('component-modal-two');
    var modalThree = this.getWidget('component-modal-three');
    // Setup Pub Sub
    Pubsub.on('showModalTwo', function(arg){
      modalTwo.show();
    });
    Pubsub.on('showModalThree', function(arg){
      modalThree.show();
    });
  }
});
