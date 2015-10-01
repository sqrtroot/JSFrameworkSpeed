$(document).ready(function() {
  EMapp = Ember.Application.create({
    rootElement: '#emapp'
  });

  EMapp.data = Ember.A();


  window.EMclear = function() {
    EMapp.data.clear();
  };
  window.EMpush = function(data) {
    EMapp.data.pushObject(data);
  };
});