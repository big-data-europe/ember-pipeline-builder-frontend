import Ember from 'ember';
var PipelinesStepsRoute;

PipelinesStepsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('pipeline', params.pipeline_id);
  }
});

export default PipelinesStepsRoute;