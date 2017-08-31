import Ember from 'ember';
var PipelinesIndexRoute;

PipelinesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.query('pipeline', {
      page: {
        size: 10000
      },
      sort: 'title'
    });
  },
  actions: {
    delete(pipeline) {
        return pipeline.get('steps').then((steps) => {
            steps.canonicalState.setEach('pipeline', null);
            return steps.save().then((st) => {
                return Ember.RSVP.all(st.map((x) => x.destroyRecord())).then(() => pipeline.destroyRecord())
            });
        });
    },
    export: function(pipeline) {
      var request;
      return request = Ember.$.ajax({
        url: "/export/pipelines",
        type: "GET",
        headers: {
          Accept: "text/turtle"
        },
        data: {
          uuid: pipeline.get('id')
        },
        success: (function(_this) {
          return function(response, status, xhr) {
            var URL, a, blob, downloadUrl, filename, type;
            filename = "pipeline-" + pipeline.get('id') + ".ttl";
            type = xhr.getResponseHeader('Content-Type');
            blob = new Blob([response], {
              type: type
            });
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
              return window.navigator.msSaveBlob(blob, filename);
            } else {
              URL = window.URL || window.webkitURL;
              downloadUrl = URL.createObjectURL(blob);
              a = document.createElement("a");
              if (typeof a.download === 'undefined') {
                window.location = downloadUrl;
              } else {
                a.href = downloadUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
              }
              return setTimeout((function() {
                return URL.revokeObjectURL(downloadUrl);
              }), 100);
            }
          };
        })(this)
      });
    },
    newPipeline: function() {
      return this.transitionTo('pipelines.new');
    }
  }
});

export default PipelinesIndexRoute;