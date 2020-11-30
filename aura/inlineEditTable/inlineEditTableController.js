({
    initRecords: function(component, event, helper) {
        // call the apex class method and fetch account list  
        var action = component.get("c.fetchDetails");
        var recordId = component.get("v.recordId");
        var CostingList = component.get("v.CostingList");
        var fetchRecords = component.get('c.fetchRecords');
        $A.enqueueAction(fetchRecords);
        action.setParams({
            "pc":recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                console.log(JSON.stringify(storeResponse));
                // set CostingList list with return value from server.
                //alert(JSON.stringify(storeResponse));
                if (JSON.stringify(storeResponse) == '[]')
                {
                    component.set("v.emptyList",true);
                }
                else{
                    component.set("v.emptyList",false);
                    
                }
                component.set("v.CostingList", storeResponse);
                //this is where ^ shit is populated by calling Apex
            }
        });
        $A.enqueueAction(action);
        //helper.createObjectData(component, event);
        {
            email:
            address:
            [
                
            ]
        }
        
        if (CostingList === undefined || CostingList.length == 0) {
            // array empty or does not exist
            //  alert("halp"); 
            
        }
        
        
    },
    
    
    fetchRecords: function(component, event, helper) {
        var action = component.get("c.fetchRecordCount");
        var recordId = component.get("v.recordId");
        var noOfRecords = component.get("v.noOfRecords");
        action.setParams({
            "pc":recordId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //alert('success');
                var storeResponse = response.getReturnValue();
                //console.log(JSON.stringify(storeResponse));
                // set CostingList list with return value from server.
                //alert(JSON.stringify(storeResponse));
                
                component.set("v.noOfRecords", storeResponse);
                //alert(storeResponse);
                //this is where ^ shit is populated by calling Apex
            }
            else
            {
                //alert("failed");
            }
        });
        $A.enqueueAction(action);
    },
    
    toggleEdit: function(component, event, helper) {
        var currentStatus = component.get("v.editModeBtn");
        
        if(currentStatus == true)
        {    
            component.set("v.editModeBtn",false);
            component.set("v.showSaveCancelBtn",false);
            var exitEdit = component.get('c.initRecords');
            $A.enqueueAction(exitEdit);
            //$A.get('e.force:refreshView').fire();
            
        }
        
        else
        {
            component.set("v.editModeBtn",true);
            component.set("v.showSaveCancelBtn",true);
            
            
        }
    },
    
    
    allSave: function(component, event, helper) {
        
        var editmode = component.get("v.editModeBtn");
        var newRow = component.get("v.newRowMode");
        
        
        if(editmode == true && newRow == true)
        {
            var save1 = component.get('c.SaveClean');
            var save2 = component.get('c.saveNew');
            $A.enqueueAction(save1);
            $A.enqueueAction(save2);
            /*
            var doubleSaveONE = component.get('c.doubleSaveONE');
            var doubleSaveTWO = component.get('c.doubleSaveTWO');

            $A.enqueueAction(doubleSaveTWO);
            $A.enqueueAction(doubleSaveONE);
            var saveEditStatus = component.get("v.saveEditStatus");
            var saveRowStatus = component.get("v.saveRowStatus");
            if(saveEditStatus == true && saveRowStatus == true)
            {
                

                &var refreshTable = component.get('c.initRecords');
                $A.enqueueAction(refreshTable);
                var toastEventt = $A.get("e.force:showToast");
                toastEventt.setParams({
                    "title": "Success!",
                    "message": "New Records Saved.",
                    "type": "success"
                });
                $A.get('e.force:refreshView').fire();
                toastEventt.fire();
                component.set("v.editModeBtn",false);
                component.set("v.newCostingList", []);
                component.set("v.newRowMode", false);
                component.set("v.HideSpinner", false);
                component.set("v.saveEditStatus", false);
                component.set("v.saveRowStatus", false);
                
                
            }
            else if(saveEditStatus == true && saveRowStatus == false)
            {
                alert("check newly inserted row");
            }

            else if(saveEditStatus == false && saveRowStatus == true)
            {
                alert("new inserted row done, check edit.");
            }*/
            
        }
        else if(editmode == true && newRow == false)
        {
            var saveEdit = component.get('c.Save');
            $A.enqueueAction(saveEdit); 
            
        }
        
            else if(editmode == false && newRow == true)
            {
                
                var saveNewRow = component.get('c.saveNew');
                $A.enqueueAction(saveNewRow); 
                
            }
    },
    
    doubleSaveONE: function(component, event, helper) {
        //component.set("v.HideSpinner", true);
        if (helper.requiredValidation(component, event) == true){            
            // call the saveAccount apex method for update inline edit fields update 
            var action = component.get("c.saveAccount");
            action.setParams({
                'lstOfDetails': component.get("v.CostingList")
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set("v.saveEditStatus", true);
                    var storeResponse = response.getReturnValue();
                    component.set("v.CostingList", storeResponse);
                    
                }
                
                else
                {
                    component.set("v.saveEditStatus", false);
                    
                }
            });
            $A.enqueueAction(action);
        }
        
        
    },
    
    
    doubleSaveTWO: function(component, event, helper) {
        //component.set("v.HideSpinner", true);
        if (helper.validateRequired(component, event)) {
            var action = component.get("c.saveContacts");
            action.setParams({
                "ListContact": component.get("v.newCostingList")
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                
                if (state === "SUCCESS") {
                    component.set("v.newCostingList", []);
                    var refreshTable = component.get('c.initRecords');
                    component.set("v.saveRowStatus", true);
                }
                else
                {
                    component.set("v.saveRowStatus", false);
                    
                }
            });
            
            
            $A.enqueueAction(action);
            
            
            
        }
    },
    
    combinedAF: function(component, event, helper) {
        if (helper.requiredValidation(component, event) == true && helper.validateRequired(component, event)== true) 
        {
            var stateone;
            /* SUCCESS
component.set("v.saveEditStatus", true);
var storeResponse = response.getReturnValue();
component.set("v.CostingList", storeResponse); 
*/
            var statetwo;
            
            /*
component.set("v.newCostingList", []);
var refreshTable = component.get('c.initRecords');
component.set("v.saveRowStatus", true); 
*/
            var actionone = component.get("c.saveAccount");
            actionone.setParams({
                'lstOfDetails': component.get("v.CostingList")
            });
            actionone.setCallback(this, function(response) {
                var stateone = response.getState();
                if (stateone === "SUCCESS") 
                {
                    var stateone = "SUCCESS";
                }
                
                else
                {
                    var stateone = "FAIL";
                    component.set("v.saveEditStatus", false); 
                }
            });
            $A.enqueueAction(actionone); 
            var actiontwo = component.get("c.saveContacts");
            actiontwo.setParams({
                "ListContact": component.get("v.newCostingList")
            });
            actiontwo.setCallback(this, function(response) {
                var statetwo = response.getState();
                
                if (statetwo === "SUCCESS") {
                }
                else
                {
                    var stateone = "FAIL";
                    component.set("v.saveRowStatus", false); 
                }
            });
            
            
            $A.enqueueAction(actiontwo);
        }
    },
    
    SaveClean: function(component, event, helper) {
        component.set("v.HideSpinner", true);
        // Check required fields(Name) first in helper method which is return true/false
        if (helper.requiredValidation(component, event)){            
            // call the saveAccount apex method for update inline edit fields update 
            var action = component.get("c.saveAccount");
            action.setParams({
                'lstOfDetails': component.get("v.CostingList")
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var storeResponse = response.getReturnValue();
                    // set CostingList list with return value from server.
                    component.set("v.CostingList", storeResponse);
                    // Hide the save and cancel buttons by setting the 'showSaveCancelBtn' false 
                    
                    component.set("v.HideSpinner", false);
                    component.set("v.editModeBtn",false);
                    //component.find("recordLoader").reloadRecord();
                    //component.set("v.newCostingList", []);
                    
                    
                    helper.showHide(component);
                    component.set("v.showSaveCancelBtn",false);
                    var refreshTable = component.get('c.initRecords');
                    $A.enqueueAction(refreshTable);
                    $A.get('e.force:refreshView').fire();
                    
                    
                    //                    alert('Updated...');
                    //                    
                    
                }
                
                else
                {
                    var toastEventt = $A.get("e.force:showToast");
                    toastEventt.setParams({
                        "title": "Error!",
                        "message": "Please check fields.",
                        "type": "error"
                    });
                    toastEventt.fire();
                    component.set("v.showSaveCancelBtn",true);
                    component.set("v.HideSpinner", false);
                    
                    
                    
                    //                    alert('Please check fields');
                    
                }
            });
            $A.enqueueAction(action);
            $A.get('e.force:refreshView').fire(); 
            
        } 
    },
    
    Save: function(component, event, helper) {
        component.set("v.HideSpinner", true);
        // Check required fields(Name) first in helper method which is return true/false
        if (helper.requiredValidation(component, event)){            
            // call the saveAccount apex method for update inline edit fields update 
            var action = component.get("c.saveAccount");
            action.setParams({
                'lstOfDetails': component.get("v.CostingList")
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var storeResponse = response.getReturnValue();
                    // set CostingList list with return value from server.
                    component.set("v.CostingList", storeResponse);
                    // Hide the save and cancel buttons by setting the 'showSaveCancelBtn' false 
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "Information successfully updated.",
                        "type": "success"
                    });
                    component.set("v.HideSpinner", false);
                    component.set("v.editModeBtn",false);
                    //component.find("recordLoader").reloadRecord();
                    //component.set("v.newCostingList", []);
                    
                    
                    toastEvent.fire();
                    helper.showHide(component);
                    component.set("v.showSaveCancelBtn",false);
                    var refreshTable = component.get('c.initRecords');
                    $A.enqueueAction(refreshTable);
                    $A.get('e.force:refreshView').fire();
                    
                    
                    //                    alert('Updated...');
                    //                    
                    
                }
                
                else
                {
                    var toastEventt = $A.get("e.force:showToast");
                    toastEventt.setParams({
                        "title": "Error!",
                        "message": "Please check fields.",
                        "type": "error"
                    });
                    toastEventt.fire();
                    component.set("v.showSaveCancelBtn",true);
                    component.set("v.HideSpinner", false);
                    
                    
                    
                    //                    alert('Please check fields');
                    
                }
            });
            $A.enqueueAction(action);
            $A.get('e.force:refreshView').fire(); 
            
        } 
    },
    
    cancel : function(component,event,helper){
        // on cancel refresh the view (This event is handled by the one.app container. It’s supported in Lightning Experience, the Salesforce app, and Lightning communities. ) 
        //$A.get('e.force:refreshView').fire(); 
        component.set("v.showSaveCancelBtn",false);
        component.set("v.editModeBtn",false);
        component.set("v.newRowMode",false);
        helper.removeObjectData(component, event);
        component.set("v.newCostingList", []);
        var refreshTable = component.get('c.initRecords');
        $A.enqueueAction(refreshTable);
        
        
        
    },
    
    newContact: function(component, event, helper) {
        // Global event force:createRecord is used
        var createContact = $A.get("e.force:createRecord");
        // Parameters like apiName and defaultValues are set
        createContact.setParams({
            "entityApiName": "Costing__c",
            "defaultFieldValues": {
                "Project_Costing__c": component.get("v.recordId")
            }
        });
        
        // Event fired and new contact dialog open
        createContact.fire();
        $A.get('e.force:refreshView').fire(); 
    },
    
    // function for create new object Row in Contact List 
    addNewRow: function(component, event, helper) {
        // call the comman "createObjectData" helper method for add new Object Row to List  
        helper.createObjectData(component, event);
        // component.set("v.showEditSaveCancelBtn",true);
        component.set("v.showSaveCancelBtn",true);
        component.set("v.newRowMode",true);        
        
        
    },
    
    // function for delete the row 
    removeDeletedRow: function(component, event, helper) {
        // get the selected row Index for delete, from Lightning Event Attribute  
        var index = event.getParam("indexVar");
        var targetComponent = event.getParam("targetComponent");
        if(targetComponent == "additional") {
            // get the all List (newCostingList attribute) and remove the Object Element Using splice method    
            var AllRowsList = component.get("v.newCostingList");
            AllRowsList.splice(index, 1);
            // set the contactList after remove selected row element  
            component.set("v.newCostingList", AllRowsList);
        } 
        
        else if (targetComponent == "original") {
            // get the all List (newCostingList attribute) and remove the Object Element Using splice method    
            var AllRowsList = component.get("v.CostingList");
            
            AllRowsList.splice(index, 1);
            // set the contactList after remove selected row element  
            component.set("v.CostingList", AllRowsList);
            
            var action = component.get("c.saveAccount");
            action.setParams({
                'lstOfDetails': AllRowsList
            });
            
            var refreshTable = component.get('c.initRecords');
            $A.enqueueAction(refreshTable);
            
            
        }
        
        
        
    },
    
    
    // function for save the Records 
    saveNew: function(component, event, helper) {
        component.set("v.HideSpinner", true);
        
        // first call the helper function in if block which will return true or false.
        // this helper function check the "first Name" will not be blank on each row.
        if (helper.validateRequired(component, event)) {
            // call the apex class method for save the Contact List
            // with pass the contact List attribute to method param.
            
            
            var action = component.get("c.saveContacts");
            action.setParams({
                "ListContact": component.get("v.newCostingList")
            });
            
            
            // set call back 
            action.setCallback(this, function(response) {
                var state = response.getState();
                
                if (state === "SUCCESS") {
                    
                    // if response if success then reset/blank the 'contactList' Attribute 
                    // and call the common helper method for create a default Object Data to Contact List 
                    component.set("v.newCostingList", []);
                    component.set("v.newRowMode",false);
                    
                    var refreshTable = component.get('c.initRecords');
                    $A.enqueueAction(refreshTable);
                    var toastEventt = $A.get("e.force:showToast");
                    toastEventt.setParams({
                        "title": "Success!",
                        "message": "New Records Saved.",
                        "type": "success"
                    });
                    $A.get('e.force:refreshView').fire();
                    toastEventt.fire();
                    component.set("v.showEditSaveCancelBtn",false);
                    component.set("v.HideSpinner", false);
                    
                    
                }
                else
                {
                    var toastEventt = $A.get("e.force:showToast");
                    toastEventt.setParams({
                        "title": "Save failed",
                        "message": "Please check fields!",
                        "type": "error"
                    });
                    toastEventt.fire();
                    component.set("v.showSaveCancelBtn",true);
                    component.set("v.HideSpinner", false);
                    component.set("v.newRowMode",true);
                    
                    
                    
                    
                    //                    alert('Please check fields');
                    
                }
            });
            // enqueue the server side action  
            
            $A.enqueueAction(action);
            
            
            
        }
        
        
    },
    
    
    
    
    
})