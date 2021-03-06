import Ember from 'ember';

const PipelinesStepsNewRoute = Ember.Route.extend({
  model() {
    const pipeline = this.modelFor('pipelines.steps');
    return this.store.createRecord('step', {
        order: pipeline.get('steps.length'),
        pipeline
    });
  },
  actions: {
    save() {
      return this.modelFor('pipelines.steps.new').save().then(step => {
        return this.transitionTo('pipelines.steps', step.get('pipeline'));
      });
    },
    cancel() {
      this.modelFor('pipelines.steps.new').rollbackAttributes();
      return this.transitionTo('pipelines.steps', this.modelFor('pipelines.steps'));
    }
  }
});

export default PipelinesStepsNewRoute;
