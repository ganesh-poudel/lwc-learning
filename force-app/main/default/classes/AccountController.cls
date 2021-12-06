public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account ];
    }
     @AuraEnabled(cacheable=true)
     public static List<Account> filterAccountType(String type){
        return [SELECT Id, Name, Type, Industry from Account where Type =:type LIMIT 5 ];
    }
     @AuraEnabled(cacheable=true)
     public static List<Account> findAccounts(String searchKey){
         String key = '%'+searchKey +'%';
        return [SELECT Id, Name, Type, Industry from Account WHERE Name like :key LIMIT 5 ];
    }
}
