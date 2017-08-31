import Ember from 'ember';
var InlineEditModelComponent;

InlineEditModelComponent = Ember.Component.extend({
  field: 'text',
  saveLabel: Ember.String.htmlSafe("<i class='material-icons'>done</i>"),
  value: Ember.computed('model', 'attr', function() {
    return this.get('model').get(this.get('attr'));
  }),
  actions: {
    changeAttr: function(attribute, value) {
      this.get('model').set(attribute, value);
      return this.get('model').save();
    },
    rollback: function(attribute) {
      var oldValue;
      oldValue = this.get('model').get(attribute);
      return this.set('value', oldValue);
    }
  }
});

export default InlineEditModelComponent;