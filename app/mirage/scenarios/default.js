export default function(server) {
  server.createList('category', 3)

  var category = server.create('category');
  server.createList('group', 3, {category_id: category.id});

  var group = server.create('group');
  server.createList('plan_cloud_servers', 6, {category_id: category.id}, {group_id: group.id});

  server.create('plan');  

  server.createList('cloud_server', 3);
  

 // server.create('cart'); 
}
