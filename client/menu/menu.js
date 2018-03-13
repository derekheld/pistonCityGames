Template.menu.viewmodel({
    share: 'menu'
})

ViewModel.share({
    menu: {
        go: function(route) {
            Router.go(route);
        }
    }
});
