Meteor.publish('meu_login',
  (userId) =>
    Meteor.users.find({_id: userId},
      {fields: { 'services.facebook': 1 }})
)

Meteor.publish('minha_assinatura',
  (userId) => Assinaturas.find({userId})
)

Meteor.publish('estatisticas',
  () => Totais.find()
)