public without sharing class CreateTask 
{
	@InvocableMethod(label='Create Case Task')
    public static void CreateTask(List<AssetDTO> assets)
    {
        List<Task> tasks = new List<Task>();
        
        for(AssetDTO asset : assets)
        {
            List<Case> cases = [SELECT Id, OwnerId FROM Case WHERE AssetId =: asset.AssetId];
            
            if(!cases.isEmpty())
            {
                Case caseItem = cases.get(0);
                
                Task task = new Task
                    (
                        Subject = asset.Name,
                        Priority = 'Medium',
                        WhatId = caseItem.Id
                    );
                tasks.add(task);
            }
        }
        
        if(!tasks.isEmpty())
        {
            insert tasks;
        }
    }
    
 	public class AssetDTO
    {
        @InvocableVariable(label='Asset Id')
        public Id AssetId;
        @InvocableVariable(label='Task Name')
        public string Name;
    }
}