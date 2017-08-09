import Ember from 'ember';

export default Ember.Route.extend({	  
	model: function() {
	var categoryId =  80; // TODO look up.
    return Ember.RSVP.hash({
      about: this.store.query('post', {
			slug: 'the-race'
		}),
      enter: this.store.query('post', {
			slug: 'enter'
		}),
	  pages: this.store.query('page', {
			parent: '4167'
		}),
	  posts: this.store.query('post', {
			per_page: 99,
			categories: categoryId
		})
    });
  },
});
