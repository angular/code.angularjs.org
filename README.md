# code.angularjs.org

This repo contains the content served at [code.angularjs.org](https://code.angularjs.org).

The folders for each version are auto-generated, so don't open pull requests against this code.
Features and bug reports can be reported at the [AngularJS Github Repository](https://github.com/angular/angular.js).

The site code.angularjs.org is *not* a CDN. The AngularJS builds there are to be
used only during development. The site is not suitable for production usage.

If you are looking for a CDN link to AngularJS visit [angularjs.org](https://www.angularjs.org/).


## Project Maintainers Note

Here are the stesp to do a manual upload of folders to Firebase Storage:

**Be aware that some file paths contain colons `:`, which are not valid on Windows, so you must upload from a Unix-based OS.**

* Clone this repo:

  ```bash
  git clone https://github.com/angular/code.angularjs.org
  cd code.angularjs.org
  ```

* Install package dependencies

  ```bash
  yarn
  ```

* Generate a keyfile in the Firebase Storage web console (https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
  and store it in the root of the project as `code-angularjs-org.json`

* Run the grunt task to upload the chosen files. For example to upload all the partials for v1.0.5:

 ```bash
 node_modules/.bin/grunt --target=1.0.5 --filter=docs*/**
 ```

* Remember to delete the keyfile from you local system when done, as this gives unlimited access to the Storage.