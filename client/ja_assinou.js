Template.ja_assinou.helpers({
  all_info: () => JSON.stringify(Meteor.user(), null, 2),
  avatar: () => "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large",
  nome: () => Meteor.user().services.facebook.name,
  jaAssinou: () => Assinaturas.find({userId: Meteor.userId()}).count() == 1
});


Template.conteudo.events({
  'click #cancela_assinatura': () => {
    Meteor.call('cancelar_assinatura', Meteor.userId(), Assinaturas.findOne({userId: Meteor.userId()}).cpf);
  }
});
