import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  // this is a dynamic segment representing the id of a given rental in firebase. when router receives a request matching this path, it will route to rental route (rental.js) and send a params hash including the value matching rental_id
  this.route('rental', {path: '/rental/:rental_id'});
});

export default Router;
