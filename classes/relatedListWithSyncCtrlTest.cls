@isTest
public class relatedListWithSyncCtrlTest {
    /*public Opportunity opp;
public Project_Costing__c pc;
public Costing__c costing;*/
    
    @testSetup
    static void setup() {
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Opportunity opp2 = new Opportunity(Name = 'test 2', StageName = 'Specification', CloseDate = System.today());
        insert opp;
        insert opp2;
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Project_Costing__c pc2 = new Project_Costing__c(Name='Sample Project Two',Opportunity__c=opp2 .id,CurrencyIsoCode='SGD');
        insert pc;
        insert pc2;
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        insert dummyCosting;
    }
    
    @isTest static void testDelete() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Project_Costing__c dummyCosting = [SELECT id FROM Project_Costing__c LIMIT 1];      
        //new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        relatedListWithSyncCtrl.deleteAccount(dummyCosting.ID);
        test.stopTest();
        //System.assertEquals(0,celsius);
    }
    
    
     @isTest static void testsync() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Project_Costing__c dummyCosting = [SELECT id FROM Project_Costing__c LIMIT 1];      
        //new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        relatedListWithSyncCtrl.syncTwo(dummyCosting.ID);
        test.stopTest();
        //System.assertEquals(0,celsius);
    }
    
    @isTest static void testFetchRecordOppty() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        //Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        Opportunity dummyCosting = [SELECT id FROM Opportunity LIMIT 1];      
        
        system.debug(dummyCosting.Id);
        relatedListWithSyncCtrl.fetchRecordCountOppty(dummyCosting.Id);
        
        //System.assertEquals(0,celsius);
    }
    
    @isTest static void testFetchRecord() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        //Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        
        Opportunity dummyCosting = [SELECT id FROM Opportunity LIMIT 1];      
        
        system.debug(dummyCosting.Id);
        relatedListWithSyncCtrl.fetchRecordCount(dummyCosting.Id);
        
        //System.assertEquals(0,celsius);
    }
    
    
    
    @isTest static void testFetch() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        //Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        Project_Costing__c dummyCosting = [SELECT id FROM Project_Costing__c LIMIT 1];      
        
        system.debug(dummyCosting.Id);
        relatedListWithSyncCtrl.fetchDetails(dummyCosting.Id);
        
        //System.assertEquals(0,celsius);
    }
    
    @isTest static void testSave() {
        test.startTest();
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id);
        
        List < Project_Costing__c > returnDetailList = new List < Project_Costing__c > ();
        
        
        relatedListWithSyncCtrl.saveAccount(returnDetailList);
        
        //System.assertEquals(0,celsius);
    }
    
    
    @isTest static void testGetselectOptions() {
        test.startTest();
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id);
        
        
        
        
        relatedListWithSyncCtrl.getselectOptions(dummyCosting,'Level__c');
        
        
    }
    
    @isTest static void testSaveContacts() {
        test.startTest();
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id);
        
        List < Project_Costing__c > returnDetailList = new List < Project_Costing__c > ();
        
        
        relatedListWithSyncCtrl.saveContacts(returnDetailList);
        
        //System.assertEquals(0,celsius);
    }
    
    
    /*'sobjectType': 'Costing__c',
'Name': '',
'Level__c': '',
'Sales_Rate__c': '',
'Architect__c': '',
'Construct__c': '',
'Validate__c': '',
'Deploy__c': '',
'Support__c': '',
"Project_Costing__c": component.get("v.recordId")*/
    
}