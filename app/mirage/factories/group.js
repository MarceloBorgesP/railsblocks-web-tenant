import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function generateGroupName(i) {
    return "Group " + (i+1);
  },
  slug: function generateSlug(i) {
    return "group_" + (i+1);
  },
  description: "Description",
  icon: "fa-cloud",
  enabled: true
});
