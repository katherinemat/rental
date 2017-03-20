import Ember from 'ember';

export default Ember.Component.extend({
  textIsShowing: false,
  actions: {
    showText: function(){
      this.set('textIsShowing',true);
    },
    hideText: function(){
      this.set('textIsShowing', false);
    },
    delete(announcement){
      if(confirm('You want to delete this announcement?')){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
