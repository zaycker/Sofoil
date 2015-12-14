Ext.define('Sofoil.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    requires: [
        'Sofoil.model.User'
    ],

    model: 'Sofoil.model.User',

    data: {
        items: [
            {
                'id': 1,
                'name': 'Lisa',
                'email': 'lisa@simpsons.com',
                'phone': '555-111-1224',
                'bio': 'Это поле показывается только для полной карточки контакта'
            },
            {
                'id': 2,
                'name': 'Bart',
                'email': 'bart@simpsons.com',
                'phone': '555-222-1234',
                'bio': 'Это поле показывается только для полной карточки контакта'
            },
            {
                'id': 3,
                'name': 'Homer',
                'email': 'homer@simpsons.com',
                'phone': '555-222-1244',
                'bio': 'Это поле показывается только для полной карточки контакта'
            },
            {
                'id': 4,
                'name': 'Marge',
                'email': 'marge@simpsons.com',
                'phone': '555-222-1254',
                'bio': 'Это поле показывается только для полной карточки контакта'
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
