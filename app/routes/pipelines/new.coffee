`import Ember from 'ember'`

PipelinesNewRoute = Ember.Route.extend
  model: ->
    @store.createRecord 'pipeline', {}
  actions:
    save: ->
      @modelFor('pipelines.new').save().then =>
        @transitionTo 'pipelines'
    cancel: ->
      @modelFor('pipelines.new').rollbackAttributes()
      @transitionTo 'pipelines'
      
`export default PipelinesNewRoute`