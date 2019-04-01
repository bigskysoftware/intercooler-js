This folder contains the unit tests for Intercooler.js

### Generating the tests
The original tests are contained in `unit_tests.html`. Versions of this file for older versions of jQuery and for Zepto can be generated from there.

Run `ruby gen_tests.rb`.

### Adding new tests
Edit the file `unit_tests.html`, then regenerate the tests

The unit tests are built using the QUnit framework: https://qunitjs.com/

### Running the tests
Open the test file in a browser from the local file system.

Or, from the `test` directory, run `ruby -run -e httpd .. -p 9000`.

Then, go to http://127.0.0.1:9000/test and pick the test you want to run.
