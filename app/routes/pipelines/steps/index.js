import Ember from 'ember';
var PipelinesStepsIndexRoute;

PipelinesStepsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('pipelines.steps').get('steps');
  },
  actions: {
    "delete": function(step) {
      var index, steps;
      index = step.get('order');
      step.destroyRecord();
      steps = this.modelFor('pipelines.steps.index').sortBy('order');
      return Ember.run(function() {
        return steps.forEach(function(step, i) {
          if (i > index) {
            step.set('order', i - 1);
            return step.save();
          }
        });
      });
    },
    newStep: function() {
      return this.transitionTo('pipelines.steps.new');
    },
    back: function() {
      return this.transitionTo('pipelines.index');
    }
  }
});

export default PipelinesStepsIndexRoute;