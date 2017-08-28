import Ember from 'ember';
const PipelinesStepsRoute = Ember.Route.extend({
  model(params) {
    return this.store.findRecord('pipeline', params.pipeline_id);
  }
});
export default PipelinesStepsRoute;
