import Ember from 'ember';
var PipelinesStepsIndexController;

PipelinesStepsIndexController = Ember.Controller.extend({
  stepSorting: ['order'],
  sortedSteps: Ember.computed.sort('model', 'stepSorting'),
  saveLabel: Ember.String.htmlSafe("<i class='material-icons'>done</i>"),
  actions: {
    reorderSteps: function(steps) {
      return steps.forEach(function(step, i) {
        step.set('order', i);
        return step.save();
      });
    },
    changeAttr: function(step, attribute, value) {
      step.set(attribute, value);
      return step.save();
    },
    rollback: function(step) {
      return step.rollbackAttributes();
    }
  }
});

export default PipelinesStepsIndexController;