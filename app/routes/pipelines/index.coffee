`import Ember from 'ember'`

PipelinesIndexRoute = Ember.Route.extend
  model: ->
    @store.query 'pipeline', {
      page:
        size: 10000
      sort: 'title'
    }
  actions:
    delete: (pipeline) ->
      pipeline.get('steps').then (steps) =>
        steps.canonicalState.setEach('pipeline', null)
        steps.save().then (steps) =>
          destroyAll = Ember.RSVP.all(steps.map((x) -> x.destroyRecord()))
          destroyAll.then(pipeline.destroyRecord())
    export: (pipeline) ->
      request = Ember.$.ajax
        url: "/export/pipelines"
        type: "GET"
        headers:
          Accept: "text/turtle"
        data:
          uuid: pipeline.get('id')
        success: (response, status, xhr) =>
          # See https://stackoverflow.com/questions/16086162/handle-file-download-from-ajax-post
          filename = "pipeline-" + pipeline.get('id') + ".ttl"
          type = xhr.getResponseHeader('Content-Type')
          blob = new Blob([response], { type: type })
          
          if (typeof window.navigator.msSaveBlob != 'undefined')
            # IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob
            # for which they were created. These URLs will no longer resolve as the data backing
            # the URL has been freed."
            window.navigator.msSaveBlob(blob, filename)
          else
            URL = window.URL || window.webkitURL
            downloadUrl = URL.createObjectURL(blob)

            # use HTML5 a[download] attribute to specify filename
            a = document.createElement("a")
            # Safari doesn't support the download attribute yet
            if (typeof a.download == 'undefined')
              window.location = downloadUrl
            else 
              a.href = downloadUrl
              a.download = filename
              document.body.appendChild(a)
              a.click()

            setTimeout( (() -> URL.revokeObjectURL(downloadUrl)), 100); # cleanup
    newPipeline: ->
      @transitionTo('pipelines.new')

`export default PipelinesIndexRoute`
