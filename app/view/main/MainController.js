/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sofoil.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        '': 'home',
        'user/:id': 'showUser'
    },

    /**
     * @param {Ext.view.Table} sender
     * @param {Ext.data.Model} record
     */
    onItemSelected: function (sender, record) {
        this.redirectTo(record);
    },

    /**
     * Process home route
     */
    home: function () {
        this.getView().setActiveItem(0);
    },

    /**
     * Process user selection
     * @param {String} id
     */
    showUser: function (id) {
        this.getView().setActiveItem(1);
        // TODO: it feels like I don't know the right global definition
        var store = Sofoil.getApplication().getStore('Personnel');
        this.lookupReference('info').getViewModel().setData({
            rec: store.getById(id).getData()
        });
    }
});
