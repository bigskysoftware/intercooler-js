# Intercooler.js

## Introduction

Intercooler is a small javascript library that allows you to add AJAX to your web application with
simple HTML5 attributes.  This makes adding AJAX (almost) as simple as adding an anchor tag.

Here is an example:

    // When this button is clicked an AJAX POST request is sent to /example and the response is
    // swapped in to the body of the button
    <button ic-post-to="/example">
        Click Me!
    </button>

Despite its small size, Intercooler supports quite a bit of functionality. Some examples:

* Specifying the event that causes an AJAX request
* Custom response headers for meta-actions
* A well developed event hook system
* Explicit and implicit dependencies between HTML elements
* A javascript API for interoperability with other javascript libraries

Full documentation is available on the [main Intercooler website](http://intercoolerjs.org/)

## Installing

Intercooler is just another javascript library can be downloaded or hot-linked [from the downloads page](http://intercoolerjs.org/download.html).

## License

Intercooler is licenced under the MIT License (see LICENSE)

## Contributing

To contribute a change to Intercooler please try to follow this workflow:

* Fork the main intercooler repository
* Create a new feature branch based on the master branch with a reasonably descriptive name (e.g. fix_http_get_parameter_overriding)
* Implement your fix, trying not to mix multiple fixes/improvements in the same feature branch
* Create a pull request for that branch against master in the main repository
* Add yourself to the "Contributors" section below

This keeps changes from bleeding into one another and makes my life easier.

## Contributors

* carsongross
* matdrapeau
* mindreframer
* juggy
* niv
* coffeecodecouch


