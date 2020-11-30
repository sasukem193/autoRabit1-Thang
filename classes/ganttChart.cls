public with sharing class ganttChart {

    
    
    
    @AuraEnabled
    public static List < Project_Costing__c > fetchDetails(Id pc) {
        System.debug('commenttt' + pc);
        List < Project_Costing__c > returnDetailList = new List < Project_Costing__c > ();
        List < Project_Costing__c > lstOfDetails = [select id, Max_Architect__c, Max_Construct__c, Max_Validate__c, Max_Deploy__c, Max_Support__c, Total_Weeks__c,Total_Months__c, Name,Net_Sales_Price__c,Net_Cost_Price__c, Total_Hours__c, Blended_Sales_Rate_Per_Day__c, CurrencyIsoCode,Total_Margin__c,No_of_records__c,Selected_Default__c  from Project_Costing__c WHERE id = :pc ORDER BY CreatedDate LIMIT 100];
        
        
        for (Project_Costing__c dtl: lstOfDetails) {
            returnDetailList.add(dtl);
        }
        
        
        return returnDetailList;
        
        
    }    

}