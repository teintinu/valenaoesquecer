Template.enviarhistoria.helpers({
  nome: ()=> Meteor.user().profile.name
})

Template.enviarhistoria.events({
  "click #enviarHistoriaValidando": function(ev){
    ev.preventDefault();
    var local=$('#loc').val();
    var link=$('#link').val();
    var pub=$('#pub').val();
    var texto=$('#texto').val();
    if (!local) {
      alert('Informe o local onde aconteceu sua história')
      return
    }
    if (!link) {
      alert('Informe um link que conta sua história. Pode ser um vídeo ou uma reportagem')
      return
    }
    Meteor.call('envioHistoria', Meteor.userId(), local, link, pub, texto, function(err, res){
      if (res)
        alert(res)
      else if (err)
        alert(err.message || err)
    });
  }
})