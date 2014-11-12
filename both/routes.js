Router.route('/', {
  name: 'products.index'
});
Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/recent', {
  name: 'products.recent'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
