<h1><img src="http://intercoolerjs.org/images/Intercooler_CMYK_noType_64.png" height="32px"> intercooler<span style="color: #26628E;">.</span><span style="color: #8EB3D0;">js</span></h1>

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

* Specifying the UI event that causes an AJAX request
* A pluggable event hook system
* Custom HTTP response headers for meta-actions
* A dependency mechanism between HTML elements
* A visual debugger

Full documentation is available on the [main Intercooler website](http://intercoolerjs.org/)

## Installing

Intercooler is just another javascript library can be downloaded or hot-linked [from the downloads page](http://intercoolerjs.org/download.html).

## License

Intercooler is licenced under the MIT License (see the [LICENSE](https://raw.githubusercontent.com/LeadDyno/intercooler-js/master/LICENSE))

## Contributing

To contribute a change to Intercooler please try to follow this workflow:

* Fork the main intercooler repository
* Create a new feature branch based on the master branch with a reasonably descriptive name (e.g. fix_http_get_parameter_overriding)
* Implement your fix, trying not to mix multiple fixes/improvements in the same feature branch
* Add a test to <code>/test/unit_tests.html</code>.  (It's pretty easy!)
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
* evilotto
