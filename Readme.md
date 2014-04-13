# Restauranteur

[Rails 4](http://rubyonrails.org/) + [AngularJS](http://angularjs.org/) + [PostgreSQL](http://www.postgresql.org/) demo app

Special thanks to many online resources:

* [honeybadger](https://www.honeybadger.io/blog/2013/12/11/beginners-guide-to-angular-js-rails)
* [karlfreeman](https://github.com/karlfreeman/angular-devise)

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
