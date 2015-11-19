Template.needLogin.helpers({
  setupFacebook: () => Session.get('setupFacebook')===1
})

Template.needLogin.events({
  "click #loginFacebook": function(ev){
    ev.preventDefault();
    Meteor.loginWithFacebook();
  }
})