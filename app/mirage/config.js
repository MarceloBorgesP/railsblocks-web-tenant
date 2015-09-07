export default function() {
  this.urlPrefix = 'http://localhost:4200';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing
  
  this.get('/categories');
  this.get('/categories/:id');
  this.post('/categories');
  this.put('/categories/:id');
  this.delete('/categories/:id');

  this.get('/groups');
  this.get('/groups/:id');
  this.post('/groups');
  this.put('/groups/:id');
  this.delete('/groups/:id');

  this.get('/plans/cloud_servers');
  this.get('/plans/cloud_servers/:id');
  this.post('/plans/cloud_servers', function(db, request){
    var attrs = JSON.parse(request.requestBody);
    attrs = attrs["plans/cloudServer"];
    var newPlan = db.cloud_servers.insert(attrs);
    return {
      cloud_server: newPlan
    };
  });
  this.put('/plans/cloud_servers/:id', function(db, request){
    var id = request.params.id;
    var attrs = JSON.parse(request.requestBody);
    attrs = attrs["plans/cloudServer"];
    attrs.id = +id;
    db.cloud_servers.update(id, attrs);
    return {
      cloud_server: attrs
    };
  });
  this.delete('/plans/cloud_servers/:id', function(db, request) {
    var planId = request.params.id;
    db.cloud_servers.remove(planId);
    return {};
  });
}