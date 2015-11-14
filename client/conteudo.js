Meteor.autorun(()=>Meteor.subscribe('meu_login', Meteor.userId()))
Meteor.autorun(()=>Meteor.subscribe('minha_assinatura', Meteor.userId()))
Meteor.subscribe('estatisticas')

Template.conteudo.helpers({
  logado: () => Meteor.user() != null,
  jaAssinou: () => Assinaturas.find({userId: Meteor.userId()}).count() == 1
});

