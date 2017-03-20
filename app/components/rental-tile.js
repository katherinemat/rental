import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this record?')) {
        // this component will not delete the object itself. instead, it sends notification to delete rental upwards through the template and into the route handler by calling this.sendAction()
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
