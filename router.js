Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('/', {
        name: 'default',
        template: 'beatdown',
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
