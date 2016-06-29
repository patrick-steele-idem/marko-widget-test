This sample app demonstrates some of the behavior with using [Marko Widgets](https://github.com/marko-js/marko-widgets) and [Lasso.js](https://github.com/lasso-js/lasso).

# Installation

```
git clone https://github.com/ianvonholt/marko-widget-test.git
cd marko-widget-test
npm install
```

# Running

```
node client.js
```

Then visit: http://localhost:3131/

You can also use the [browser-refresh](https://github.com/patrick-steele-idem/browser-refresh) process launcher to automatically refresh pages any time a file changes as shown below:

```
npm install browser-refresh --global
browser-refresh client.js
```

Then visit: http://localhost:3131/

# Behavior

There is some different behavior for each of the Marko Widgets. The idea was to have the widgets be reusable and not have
a centralized `<application />` style widget. Thus, for this approach I've leveraged jQuery in searching out data attribute tags and attaching events.

### Modal One

When clicking on the state change button, the modal immediately disappears. 

### Modal Two

When clicking on the state change button, the modal does not disappear. Instead, the state is successfully logged to the console, but an error of a widget not being found. All buttons to show or hide widgets then fail.

### Modal Three

This example is a bit more in-depth with various states setting visibility attribute states. Clicking on a state change button appears to completely hides all content. However, it seems that the component-three widget has re-rendered within the original w-body.
