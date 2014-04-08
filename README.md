# Intercooler.js

## What it is

Intercooler is a [PVC](http://intercoolerjs.org/why.html) framework that allows
you to add AJAX to your application with declarative HTML5-style bindings and
REST-ful URLs, giving web applications a richer UX with a minimum of code.

## What that means

It makes AJAX simple, you don't even need to write any JavaScript! Here's an
example of a basic `POST` request:

    // When this is clicked, a post request is sent to /example
    <button ic-post-to="/example">
        Click Me!
    </button>

    // When a post request is sent to /example, the response goes here
    <span ic-src="/example"></span>

## How to use

Intercooler depends on JQuery and can be installed like this:

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="https://s3.amazonaws.com/intercoolerjs.org/release/intercooler-0.0.1.min.js"></script>

Or you can [download the latest
version](http://intercoolerjs.org/download.html) and embed it locally.

## More examples

### Polling

Send a `GET` request to "/visitors/count" every two seconds and update the
innerHTML to the response:

    <div ic-src="/visitors/count" ic-poll="2s">
        There are currently 42 users online.
    </div>

### Adding input

This AJAX includes the value of `#password` in it's request.

    Enter a password: <input id="password" name="pass">

    <button ic-post-to="/hash/sha256" ic-include="#password">
        Hash password
    </button>

    <div ic-src="/hash/sha256">
        Your hashed password will go here
    </div>


Learn more at [intercoolerjs.org](http://intercoolerjs.org) (there's lots
more!).
