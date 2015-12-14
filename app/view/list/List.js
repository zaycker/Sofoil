Ext.define('Sofoil.view.list.List',{
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Контакты',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        rowdblclick: 'onItemSelected'
    }
});
