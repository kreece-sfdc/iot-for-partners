({
    // Called when your custom component is initialized.
    // Registers error handler for the empApi component.
    onInit : function(component, event, helper) {
        helper.init(component, event, helper);
    },
    onNormal : function(component, event, helper) {
        helper.normal(component, event, helper);
    }
})