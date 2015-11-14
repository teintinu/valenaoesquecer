Template.estatisticas.helpers({
  qtde_assinaturas: () => Totais.findOne({name: 'qtde_assinaturas'}).value
});

