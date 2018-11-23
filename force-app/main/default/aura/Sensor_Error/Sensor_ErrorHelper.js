({
    normal : function(component, event, helper) {
      	var action = component.get("c.SetToNormal");
        action.setParams({ assetId : component.get("v.recordId") });

        action.setCallback(this, function(response) {
            
        });
        $A.enqueueAction(action);  
    },
	newEvent : function(component, message) {
        if(message.data.payload.Status__c == 'Normal') {
            component.set('v.visible', false);
        }
        else {
            component.set('v.visible', true);
        }
	},
    // Called when your custom component is initialized.
    // Registers error handler for the empApi component.
    init : function(component, event, helper) {
        // Register error listener for the empApi component.
        const empApi = component.find("empApi");
        // Error handler function that prints the error to the console.
        const errorHandler = function (message) {
            console.error("Received error ", JSON.stringify(message));
        };
        // Register error listener and pass in the error handler function.
        empApi.onError(errorHandler);
        
        helper.subscribe(component, event, helper);
    },

    // Client-side function that invokes the subscribe method on the
    // empApi component.
    subscribe : function(component, event, helper) {
        // Get the empApi component.
        const empApi = component.find("empApi");
        // Get the channel from the input box.
        var channel = component.get("v.channel");
        const replayId = -1;

        // Callback function to be passed in the subscribe call.
        // After an event is received, this callback prints the event
        // payload to the console.
        const callback = function (message) {
            console.log("Event Received : " + JSON.stringify(message));
            helper.newEvent(component, message);
        };

        // Subscribe to the channel and save the returned subscription object.
        empApi.subscribe(channel, replayId, callback).then(function(newSubscription) {
            console.log("Subscribed to channel " + channel);
            component.set("v.subscription", newSubscription);
        });
    },

    // Client-side function that invokes the unsubscribe method on the
    // empApi component.
    unsubscribe : function(component, event, helper) {
        // Get the empApi component.
        const empApi = component.find("empApi");
        // Get the channel from the subscription object.
        const channel = component.get("v.subscription").channel;

        // Callback function to be passed in the subscribe call.
        const callback = function (message) {
            console.log("Unsubscribed from channel " + channel);
        };

        // Unsubscribe from the channel using the sub object.
        empApi.unsubscribe(component.get("v.subscription"), callback);
    }
})