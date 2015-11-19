Template.popups.helpers({
  popupEnviarHistoria: ()=>Session.get('popup')==='EnviarHistoria',
  popupCompartilhar: ()=>Session.get('popup')==='Compartilhar',
})

Template.popups.onCreated=function(){
  Session.set('popup', null)
}

Template.popups.rendered=function()
{
  $("#envie").click(function(){
    Session.set('popup', Session.get('popup')==='EnviarHistoria'?null:'EnviarHistoria')
  })

  $('#compartilhe').click(function(){
    Session.set('popup', Session.get('popup')==='Compartilhar'?null:'Compartilhar')
  })
}