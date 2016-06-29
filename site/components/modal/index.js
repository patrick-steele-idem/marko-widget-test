require('./style.styl');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      width: input.width || '80%',
      visible: input.visible === true ? true : false,
      class: input.class || ''
    };
  },

  getTemplateData: function(state, input) {
    return {
      width: state.width,
      visible: state.visible,
      class: state.class
    };
  },

  init: function() {
    this.fixPageScrolling();
  },

  fixPageScrolling: function() {
    if (this.state.visible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },

  /**
   * State handler for the "visible" state to avoid
   * a re-render if the visibility of the overlay
   * is changed. This ensures that CSS transitions
   * will continue to work since the same DOM nodes
   * will be used.
   */
  update_visible: function(newVisible) {
    if (newVisible) {
      this.$().addClass('visible');
    } else {
      this.$().removeClass('visible');
    }

    this.fixPageScrolling();
  },

  hide: function() {
    this.setVisibility(false);
  },
  show: function() {
    this.setVisibility(true);
  },

  setVisibility: function(visible) {
    if (this.state.visible === visible) {
      // Visibility did not change... nothing to do
      return;
    }

    if (visible) {
      this.emit('show');
    } else {
      this.emit('hide');
    }

    this.setState('visible', visible);
  },

  handleMaskClick: function() {
    this.hide();
  },
  handleCloseClick: function() {
    this.emit('cancel', {});
    this.hide();
  },
  handleCancelButtonClick: function() {
    this.emit('cancel', {});
    this.hide();
  },
  handleDoneButtonClick: function() {
    var preventDefault = false;

    this.emit('ok', {
      preventDefault: function() {
        preventDefault = true;
      }
    });

    if (!preventDefault) {
      this.hide();
    }
  }
});
