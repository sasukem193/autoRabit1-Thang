@isTest
public class inlineEditCtrlTest {
    /*public Opportunity opp;
public Project_Costing__c pc;
public Costing__c costing;*/
    @testSetup
    static void setup() {
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        insert opp;
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        insert pc;
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        insert dummyCosting;
    }
    
    @isTest static void testDelete() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = [SELECT id FROM Costing__c LIMIT 1];      
        //new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        inlineEditCtrl.deleteAccount(dummyCosting.ID);
        test.stopTest();
        //System.assertEquals(0,celsius);
    }
    
    @isTest static void testFetchRecord() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        //Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        Project_Costing__c dummyCosting = [SELECT id FROM Project_Costing__c LIMIT 1];      
        
        system.debug(dummyCosting.Id);
        inlineEditCtrl.fetchRecordCount(dummyCosting.Id);
        
        //System.assertEquals(0,celsius);
    }
    
    
    
    @isTest static void testFetch() {
        test.startTest();
        //Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        //Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        //Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id, Sales_Rate__c=45, Architect__c=45, Construct__c=45, Validate__c=45, Deploy__c=45, Support__c=45);
        Project_Costing__c dummyCosting = [SELECT id FROM Project_Costing__c LIMIT 1];      
        
        system.debug(dummyCosting.Id);
        inlineEditCtrl.fetchDetails(dummyCosting.Id);
        
        //System.assertEquals(0,celsius);
    }
    
    @isTest static void testSave() {
        test.startTest();
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id);
        
        List < Costing__c > returnDetailList = new List < Costing__c > ();
        
        
        inlineEditCtrl.saveAccount(returnDetailList);
        
        //System.assertEquals(0,celsius);
    }
    
    
    @isTest static void testGetselectOptions() {
        test.startTest();
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id);
        
        
        
        
        inlineEditCtrl.getselectOptions(dummyCosting,'Level__c');
        
        
    }
    
    @isTest static void testSaveContacts() {
        test.startTest();
        Opportunity opp = new Opportunity(Name = 'test', StageName = 'Specification', CloseDate = System.today());
        Project_Costing__c pc = new Project_Costing__c(Name='Sample Project',Opportunity__c=opp.id,CurrencyIsoCode='SGD');
        Costing__c dummyCosting = new Costing__c(Name='Sample Costing',Level__c='Consultant',Project_Costing__c=pc.id);
        
        List < Costing__c > returnDetailList = new List < Costing__c > ();
        
        
        inlineEditCtrl.saveContacts(returnDetailList);
        
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