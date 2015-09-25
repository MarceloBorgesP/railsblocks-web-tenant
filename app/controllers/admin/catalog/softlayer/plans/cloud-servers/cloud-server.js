import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingName: false,

  actions: {
    editName: function() {
      this.set("isEditingName", true);
    },
    doneEditingName: function(){
      this.set("isEditingName", false);
    }
  }
});