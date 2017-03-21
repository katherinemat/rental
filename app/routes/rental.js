import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //findRecord takes two arguments: type of object and object's specific id
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    update(rental, params) {
      // for each key in the params, if not undefined, set the rental's property that matches the current key to the value of the current key. after looping through all the keys, save the rental and transition to index route
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
