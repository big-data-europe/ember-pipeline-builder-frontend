`import Ember from 'ember'`

InlineEditModelComponent = Ember.Component.extend
  field: 'text'
  saveLabel: Ember.String.htmlSafe "<i class='material-icons'>done</i>"
  value: Ember.computed 'model', 'attr', ->
    @get('model').get(@get('attr'))
  actions:
    changeAttr: (attribute, value) ->
      @get('model').set(attribute, value)
      @get('model').save()
    rollback: (attribute) ->
      oldValue = @get('model').get(attribute)
      @set('value', oldValue)

`export default InlineEditModelComponent`
