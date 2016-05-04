`import Ember from 'ember'`

PipelinesIndexRoute = Ember.Route.extend
  model: ->
    @store.findAll 'pipeline'
  actions:
    delete: (pipeline) ->
      pipeline.get('steps').then (steps) =>
        steps.canonicalState.setEach('pipeline', null)
        steps.save().then (steps) =>
          destroyAll = Ember.RSVP.all(steps.map((x) -> x.destroyRecord()))
          destroyAll.then(pipeline.destroyRecord())
    newPipeline: ->
      @transitionTo('pipelines.new')

`export default PipelinesIndexRoute`
