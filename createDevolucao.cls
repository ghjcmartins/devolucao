public class ItemSelectionController {
    // ...

    @AuraEnabled
    public static void createDevolucao(List<String> selectedItems, String selectedReason, String additionalDescription) {
        // Lógica para criar objetos de devolução e itens de devolução
        // Substitua pelos seus objetos e campos reais
        List<Devolucao__c> devolucoes = new List<Devolucao__c>();
        List<ItemDevolucao__c> itensDevolucao = new List<ItemDevolucao__c>();

        // Lógica para criar e relacionar objetos de devolução e itens de devolução
        // ...

        // Insira os registros no Salesforce
        insert devolucoes;
        insert itensDevolucao;

        // Chamar endpoint "/waybill" com os dados da devolução
        sendToWaybillEndpoint(devolucoes, itensDevolucao);
    }

    private static void sendToWaybillEndpoint(List<Devolucao__c> devolucoes, List<ItemDevolucao__c> itensDevolucao) {
        String endpoint = '/waybill';

        // Construir o payload com os dados necessários
        // ...

        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setBody(payload);

        // Enviar a solicitação HTTP
        Http http = new Http();
        HttpResponse response = http.send(request);

        // Verificar a resposta e lidar conforme necessário
        if (response.getStatusCode() == 200) {
            // Sucesso, faça algo
        } else {
            // Lidar com falha na chamada
        }
    }
}
