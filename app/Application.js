/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Sofoil.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Sofoil',

    routes: {
        'user/:id': 'showUser'
    },

    stores: [
        'Sofoil.store.Personnel'
    ]
});
