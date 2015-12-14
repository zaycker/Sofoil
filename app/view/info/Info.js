Ext.define('Sofoil.view.info.Info',{
    extend: 'Ext.form.Panel',
    xtype: 'info',

    requires: [
        'Sofoil.view.info.InfoController',
        'Sofoil.view.info.InfoModel'
    ],

    controller: 'info-info',
    viewModel: {
        type: 'info-info'
    },

    title: 'Детали контакта',
    frame: true,
    padding: 10,


    items: [
        {
            xtype: 'textfield',
            bind: '{rec.name}',
            fieldLabel: 'Имя'
        },
        {
            xtype: 'textfield',
            bind: '{rec.email}',
            fieldLabel: 'Email'
        },
        {
            xtype: 'textfield',
            bind: '{rec.phone}',
            fieldLabel: 'Телефон'
        },
        {
            xtype: 'textareafield',
            bind: '{rec.bio}',
            fieldLabel: 'Биография'
        },
        {
            xtype: 'hiddenfield',
            bind: '{rec.id}'
        },
        {
            xtype: 'button',
            text: 'Назад',
            listeners: {
                click: 'onBackToList'
            }
        }
    ]
});
