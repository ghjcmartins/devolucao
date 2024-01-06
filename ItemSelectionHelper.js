({
    createDevolucao : function(component, selectedItems, selectedReason, additionalDescription) {
        var action = component.get("c.createDevolucao");

        action.setParams({
            "selectedItems": selectedItems,
            "selectedReason": selectedReason,
            "additionalDescription": additionalDescription
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Exiba mensagem de sucesso ou redirecione para a próxima etapa
                console.log("Devolução confirmada com sucesso!");
            } else {
                console.error("Erro ao criar devolução: " + state);
            }
        });

        $A.enqueueAction(action);
    }
})
