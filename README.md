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

Additionally, modal one has a parent `<div w-bind>` element that encapsulates the `<modal>` widget. Modal Two & Three have the `w-bind` nested within the `<modal>` element to keep it encapsulated in that widget's transcluded `w-body`.

### Modal One

When clicking on the state change button, the modal immediately disappears. 

### Modal Two

When clicking on the state change button, the modal does not disappear. Instead, the state is successfully logged to the console with a error of a widget not being found. After hiding the modal widget, all attempts to show other modals will fail.

### Modal Three

This example is a bit more in-depth with various states setting visibility attributes. Clicking on a state change button appears to completely hides all content. However, when you dig into the rendered elements, component has re-rendered within the original w-body.
