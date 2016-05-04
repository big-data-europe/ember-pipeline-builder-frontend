`import Ember from 'ember'`

PipelinesStepsIndexController = Ember.Controller.extend
  stepSorting: ['order']
  sortedSteps: Ember.computed.sort 'model', 'stepSorting'
  saveLabel: Ember.String.htmlSafe "<i class='material-icons'>done</i>"
  actions:
    reorderSteps: (steps, draggedStep) ->
      steps.forEach (step, i) ->
        step.set('order', i)
        step.save()
    changeAttr: (step, attribute, value) ->
      step.set(attribute, value)
      step.save()
    rollback: (step) ->
      step.rollbackAttributes()

`export default PipelinesStepsIndexController`
