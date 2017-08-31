import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';
var Step;

Step = DS.Model.extend(HasManyQuery.ModelMixin, {
  title: DS.attr('string'),
  description: DS.attr('string'),
  code: DS.attr('string'),
  order: DS.attr('number'),
  status: DS.attr('string', {
    defaultValue: function() {
      return 'not_started';
    }
  }),
  pipeline: DS.belongsTo('pipeline')
});

export default Step;