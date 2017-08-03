import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('page');
  }
});

// Router.map(function() {  
  // this.route('about');
  // this.route('enter');
  // this.route('team-declaration');
  // this.route('results');
  // this.route('gallery');
// });

// export default Router;  
