Ext.define('Sofoil.view.info.InfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.info-info',

    /**
     * Processes 'back' button
     */
    onBackToList: function () {
        this.redirectTo('');
    }
    
});
