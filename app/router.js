import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pipelines', function() {
    this.route('index');
    this.route('new');
    this.route('steps', { path: '/:pipeline_id/steps' }, function() {
      this.route('index');
      this.route('new');
    });
  });
});

export default Router;
