public with sharing class propertyController {
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropertyDetails(){
        try {
            return [Select Name, Location__c, Price__c, Bath_Room__c, Bed_Room__c, Image__c from Property__c with SECURITY_ENFORCED];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}