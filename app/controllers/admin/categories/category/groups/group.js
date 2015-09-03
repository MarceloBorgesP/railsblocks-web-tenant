import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingName: false,
  isEditingDesc: false,
  isEditingSlug: false,

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
    },
    editSlug: function() {
      this.set("isEditingSlug", true);
    },
    doneEditingSlug: function(){
      this.set("isEditingSlug", false);
    }
  }
});