import Ember from 'ember';

const PipelinesNewRoute = Ember.Route.extend({
  model() {
    return this.store.createRecord('pipeline', {});
  },
  actions: {
    save() {
      return this.modelFor('pipelines.new').save().then(pipeline => {
        return this.transitionTo('pipelines.steps', pipeline);
      });
    },
    cancel() {
      this.modelFor('pipelines.new').rollbackAttributes();
      return this.transitionTo('pipelines');
    }
  }
});

export default PipelinesNewRoute;
