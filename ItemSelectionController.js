({
    doInit : function(component, event, helper) {
        // Lógica para buscar itens do pedido (substitua pela sua lógica real)
        // Exemplo fictício:
        var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            } else {
                console.error("Erro ao buscar itens: " + state);
            }
        });
        $A.enqueueAction(action);
    },

    handleCheckboxChange : function(component, event, helper) {
        // Lógica para lidar com a alteração de seleção
        var selectedItems = component.get("v.selectedItems");
        var itemId = event.getSource().get("v.value");
        var isChecked = event.getSource().get("v.checked");

        if (isChecked) {
            selectedItems.push(itemId);
        } else {
            selectedItems = selectedItems.filter(item => item !== itemId);
        }

        component.set("v.selectedItems", selectedItems);
    },

    handleReasonChange : function(component, event, helper) {
        // Lógica para lidar com a alteração de motivo
        var selectedReason = event.getSource().get("v.value");
        component.set("v.selectedReason", selectedReason);
    },

    toggleConfirmationView : function(component, event, helper) {
        // Alternar entre visualização de seleção e resumo
        component.set("v.confirmationView", !component.get("v.confirmationView"));
    },

    confirmReturn : function(component, event, helper) {
        // Lógica para confirmar a devolução
        var selectedItems = component.get("v.selectedItems");
        var selectedReason = component.get("v.selectedReason");
        var additionalDescription = component.get("v.additionalDescription");

        // Crie objetos de devolução e itens de devolução
        helper.createDevolucao(component, selectedItems, selectedReason, additionalDescription);
    }
})
