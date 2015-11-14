
Meteor.methods({
  assinar: function (userId, cpf) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    if (!TestaCPF(cpf))
    {
      throw new Meteor.Error("CPF invalido");
    }

    if (Assinaturas.findOne({$and: [{userId}, {cpf}]})) {
      throw new Meteor.Error("já assinou 1");
    }

    Assinaturas.insert({
      userId, cpf, momento: new Date()
    });

    Totais.upsert({name: 'qtde_assinaturas'}, {$inc: {value: 1}})

    // total por sexo
    // total por idade
    // total por cidade
    // total por estado

  },
  cancelar_assinatura: function (userId, cpf) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    if (!Assinaturas.findOne({$and: [{userId}, {cpf}]})) {
      throw new Meteor.Error("not authorized");
    }

    Assinaturas.remove({
      userId, cpf
    });

    Totais.upsert({name: 'qtde_assinaturas'}, {$inc: {value: -1}})

    // total por sexo
    // total por idade
    // total por cidade
    // total por estado

  }
});

