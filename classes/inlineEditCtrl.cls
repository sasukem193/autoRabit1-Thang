/* sfdcmonkey.com || Date 12/07/2017 || API Version 41.0 */
public with sharing class inlineEditCtrl {
    
    /*// method for fetch account records list  
    @AuraEnabled
    public static List < account > fetchAccount() {
        
        List < Account > returnList = new List < Account > ();
        List < Account > lstOfAccount = [select id, Name, Rating, website from account LIMIT 10];
        
        
        for (Account acc: lstOfAccount) {
            returnList.add(acc);
        }
        return returnList;
    }
    
    // method for update records after inline editing  
    @AuraEnabled
    public static List < account > saveAccountt(List<Account> lstAccount) {
        update lstAccount;
        return lstAccount;
    }*/
    
    @AuraEnabled
    public static void deleteAccount(ID rowDeleted) {
        
        Costing__c[] contactsDel = [SELECT Id FROM Costing__c WHERE Id=:rowDeleted]; 

        delete contactsDel;
        
    }
    
    @AuraEnabled
    public static Decimal fetchRecordCount(Id pc) {
        Decimal recordCount = [select No_of_records__c from Project_Costing__c WHERE Id = :pc].No_of_records__c;
        return recordCount;
    }
    
    
    
   /* @AuraEnabled
    public static Costing__c deleteExpense(Costing__c rec) {
        // Perform isDeletable() check here 
        delete rec;
        return rec;
    } */ 
    
    //-	-	-	-		-	-	-		-	-	-	-	-		-	-	-		-	-	-		-	-
    //
    @AuraEnabled
    public static List < Costing__c > fetchDetails(Id pc) {
        System.debug('commenttt' + pc);
        List < Costing__c > returnDetailList = new List < Costing__c > ();
        List < Costing__c > lstOfDetails = [select Name, Level__c, Cost__c, Sales_Rate__c, Reference_Price_45__c, Architect__c, Construct__c, Validate__c, Deploy__c, Support__c, Total_Days__c, Total_Hours__c, Total_Sales_Price__c,CreatedDate from Costing__c WHERE Project_Costing__c = :pc ORDER BY CreatedDate LIMIT 100];
        
        
        for (Costing__c dtl: lstOfDetails) {
            returnDetailList.add(dtl);
        }
        

        return returnDetailList;
        
        
    }
    
    // method for update records after inline editing  
    @AuraEnabled
    public static List < Costing__c > saveAccount(List<Costing__c> lstOfDetails) {
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
        //allOpts.sort();
        return allOpts;
    }
    
    @AuraEnabled
    public static void saveContacts(List<Costing__c> ListContact){
        Insert ListContact;
    }
}