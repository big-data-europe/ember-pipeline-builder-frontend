`import Ember from 'ember'`

PipelinesStepsController = Ember.Controller.extend
  saveLabel: Ember.String.htmlSafe "<i class='material-icons'>done</i>"
  actions:
    changeAttr: (attribute, value) ->
      @get('model').set(attribute, value)
      @get('model').save()
    rollback: ->
      @get('model').rollbackAttributes()

`export default PipelinesStepsController`
