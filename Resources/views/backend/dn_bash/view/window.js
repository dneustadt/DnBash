Ext.define('Shopware.apps.DnBash.view.Window', {
    extend: 'Enlight.app.Window',
    title: 'Bash',
    alias: 'widget.dn-bash-window',
    id: 'dn-bash',
    border: false,
    autoShow: true,
    height: 650,
    width: 925,
    layout: 'fit',
 
    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'dn-bash-bash',
                flex: 1
            }
        ];
    
        me.callParent(arguments);
    }

});
 
