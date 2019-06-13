# DAHLIA Partners

A portal for leasing agents, sales agents, and developers to manage listings and applications.

[![Maintainability](https://api.codeclimate.com/v1/badges/9e8566f1a7a92c4eca3e/maintainability)](https://codeclimate.com/github/Exygy/sf-dahlia-lap/maintainability)

Only showing rspec tests for now:
[![Test Coverage](https://api.codeclimate.com/v1/badges/9e8566f1a7a92c4eca3e/test_coverage)](https://codeclimate.com/github/Exygy/sf-dahlia-lap/test_coverage)

Cross-browser testing done with <a href="https://www.browserstack.com/"><img src="./Browserstack-logo@2x.png?raw=true" height="36" ></a>

## Setup
* Use Ruby 2.5.3 (Set the version using [RVM](https://rvm.io/rvm/install) or [rbenv](https://github.com/rbenv/rbenv))
* Install [Bundler](https://github.com/bundler/bundler) for this version of Ruby `gem install bundler -v 2.0.1`
* Use Node v12.1.x (npm v6.9.x) — If you need to manage multiple Node versions on your dev machine, install NVM and run `nvm use`
* Install Yarn (if you have Homebrew you can run `brew install yarn`)
* Run `yarn install`
* Run `bundle install`
  - see [here](https://stackoverflow.com/a/19850273/260495) if you have issues installing `pg` gem with Postgres.app, you may need to use: `gem install pg -v 0.21.0 -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config`
* Run `overcommit --install`
* Create a `.env` file in the root directory and ask a team member for access to the local development secrets
* Setup your local database by running `bin/rails db:migrate RAILS_ENV=development`
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

`yarn rails-server-test`

`yarn test:e2e`


### Running all or individual tests

To run all tests (unit and e2e):

`yarn test:all`

To run an individual test:

`yarn test:all path/to/test`
