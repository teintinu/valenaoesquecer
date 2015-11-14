Template.nao_assinou.helpers({
  all_info: () => JSON.stringify(Meteor.user(), null, 2),
  avatar: () => "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large",
  nome: () => Meteor.user().services.facebook.name,
  jaAssinou: () => Assinaturas.find({userId: Meteor.userId()}).count() == 1
});

Template.nao_assinou.rendered = ()=>{
  $('#cpf').val(localStorage.getItem("cpf")||'')
}

Template.conteudo.events({
  'keyup #cpf': () => {
    localStorage.setItem("cpf", $('#cpf').val())
  },
  'click button': () => {
    var cpf = ($('#cpf').val() || '');
    cpf = cpf.replace(/[\s\-\.]/g,'')
    if (!cpf.match(/^\d{11,11}$/) || !TestaCPF(cpf))
    {
      $('#cpf ~ span').attr('style','color: red; padding-left: 2em');
      $('#cpf ~ span').text('CPF inválido');
      $('#cpf').focus;
      return
    }
    Meteor.call('assinar', Meteor.userId(), cpf);
  }
});



