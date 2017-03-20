import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    });
  },

  setupController(controller, model) {
   this._super(...arguments);
   Ember.set(controller, 'rentals', model.rentals);
   Ember.set(controller, 'announcements', model.announcements);
 },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    destroyAnnouncement(announcement){
      announcement.destroyAnnouncement();
      this.transitionTo('index');
    }
  }
});
