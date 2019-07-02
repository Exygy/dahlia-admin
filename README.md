# DAHLIA Admin

A portal for leasing agents, sales agents, and developers to manage listings.

## Setup
* Use Ruby 2.5.3 (Set the version using [RVM](https://rvm.io/rvm/install) or [rbenv](https://github.com/rbenv/rbenv))
* Install [Bundler](https://github.com/bundler/bundler) for this version of Ruby `gem install bundler -v 2.0.2`
* Use Node v12.1.x (npm v6.9.x) — If you need to manage multiple Node versions on your dev machine, install NVM and run `nvm use`
* Install Yarn (if you have Homebrew you can run `brew install yarn`)
* Run `yarn install`
* Run `bundle install`
  - see [here](https://stackoverflow.com/a/19850273/260495) if you have issues installing `pg` gem with Postgres.app, you may need to use: `gem install pg -v 0.21.0 -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config`
* Run `rails g dahlia_data_models:install` to generate database migrations
* Setup your local database by running `rails db:create && rails db:migrate`
* Run `overcommit --install`
* Run `gem install foreman`

## To run server
* Run `foreman start -f Procfile.development`
* Access the app at [http://localhost:3000/](http://localhost:3000/)

## To update CSS from Pattern Library
* `grunt`

## Linting

To lint Ruby code run: `rubocop`

To lint the React code run: `yarn lint`


## Rails tests

### Running tests

`bundle exec rake spec`

## React/Javascript tests

### Running unit tests

`yarn test:unit`

**Updating snapshots**

If you made a legitimate change in the view and a snapshot fails then you have to tell Jest to update the snapshots. Run:

`yarn test:unit -u`

_Note: Snapshots should be pushed to the repo_

### Running e2e tests

To view the e2e tests as they're running, set `HEADLESS` to `false` in [this file](https://github.com/Exygy/sf-dahlia-lap/blob/master/spec/javascript/support/puppeteer/consts.js)

**Run tests**

`yarn rails-server-test` to start the test server.

`yarn test:e2e` to run the e2e tests.

`yarn rails-teardown-test` to stop the test server.


### Running all or individual tests

To run all tests (unit and e2e):

`yarn test:all`

To run an individual test:

`yarn test:all path/to/test`
