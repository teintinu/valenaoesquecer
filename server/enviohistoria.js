historias= new Mongo.Collection("historias");

Meteor.methods({
  envioHistoria: function (userId, local, link, texto) {
    if (userId!=this.userId)
      return;

    var user=Meteor.users.findOne({_id: userId});

    console.dir(user)

    if (!user.profile || (user.profile.bloqueio > new Date().getTime()))
      return "Você precisa esperar pelo menos uma hora pra enviar outra história";

    var fb = user.services.facebook;

    historias.insert({
      userId,
      local,
      link,
      texto,
      envio: new Date(),
      verificado: false
    })

    Meteor.users.update({_id: userId}, {
      $set: {
        "profile.bloqueio": new Date().getTime() + 1000*60*60
      }
    })
  }
});