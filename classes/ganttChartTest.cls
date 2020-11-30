@isTest
public class ganttChartTest {
    
     @testSetup
    static void setup() {
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        insert opp;
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        insert pc;
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        insert dummyCosting;
    }
    
    
    @isTest static void testFetch() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        //Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        Project_Costing__c dummyCosting = [SELECT id FROM Project_Costing__c LIMIT 1];      
        
        system.debug(dummyCosting.Id);
        ganttChart.fetchDetails(dummyCosting.Id);
        
        //System.assertEquals(0,celsius);
    }

}