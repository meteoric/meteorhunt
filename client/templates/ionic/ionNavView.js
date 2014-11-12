Template.ionNavView.helpers({
  classes: function () {
    var classes = [''];

    // if (this.animation) {
      // classes.push(this.animation);
    // }

    return classes.join(' ');
  }
});

// Template.ionNavView.rendered = function() {
//   console.log('rendered', this.find('.nav-container'));
//   this.find('.nav-container')._uihooks = {
//     insertElement: function(node, next) {
//       console.log('node', node);
//       var direction = navDirection === 'left' ? 'reverse' : 'forward';
//       $('.nav-container').addClass(direction);
//
//       $(node).addClass('ng-animate ng-enter');
//       $(node).insertBefore(next);
//
//       // start the animation:
//       Meteor.setTimeout(function() {
//         $(node).addClass('ng-enter-active');
//       }, 10);
//
//       Meteor.setTimeout(function() {
//         $(node).removeClass('ng-animate ng-enter ng-enter-active');
//         $('.nav-container').removeClass(direction);
//       }, 400);
//     },
//
//     removeElement: function(node) {
//       $(node).addClass('ng-animate ng-leave ng-leave-active');
//
//       Meteor.setTimeout(function() {
//         $(node).remove();
//       }, 400);
//     }
//   };
//
// };
//
// Template.ionNavView.events({
//   'click [data-nav-direction]': function(event) {
//     Session.set('navDirection', $(event.currentTarget).data('nav-direction'));
//   }
// });
