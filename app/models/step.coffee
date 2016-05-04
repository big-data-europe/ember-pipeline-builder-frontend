`import DS from 'ember-data'`
`import HasManyQuery from 'ember-data-has-many-query'`

Step = DS.Model.extend HasManyQuery.ModelMixin, 
  title: DS.attr('string')
  description: DS.attr('string')
  code: DS.attr('string')
  order: DS.attr('number')

  pipeline: DS.belongsTo('pipeline')
  
`export default Step`
