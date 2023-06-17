// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"databinder_1")
                .setName("databinder_1")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("12.952380952380953em")
                .setTop("37.333333333333336em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label20")
                .setLeft("48em")
                .setTop("3.8095238095238093em")
                .setWidth("7.0095238095238095em")
                .setHeight("1.980952380952381em")
                .setCaption("اسم المكتب")
            );
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout2")
                .setLeft("2.2857142857142856em")
                .setTop("3.8095238095238093em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
                .beforeInputAlert("_xui_ui_formlayout2_beforeinputalert")
                .setCustomStyle({
                    "POOL" : {
                        "color" : "#FF8C00"
                    }
                })
                .setCustomClass({
                    "POOL" : "sets"
                })
            );
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout4")
                .setLeft("9.904761904761905em")
                .setTop("6.095238095238095em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired before one of controls in form will show the 'invalid' or 'required' alert window. If returns false, the default action will be ignored
         * @method beforeInputAlert [xui.UI.FormLayout event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {xui.UIProfile} ctrlPrf , the input control's profile object
         * @param {String} type , alert type. invalid or required
        */
        _xui_ui_formlayout2_beforeinputalert:function(profile, ctrlPrf, type){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});