Ext.define('Shopware.apps.DnBash.view.Bash', {
    extend:'Ext.container.Container',
    border:false,
    alias:'widget.dn-bash-bash',
    region:'center',
    autoScroll:true,
    cls:'console-container',
    renderData: {
        'inlineStyles': `
            {config name="dnBashStylesheet"}
        `
    },

    initComponent:function () {
        var me = this;

        me.renderTpl = me.createBashTemplate();

        me.callParent(arguments);
    },

    createBashTemplate: function () {
        return new Ext.XTemplate(
            '{literal}<tpl for=".">',
            '<style>{inlineStyles}</style>',
            '<div class="console" id="dn-bash">',
                '<div class="output" id="dn-bash-output"></div>',
                '<div class="input" id="dn-bash-input">',
                    '<form id="dn-bash-form" method="GET">',
                        '<div class="username" id="dn-bash-username"></div>',
                        '<input class="inputtext" id="dn-bash-inputtext" name="cmd" autocomplete="off" autofocus>',
                    '</form>',
                '</div>',
            '</div>',
            '<form id="dn-bash-upload" method="POST" style="display: none;">',
                '<input type="file" name="file" id="dn-bash-filebrowser" />',
            '</form>',
            '</tpl>{/literal}'
        );
    }
});
