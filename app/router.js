import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pages');
  this.route('about');
  this.route('enter');
  this.route('team-declaration');  
  this.route('gallery');
  this.route('results');
});

export default Router;
