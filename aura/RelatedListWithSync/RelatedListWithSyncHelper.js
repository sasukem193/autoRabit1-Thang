({
    requiredValidation : function(component,event) {
        // get all accounts.. 	
        var allRecords = component.get("v.CostingList");
        var isValid = true;
        // play a for loop on all account list and check that account name is not null,   
        for(var i = 0; i < allRecords.length;i++){
            if(allRecords[i].Name == null || allRecords[i].Name.trim() == ''){
                //alert('Complete this field : Row No ' + (i+1) + ' Name is null' );
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Check fields!",
                    "message": 'Complete this field : Row No ' + (i+1) + ' Name is null',
                    "type": "error"
                });
                toastEvent.fire();
                isValid = false;
                                                        component.set("v.HideSpinner", false);
            component.set("v.saveEditStatus", false);


            }
            
            else if(allRecords[i].Sales_Rate__c == null){
                alert('Complete this field : Row No ' + (i+1) + ' Sales is null' );
                isValid = false;
                                                        component.set("v.HideSpinner", false);

            }
        }
        return isValid;
    },

    requiredValidation : function(component,event) {
        // get all accounts.. 	
        var allRecords = component.get("v.CostingList");
        var isValid = true;
        // play a for loop on all account list and check that account name is not null,   
        for(var i = 0; i < allRecords.length;i++){
            if(allRecords[i].Name == null || allRecords[i].Name.trim() == ''){
                //alert('Complete this field : Row No ' + (i+1) + ' Name is null' );
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Save failed",
                    "message": 'Complete this field : Row No ' + (i+1) + ' Name is null',
                    "type": "error"
                });
                toastEvent.fire();
                isValid = false;
                                                        component.set("v.HideSpinner", false);

            }
            
            else if(allRecords[i].Sales_Rate__c == null){
                alert('Complete this field : Row No ' + (i+1) + ' Sales is null' );
                isValid = false;
                                                        component.set("v.HideSpinner", false);

            }
        }
        return isValid;
    },

    showHide : function(component) {
        var editForm = component.find("editForm");
        $A.util.toggleClass(editForm, "slds-hide");
        var viewForm = component.find("viewForm");
		$A.util.toggleClass(viewForm, "slds-hide");
    },
    
        createObjectData: function(component, event) {
        // get the contactList from component and add(push) New Object to List  
        var RowItemList = component.get("v.newCostingList");
        RowItemList.push({
            'sobjectType': 'Costing__c',
            'Name': '',
            'Level__c': '',
            'Sales_Rate__c': '',
            'Architect__c': '',
            'Construct__c': '',
            'Validate__c': '',
            'Deploy__c': '',
            'Support__c': '',
			"Project_Costing__c": component.get("v.recordId")

        });
        // set the updated list to attribute (contactList) again    
        component.set("v.newCostingList", RowItemList);
    },

        removeObjectData: function(component, event) {
        // get the contactList from component and add(push) New Object to List  
        // 
        // 
            component.set("v.newCostingList", { 
                "sobjectType": "Costing__c",
            }
                         );

    },
    // helper function for check if first Name is not null/blank on save  
    validateRequired: function(component, event) {
        var isValid = true;
        var allContactRows = component.get("v.newCostingList");
        for (var indexVar = 0; indexVar < allContactRows.length; indexVar++) {
            if (allContactRows[indexVar].FirstName == '') {
                isValid = false;
                alert('First Name Can\'t be Blank on Row Number ' + (indexVar + 1));
            }
        }
        return isValid;
    },
})