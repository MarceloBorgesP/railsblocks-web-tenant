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
}