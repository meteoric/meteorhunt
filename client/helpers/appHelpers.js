isIOS = function () {
  return !!navigator.userAgent.match(/iPad/i) || !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i);
}

Template.registerHelper('platformClasses', function () {
  var classes = [];

  if (Meteor.isCordova) {
    classes.push('platform-cordova');
  }
  if (Meteor.isClient) {
    classes.push('platform-web');
  }
  if (Meteor.isCordova && isIOS()) {
    classes.push('platform-ios');
  }

  return classes.join(' ');
});
