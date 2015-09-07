export default function(server) {
  var category = server.create('category');
  server.createList('group', 3, {category_id: category.id});
  server.createList('cloud_server', 3);
}
