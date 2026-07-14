sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code.d01.exercise29.controller.Order", {
        onInit() {
        },
        onItemPress(oEvent) {
            let oItem = oEvent.getSource(); 
            let oBindingCtx = oItem.getBindingContext();
            let sOrderid = oBindingCtx.getProperty('OrderID');
            // alert('주문 아이디:' + sOrderid)
            console.log(sOrderid);
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteDetail",{OrderID: sOrderid});
        }
    });
});