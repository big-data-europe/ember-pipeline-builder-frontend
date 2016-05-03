`import Ember from 'ember'`

PipelinesIndexRoute = Ember.Route.extend
  model: ->
    @store.findAll 'pipeline'
  actions:
    delete: (pipeline) ->
      pipeline.destroyRecord()
    newPipeline: ->
      @transitionTo('pipelines.new')

`export default PipelinesIndexRoute`
