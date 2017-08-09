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
  this.route('page', {path: 'page/:page_slug'});

  this.route('ekiden', function() {
    this.route('about');
    this.route('enter');
    this.route('declaration');
    this.route('course');
    this.route('results');
    this.route('gallery');
  });
  this.route('cross-country', function() {
    this.route('about');
    this.route('results');
    this.route('gallery');
  });
});

export default Router;
