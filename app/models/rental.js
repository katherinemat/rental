//DS stands for data store
import DS from 'ember-data';

//this model and list of attributes is added to the data store
export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
