import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';

export default DS.Model.extend({
  page_id: DS.attr('number'),
  date: DS.attr('date'),
  slug: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string')
});
