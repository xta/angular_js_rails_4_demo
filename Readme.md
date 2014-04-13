# Restauranteur

[Rails 4 + AngularJS demo](https://www.honeybadger.io/blog/2013/12/11/beginners-guide-to-angular-js-rails)

## Setup

    bundle install
    rake db:create db:schema:load
    rake db:test:prepare
    rake db:seed

## Development

    rails s
    open http://localhost:3000


## Testing

    npm install -g karma
    npm install -g karma-ng-scenario
    npm install -g karma-cli
    npm install -g karma-jasmine

    karma start spec/javascripts/restauranteur.conf.js
    open http://localhost:9876/
