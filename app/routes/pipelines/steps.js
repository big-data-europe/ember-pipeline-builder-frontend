import Ember from `import Ember from 'ember'`

PipelinesStepsRoute = Ember.Route.extend
  model: (params) ->
    @store.findRecord 'pipeline', params.pipeline_id

`export default PipelinesStepsRoute`
'ember';

const PipelinesStepsRoute = Ember.Route.extend({
  model(params) {
    return this.store.findRecord('pipeline', params.pipeline_id);
  }
});

export default PipelinesStepsRoute;
