Template.enviarhistoria.helpers({
  setupFacebook: () => Session.get('setupFacebook')===1,
  nome: ()=> Meteor.user().profile.name
})

Template.enviarhistoria.events({
  "click #enviarHistoriaValidando": function(ev){
    ev.preventDefault();
    var local=$('#loc').val();
    var link=$('#link').val();
    var texto=$('#texto').val();
    Meteor.call('envioHistoria', Meteor.userId(), local, link, texto, function(err, res){
      if (res)
        alert(res)
      else if (err)
        alert(err.message || err)
    });
  }
})