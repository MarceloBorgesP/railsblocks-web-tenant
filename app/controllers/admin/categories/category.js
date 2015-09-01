import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingName: false,
  isEditingDesc: false,

  actions: {
    editDesc: function() {
      this.set("isEditingDesc", true);
    },
    doneEditingDesc: function(){
      this.set("isEditingDesc", false);
    },
    editName: function() {
      this.set("isEditingName", true);
    },
    doneEditingName: function(){
      this.set("isEditingName", false);
    }
  }
});