//DS stands for data store
import DS from 'ember-data';

//this model and list of attributes is added to the data store
export default DS.Model.extend({
  date: DS.attr(),
  message: DS.attr(),
  type: DS.attr(),
  author: DS.attr(),
});
