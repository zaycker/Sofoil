/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sofoil.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Sofoil.view.main.MainController',
        'Sofoil.view.main.MainModel',
        'Sofoil.view.list.List',
        'Sofoil.view.info.Info'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'card'
    },

    activeItem: 0,

    items: [{
        xtype: 'mainlist'
    }, {
        xtype: 'info',
        reference: 'info'
    }]
});
