import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  return this.route('pipelines', function() {
    this.route('index');
    this.route('new');
    return this.route('steps', {
      path: '/:pipeline_id/steps'
    }, function() {
      this.route('index');
      return this.route('new');
    });
  });
});

export default Router;