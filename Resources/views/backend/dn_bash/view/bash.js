Ext.define('Shopware.apps.DnBash.view.Bash', {
    extend:'Ext.container.Container',
    border: false,
    alias:'widget.dn-bash-bash',
    region:'center',
    autoScroll:true,
    style: {
        'margin': 0,
        'background': '#000',
        'font-family': 'monospace',
        'font-size': '14px',
        'font-style': 'normal',
        'font-variant': 'normal',
        'font-weight': '400',
        'line-height': '20px',
        'overflow': 'hidden'
    },
    renderData: {
        'inlineStyles': `
            .inputtext {
                font-family: monospace;
                font-size: 14px;
                font-style: normal;
                font-variant: normal;
                font-weight: 400;
                line-height: 20px;
                overflow: hidden;
            }
            .console {
                width: 100%;
                height: 100%;
                margin: auto;
                position: absolute;
                color: #fff;
                overflow: hidden;
            }
            .output {
                width: auto;
                height: auto;
                position: absolute;
                overflow-y: scroll;
                top: 0;
                bottom: 20px;
                left: 0;
                right: 0;
                line-height: 20px;
                padding: 10px 0 0 10px;
                white-space: pre-wrap;
            }                
            .input form {
                position: relative;
                margin-bottom: 0px;
            }  
            .username {
                height: 20px;
                width: auto;
                line-height: 20px;
                float: left;
            }
            .input {
                border-top: 1px solid #333333;
                width: 100%;
                height: 20px;
                position: absolute;
                bottom: 0;
                padding-left: 10px;
            }
            .inputtext {
                width: auto;
                height: 20px;
                bottom: 0px;
                margin-bottom: 0px;
                background: #000;
                border: 0;
                float: left;
                padding-left: 8px;
                color: #fff;
            }
            .inputtext:focus {
                outline: none;
            }
            .console ::-webkit-scrollbar {
                width: 12px;
            }
            .console ::-webkit-scrollbar-track {
                background: #101010;
            }
            .console ::-webkit-scrollbar-thumb {
                background: #303030; 
            }
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
