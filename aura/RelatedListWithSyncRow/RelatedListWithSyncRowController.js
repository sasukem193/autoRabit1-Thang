({
    
    doInit: function(component, event, helper) {
        // call the fetchPickListVal(component, field_API_Name, aura_attribute_name_for_store_options) -
        // method for get picklist values dynamic   
        helper.fetchPickListVal(component, 'Level__c', 'ratingPicklistOpts');
    },
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
    },
    
    closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
    },
    
    
    synctwo: function(component, event, helper) {
        component.set("v.HideSpinner", true);
        component.set("v.singleRec.Selected_Default__c", true);
        //alert(JSON.stringify(component.get("v.singleRec")));
        //alert("halp");

        // Check required fields(Name) first in helper method which is return true/false           
            // call the saveAccount apex method for update inline edit fields update 
            var action = component.get("c.syncTwo");
            action.setParams({
                'lstOfDetails': component.get("v.singleRec"),
                'rowtosync': component.get("v.singleRec.Id")
                //'rowSync': component.get("v.singleRec.Id"),

            });
        
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.getEvent("invokeParent").fire();

                    var storeResponse = response.getReturnValue();
                    //alert(JSON.stringify(storeResponse));
                    // set CostingList list with return value from server.
                    //component.set("v.singleRec", storeResponse);
                    // Hide the save and cancel buttons by setting the 'showSaveCancelBtn' false 
                    
                    component.set("v.HideSpinner", false);
                    component.set("v.editModeBtn",false);
                    //component.find("recordLoader").reloadRecord();
                    //component.set("v.newCostingList", []);
                    
                    
                    //helper.showHide(component);
                    component.set("v.showSaveCancelBtn",false);
                    //var refreshTable = component.get('c.initRecords');
                    //$A.enqueueAction(refreshTable);
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
                            component.getEvent("invokeParent").fire();

            $A.get('e.force:refreshView').fire(); 
            
        
    },
    
    
    
    inlineEditName : function(component,event,helper){   
        // show the name edit field popup 
        // 
        component.set("v.editMode", true);
        component.set("v.showSaveCancelBtn",true);
        component.set("v.nameEditMode", true); 
        // after the 100 millisecond set focus to input field   
        setTimeout(function(){ 
            component.find("inputId").focus();
        }, 100);
    },
    
    inlineEditRating : function(component,event,helper){   
        // show the rating edit field popup 
        component.set("v.ratingEditMode", true); 
        // after set ratingEditMode true, set picklist options to picklist field 
        component.find("accRating").set("v.options" , component.get("v.ratingPicklistOpts"));
        // after the 100 millisecond set focus to input field   
        setTimeout(function(){ 
            component.find("accRating").focus();
        }, 100);
    },
    
    onNameChange : function(component,event,helper){ 
        // if edit field value changed and field not equal to blank,
        // then show save and cancel button by set attribute to true
        if(event.getSource().get("v.value").trim() != ''){ 
            component.set("v.showSaveCancelBtn",true);
        }
    },
    
    onRatingChange : function(component,event,helper){ 
        // if picklist value change,
        // then show save and cancel button by set attribute to true
        component.set("v.showSaveCancelBtn",true);
    },     
    
    closeNameBox : function (component, event, helper) {
        // on focus out, close the input section by setting the 'nameEditMode' att. as false   
        component.set("v.nameEditMode", false); 
        // check if change/update Name field is blank, then add error class to column -
        // by setting the 'showErrorClass' att. as True , else remove error class by setting it False   
        if(event.getSource().get("v.value").trim() == ''){
            component.set("v.showErrorClass",true);
        }else{
            component.set("v.showErrorClass",false);
        }
    }, 
    
    closeRatingBox : function (component, event, helper) {
        // on focus out, close the input section by setting the 'ratingEditMode' att. as false
        component.set("v.ratingEditMode", false); 
    },
    
    
    
    
    
    
    inlineEditArch : function(component,event,helper){   
        // show the name edit field popup 
        component.set("v.architectEditMode", true); 
        // after the 100 millisecond set focus to input field   
        setTimeout(function(){ 
            component.find("Architect__c").focus();
        }, 100);
    },
    
    
    onArchChange : function(component,event,helper){ 
        // if edit field value changed and field not equal to blank,
        // then show save and cancel button by set attribute to true
        if(event.getSource().get("v.value").trim() != ''){ 
            component.set("v.showSaveCancelBtn",true);
        }
    },
    
    
    closeArchBox : function (component, event, helper) {
        // on focus out, close the input section by setting the 'nameEditMode' att. as false   
        component.set("v.architectEditMode", false); 
        // check if change/update Name field is blank, then add error class to column -
        // by setting the 'showErrorClass' att. as True , else remove error class by setting it False   
        if(event.getSource().get("v.value").trim() == ''){
            component.set("v.showErrorClass",true);
        }else{
            component.set("v.showErrorClass",false);
        }
    },
    
    
    
    
    inlineEdit : function(component,event,helper){   
        // show the name edit field popup 
        component.set("v.editMode", true);
        component.set("v.showSaveCancelBtn",true);
        
        //component.find("accRating").set("v.options" , component.get("v.ratingPicklistOpts"));
        
        // after the 100 millisecond set focus to input field   
    },
    
    
    
    onChange : function(component,event,helper){ 
        // if edit field value changed and field not equal to blank,
        // then show save and cancel button by set attribute to true
        if(event.getSource().get("v.value").trim() != ''){ 
            component.set("v.showSaveCancelBtn",true);
        }
    },
    
    
    closeEditBox : function (component, event, helper) {
        // on focus out, close the input section by setting the 'nameEditMode' att. as false   
        component.set("v.editMode", false); 
        // check if change/update Name field is blank, then add error class to column -
        // by setting the 'showErrorClass' att. as True , else remove error class by setting it False   
        
        try{
            if(event.getSource().get("v.value").trim() == ''){
                component.set("v.showErrorClass",true);
            }else{
                component.set("v.showErrorClass",false);
            }    
        }
        
        catch(err)
        {
            return;
        }
        
        
    },
    onClick : function(component, event, helper) {
        var recordId = component.get('v.singleRec.Id');
        var navEvt;
        if(recordId) {
            navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParam("recordId", recordId);
        } else {
            navEvt = $A.get("e.force:navigateToURL");
            navEvt.setParam("url", component.get('v.relativeUrl'));
        }
        navEvt.fire();
    },
    
    removeRow : function(component, event, helper){
        // fire the DeleteRowEvt Lightning Event and pass the deleted Row Index to Event parameter/attribute
        component.set("v.isOpen", false);
        component.set("v.HideSpinner", true);
        
        
        component.getEvent("DeleteRowEvt").setParams({"indexVar" : component.get("v.sNo") , "targetComponent" : "original"}).fire();
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": component.get("v.singleRec.Name")+" has been deleted",
            "type": "success"
        });
        toastEvent.fire();        
        var action = component.get("c.deleteAccount");
        action.setParams({
            'rowDeleted': component.get("v.singleRec.Id")
        });
        $A.enqueueAction(action);
        $A.get('e.force:refreshView').fire(); 
        
        component.set("v.HideSpinner", false);
       
    }, 
    
    edit : function(component, event, helper) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": component.get("v.singleRec.Id")
        });
        editRecordEvent.fire();
    },
    
    sync : function(component, event, helper) {
        
        var action = component.get("c.sync");
        var recordId = component.get("v.singleRec.Id");
        action.setParams({
            "rowDeleted":recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
            }
        });
       // $A.enqueueAction(action);
        //$A.get('e.force:refreshView').fire(); 
        
    },
    
    
    
    
    delete : function(component, evt, helper) {
    var expense = component.get("v.expense");    
    var deleteEvent = component.getEvent("deleteExpenseItem");
    deleteEvent.setParams({ "expense": expense }).fire();
},  
    
    
    
    
    
    
    
})