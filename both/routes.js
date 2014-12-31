Router.route('/', {
  name: 'trending'
});
Router.route('/trending/:_id', {
  name: 'trending.show'
});

Router.route('/recent', {
  name: 'recent'
});

Router.route('/recent/:_id', {
  name: 'recent.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
