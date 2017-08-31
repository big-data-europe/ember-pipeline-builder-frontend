import Ember from 'ember';
var PipelinesStepsNewRoute;

PipelinesStepsNewRoute = Ember.Route.extend({
  model: function() {
    var pipeline;
    pipeline = this.modelFor('pipelines.steps');
    return this.store.createRecord('step', {
      order: pipeline.get('steps.length'),
      pipeline: pipeline
    });
  },
  actions: {
    save: function() {
      return this.modelFor('pipelines.steps.new').save().then((function(_this) {
        return function(step) {
          return _this.transitionTo('pipelines.steps', step.get('pipeline'));
        };
      })(this));
    },
    cancel: function() {
      this.modelFor('pipelines.steps.new').rollbackAttributes();
      return this.transitionTo('pipelines.steps', this.modelFor('pipelines.steps'));
    }
  }
});

export default PipelinesStepsNewRoute;