Meteor.startup(function () {
  init('qtde_assinaturas', 0)
  function init(name, value)
  {
    if (!Totais.findOne({name}))
      Totais.insert({name, value})
  }
});
