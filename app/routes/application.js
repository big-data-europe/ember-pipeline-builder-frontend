import Ember from 'ember';
import LoadingSliderMixin from 'ember-cli-loading-slider/mixins/loading-slider';

var ApplicationRoute;

ApplicationRoute = Ember.Route.extend(LoadingSliderMixin, {
    beforeModel() {
        this.transitionTo('pipelines.index');
    }
});

export default ApplicationRoute;