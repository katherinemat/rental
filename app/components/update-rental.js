import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      // this update function referenced in update-rental.js is defined in rental-tile.js, instead of index.js, because the update-rental component is nested inside of the rental-tile component. sent along with rental object and with parameters
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
