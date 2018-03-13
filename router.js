Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('beatdown', {
        path: '/beatdown'
    });
    this.route('corruption', {
        path: '/corruption'
    });
    this.route('/games', {
        name: 'games',
        template: 'home',
    });
});
