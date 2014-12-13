Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({service: 'meteor-developer'});
  ServiceConfiguration.configurations.insert({
    service: 'meteor-developer',
    clientId: Meteor.settings[Meteor.settings.environment].meteorDeveloper.clientId,
    secret: Meteor.settings[Meteor.settings.environment].meteorDeveloper.secret
  });
});

Accounts.onCreateUser(function(options, user) {
  user.emails = user.services['meteor-developer'].emails;
  user.profile = options.profile;
  return user;
});
