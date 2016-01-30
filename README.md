<center>
  <img src="http://i.imgur.com/CQh4tnm.png">
</center>

## Introduction

Intercooler is a small (25K unzipped) library that allows you to add AJAX to your application using
HTML attributes.

Here is an example:

    // When this button is clicked an AJAX POST request is sent to /example and the response content is
    // swapped in to the body of the button
    <button ic-post-to="/example">
        Click Me!
    </button>

Despite its small size, intercooler supports quite a bit of functionality:

* Specifying the UI event that causes an AJAX request
* Progress indicators
* Meta-directives via HTTP response headers
* A REST-ful dependency mechanism
* AJAX history & back-button support
* A rich event model
* [And more...](http://intercoolerjs.org/docs.html)

These features allow you to build modern web applications with minimal fuss, using a simple and intuitive REST-ful architecture that ensures good performance, excellent user experience and a minimum of complexity.

It also is very easy to incrementally retrofit intercooler into existing web applications to add AJAX functionality where
it is most valuable.

Full documentation is available on the [main intercooler website](http://intercoolerjs.org/)

## Installing

Intercooler can be downloaded or hot-linked [from the downloads page](http://intercoolerjs.org/download.html).

Or installed via bower:

     "dependencies": {
        "intercooler-js" : "0.9.4"
      }

## License

Intercooler is licenced under the [MIT License](https://raw.githubusercontent.com/LeadDyno/intercooler-js/master/LICENSE)

## Contributing

To contribute a change to intercooler:

* Fork the main intercooler repository
* Create a new feature branch based on the `development` branch with a reasonably descriptive name (e.g. `fix_http_get_parameter_overriding`)
* Implement your fix
* Add a test to `/test/unit_tests.html`.  (It's pretty easy!)
* Create a pull request for that branch against `development` in the main repository

Thank you to [all the contributors](https://github.com/LeadDyno/intercooler-js/graphs/contributors)!
