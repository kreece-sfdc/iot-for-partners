public with sharing class SensorController 
{
	@AuraEnabled
    public static void SetToNormal(Id assetId)
    {
        system.debug(assetId);
        Sensor__e sensor = new Sensor__e
            (
                Serial_Number__c = assetId,
                Status__c = 'Normal'
            );
        EventBus.publish(sensor);
    }
}