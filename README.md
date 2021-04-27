[![Build Status](https://travis-ci.org/hft-stuttgart-ipr/hft-asgmt-nodejs-01stjo1bif.svg?branch=master)](https://travis-ci.org/hft-stuttgart-ipr/hft-asgmt-nodejs-01stjo1bif)

# hft-asgmt-nodejs

## TODO
  - [x] Install and use the `body-parser` package
  - [x] Install and use the `sqlite3` package
  - [x] Use names for your form fields: `username` for the username and `message` for the textarea
  - [x] bodyParser must support json and should also use the option flag `extended:true`
  - [x] Iterate over all items in your database and show them in your table
  - [x] Refactor the `GET /` route to deliver your index page with data from the database
  - [x] Create a route, for `POST /add-entry` to receive form data

## Hints
 - It is not necessary to store the ID in the Database! `username` and `message` is enough! This is because of the sqlite autoincrement feature, which automatically increases the ID + 1
 - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser) -> Check examples for how to use bodyParser for json
