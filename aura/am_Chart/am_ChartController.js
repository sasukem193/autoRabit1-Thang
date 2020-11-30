({
    initRecords: function(component, event, helper) {
        // call the apex class method and fetch account list  
        var action = component.get("c.fetchDetails");
        var recordId = component.get("v.recordId");
        //alert("hello");
        
        // var CostingList = component.get("v.CostingList");
        action.setParams({
            "pc":recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            var returnvalue = response.getReturnValue();
               

            if (state === "SUCCESS") {
                
                //alert(recordId);
                // alert(JSON.stringify(returnvalue));
                
                //               alert(returnvalue[0]['Name']);
                
                component.set("v.Architect",returnvalue[0]['Max_Architect__c']);
                component.set("v.Construct",returnvalue[0]['Max_Construct__c']);
                component.set("v.Validate",returnvalue[0]['Max_Validate__c']);
                component.set("v.Deploy",returnvalue[0]['Max_Deploy__c']);
                component.set("v.Support",returnvalue[0]['Max_Support__c']);
                component.set("v.weeks",returnvalue[0]['Total_Weeks__c']);
                component.set("v.months",returnvalue[0]['Total_Months__c']);
                component.set("v.name",returnvalue[0]['Name']);
                //component.set('v.scriptsLoaded', true);     

                // 
                
                if(component.get("v.Architect") == null){
                    component.set("v.Architect",0);
                }
                
                if(component.get("v.Construct") == null){
                    component.set("v.Construct",0);
                }
                
                if(component.get("v.Validate") == null){
                    component.set("v.Validate",0);
                }
                
                if(component.get("v.Deploy") == null){
                    component.set("v.Deploy",0);
                }
                
                
                if(component.get("v.Support") == null){
                    component.set("v.Support",0);
                }

                
                //var totalweeks = (returnvalue[0]['Max_Architect__c'] + returnvalue[0]['Max_Construct__c'] + returnvalue[0]['Max_Validate__c'] + returnvalue[0]['Max_Deploy__c'] + returnvalue[0]['Max_Support__c'])/5;
                //alert("total weeks = "+ totalweeks);
                
                /* alert(component.get("v.Architect"));
                alert(component.get("v.Construct"));
                alert(component.get("v.Validate"));
                alert(component.get("v.Deploy"));
                alert(component.get("v.Support"));  
                //alert(component.get("v.name")); */               
                
                
                var storeResponse = response.getReturnValue();
                helper.ganttChart(component);
                
                
                //console.log(JSON.stringify(storeResponse));
                // set CostingList list with return value from server.
                //alert(JSON.stringify(storeResponse));
                if (JSON.stringify(storeResponse) == '[]')
                {
                    // component.set("v.emptyList",true);
                }
                else{
                    // component.set("v.emptyList",false);
                    
                }
                //component.set("v.CostingList", storeResponse);
                //this is where ^ shit is populated by calling Apex
            }
            
        });
        $A.enqueueAction(action);
        
        
        
    },
    scriptsLoaded : function(component, event, helper) { 
        //component.set('v.scriptsLoaded', true);
    },
    
    sampletry : function(component, event, helper) { 
        // call the apex class method and fetch account list  
        // 
        document.getElementById("pngContainer").innerHTML = "";
        
        var action = component.get("c.fetchDetails");
        var recordId = component.get("v.recordId");
        //alert("hello");
        
        // var CostingList = component.get("v.CostingList");
        action.setParams({
            "pc":recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            var returnvalue = response.getReturnValue();
            if (state === "SUCCESS") {
                
                //alert(recordId);
                // alert(JSON.stringify(returnvalue));
                
                //               alert(returnvalue[0]['Name']);
                
                component.set("v.Architect",returnvalue[0]['Max_Architect__c']);
                component.set("v.Construct",returnvalue[0]['Max_Construct__c']);
                component.set("v.Validate",returnvalue[0]['Max_Validate__c']);
                component.set("v.Deploy",returnvalue[0]['Max_Deploy__c']);
                component.set("v.Support",returnvalue[0]['Max_Support__c']);
                component.set("v.weeks",returnvalue[0]['Total_Weeks__c']);
                component.set("v.months",returnvalue[0]['Total_Months__c']);
                component.set("v.name",returnvalue[0]['Name']);
                component.set('v.scriptsLoaded', true);  

                if(component.get("v.Architect") == null){
                    component.set("v.Architect",0);
                }
                
                if(component.get("v.Construct") == null){
                    component.set("v.Construct",0);
                }
                
                if(component.get("v.Validate") == null){
                    component.set("v.Validate",0);
                }
                
                if(component.get("v.Deploy") == null){
                    component.set("v.Deploy",0);
                }
                
                
                if(component.get("v.Support") == null){
                    component.set("v.Support",0);
                }              
                helper.ganttChart(component);
                
                
                var totalweeks = (returnvalue[0]['Max_Architect__c'] + returnvalue[0]['Max_Construct__c'] + returnvalue[0]['Max_Validate__c'] + returnvalue[0]['Max_Deploy__c'] + returnvalue[0]['Max_Support__c'])/5;
                
                
                
                var storeResponse = response.getReturnValue();
                
                
                
            }
            
        });
        $A.enqueueAction(action);
        
        
        
        
    },
  
    
 changeview : function(component, event, helper) { 
        // call the apex class method and fetch account list  
        // 
                 if (component.get("v.durationSettings") === "Month") 
                 {
                     component.set('v.durationSettings', "Week");   
                 }
                 else
                 {
                     component.set('v.durationSettings', "Month");   
                 }
             

        document.getElementById("pngContainer").innerHTML = "";
        
        var action = component.get("c.fetchDetails");
        var recordId = component.get("v.recordId");
        //alert("hello");
        
        // var CostingList = component.get("v.CostingList");
        action.setParams({
            "pc":recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            var returnvalue = response.getReturnValue();
            if (state === "SUCCESS") {
                
                //alert(recordId);
                // alert(JSON.stringify(returnvalue));
                
                //               alert(returnvalue[0]['Name']);
                
                component.set("v.Architect",returnvalue[0]['Max_Architect__c']);
                component.set("v.Construct",returnvalue[0]['Max_Construct__c']);
                component.set("v.Validate",returnvalue[0]['Max_Validate__c']);
                component.set("v.Deploy",returnvalue[0]['Max_Deploy__c']);
                component.set("v.Support",returnvalue[0]['Max_Support__c']);
                component.set("v.weeks",returnvalue[0]['Total_Weeks__c']);
                component.set("v.months",returnvalue[0]['Total_Months__c']);
                component.set("v.name",returnvalue[0]['Name']);
                component.set('v.scriptsLoaded', true);  

                if(component.get("v.Architect") == null){
                    component.set("v.Architect",0);
                }
                
                if(component.get("v.Construct") == null){
                    component.set("v.Construct",0);
                }
                
                if(component.get("v.Validate") == null){
                    component.set("v.Validate",0);
                }
                
                if(component.get("v.Deploy") == null){
                    component.set("v.Deploy",0);
                }
                
                
                if(component.get("v.Support") == null){
                    component.set("v.Support",0);
                }              
                helper.ganttChart(component);
                
                
                var totalweeks = (returnvalue[0]['Max_Architect__c'] + returnvalue[0]['Max_Construct__c'] + returnvalue[0]['Max_Validate__c'] + returnvalue[0]['Max_Deploy__c'] + returnvalue[0]['Max_Support__c'])/5;
                
                
                
                var storeResponse = response.getReturnValue();
                
                
                
            }
            
        });
        $A.enqueueAction(action);
        
        
        
        
    },
  
    
})