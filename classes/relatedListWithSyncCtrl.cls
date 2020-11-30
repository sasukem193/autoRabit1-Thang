public with sharing class relatedListWithSyncCtrl {
    
    @AuraEnabled
    public static void deleteAccount(ID rowDeleted) {
        
        Project_Costing__c[] contactsDel = [SELECT Id FROM Project_Costing__c WHERE Id=:rowDeleted]; 
        
        
        delete contactsDel;
        
    }
    
    /*@AuraEnabled
    public static void syncRecord(ID rowDeleted) {
        
        List<Project_Costing__c> newAccnts= new List<Project_Costing__c>();
        List<Project_Costing__c> accnts=[SELECT Id FROM Project_Costing__c WHERE Id=:rowDeleted];
        
        for(Project_Costing__c acc:accnts)
        {
                   acc.Selected_Default__c =true;

        }
        
        Update newAccnts;
        
        
        Project_Costing__c contactsDel = [SELECT Id FROM Project_Costing__c WHERE Id=:rowDeleted]; 
        contactsDel.Selected_Default__c =true;
        update contactsDel;
        
    }*/
    
    @AuraEnabled
    public static List <Project_Costing__c > syncTwo(Id rowtosync) {

        List < Project_Costing__c > returnDetailList = new List < Project_Costing__c > ();
        List < Project_Costing__c > lstOfDetails = [select Name,Net_Sales_Price__c,Net_Cost_Price__c, Total_Hours__c, Blended_Sales_Rate_Per_Day__c, CurrencyIsoCode,Total_Margin__c,No_of_records__c,Selected_Default__c  from Project_Costing__c WHERE Id = :rowtosync];
		List < Project_Costing__c > notSelected = [select Name,Net_Sales_Price__c,Net_Cost_Price__c, Total_Hours__c, Blended_Sales_Rate_Per_Day__c, CurrencyIsoCode,Total_Margin__c,No_of_records__c,Selected_Default__c  from Project_Costing__c WHERE Id != :rowtosync];

        for (Project_Costing__c dtl: lstOfDetails) {
            dtl.Selected_Default__c=true;
        }
        
        for (Project_Costing__c dtl: notSelected) {
            dtl.Selected_Default__c=false;      
        }
        
        update lstOfDetails;
        update notSelected;
        return lstOfDetails;

        //update lstOfDetails;
        //return lstOfDetails;
    }

    /*@AuraEnabled
    public static List <Project_Costing__c > syncOne(List<Project_Costing__c> lstOfDetails) {
        //update lstOfDetails;
        return lstOfDetails;
    }*/
    
    @AuraEnabled
    public static Decimal fetchRecordCountOppty(Id pc) {
        Decimal recordCount = [select No_of_records__c from Opportunity WHERE Id = :pc].No_of_records__c;
        return recordCount;
    }
    
    @AuraEnabled
     public static Decimal fetchRecordCount(Id pc) {
         Decimal recordCount = [select No_of_records__c from Project_Costing__c WHERE Opportunity__c = :pc].No_of_records__c;
         return recordCount;
     }
    
    @AuraEnabled
    public static List < Project_Costing__c > fetchDetails(Id pc) {
        System.debug('commenttt' + pc);
        List < Project_Costing__c > returnDetailList = new List < Project_Costing__c > ();
        List < Project_Costing__c > lstOfDetails = [select Name,Net_Sales_Price__c,Net_Cost_Price__c, Total_Hours__c, Blended_Sales_Rate_Per_Day__c, CurrencyIsoCode,Total_Margin__c,No_of_records__c,Selected_Default__c  from Project_Costing__c WHERE Opportunity__c = :pc ORDER BY CreatedDate LIMIT 100];
        
        
        for (Project_Costing__c dtl: lstOfDetails) {
            returnDetailList.add(dtl);
        }
        
        
        return returnDetailList;
        
        
    }
    
    // method for update records after inline editing  
    @AuraEnabled
    public static List <Project_Costing__c > saveAccount(List<Project_Costing__c> lstOfDetails) {
        update lstOfDetails;
        return lstOfDetails;
    }
    // method for fetch picklist values dynamic  
    @AuraEnabled
    public static List < String > getselectOptions(sObject objObject, string fld) {
        system.debug('objObject --->' + objObject);
        system.debug('fld --->' + fld);
        List < String > allOpts = new list < String > ();
        // Get the object type of the SObject.
        Schema.sObjectType objType = objObject.getSObjectType();
        
        // Describe the SObject using its object type.
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        
        // Get a map of fields for the SObject
        map < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();
        
        // Get the list of picklist values for this field.
        list < Schema.PicklistEntry > values =
            fieldMap.get(fld).getDescribe().getPickListValues();
        
        // Add these values to the selectoption list.
        for (Schema.PicklistEntry a: values) {
            allOpts.add(a.getValue());
        }
        system.debug('allOpts ---->' + allOpts);
        allOpts.sort();
        return allOpts;
    }
    
    @AuraEnabled
    public static void saveContacts(List<Project_Costing__c> ListContact){
        Insert ListContact;
    }
    
    
    
}