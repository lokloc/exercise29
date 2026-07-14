sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/strings/formatMessage"
], (Controller,formatMessage) => {
    "use strict";

    return Controller.extend("code.d01.exercise29.controller.Detail", {
        formatMessage: formatMessage,
        onInit() {
            let oRouter = this.getOwnerComponent().getRouter();
            let oRoute = oRouter.getRoute("RouteDetail")     //manifest의 RouteDetail를 가져오겠다.
            

            //이 루트의 패턴이 일치할 때 마다 _onPatternMatched가 자동으로 실행되도록 한다.
            //웹 주소에 detail/{OrderID}에 일치하는 경로가 붙었다.
            // _onPatternMatched가 자동으로 실행되도록 한다.
            oRoute.attachPatternMatched(this._onPatternMatched, this);
        },
        _onPatternMatched (oEvent) {
        //_
        console.log(oEvent);
        let oArgs = oEvent.getParameter("arguments");   //들고 와야될 OrderId가 arguments안에 있어서
        // console.log(Object.keys(OrderID));
        let sOrderid = oArgs.OrderID;
            
        // alert(sOrderid);

        //Detail view에 현재 경로를 /Oders(주문ID)로 설정한다.
        //bindElement에 의해 설정된 이후부터는 Detail View에서는 
        //모델의 데이터를 접근할때, / 없이 쓸 경우 /Order(주문ID)에서부터 데이터를
        //가져오는 것으로 취급된다.
        //예시: <Text text={CustomerId} /> => /Order(주문ID)/CustomerID를 쓴 것과 같다.
        let sPath = "/Orders("+ sOrderid + ")";
        let oView = this.getView();
        oView.bindElement(sPath);
        }
    });
});