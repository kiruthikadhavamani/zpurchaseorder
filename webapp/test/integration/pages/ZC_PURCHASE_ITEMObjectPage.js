sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zpurchaseorder.zpurchaseorder',
            componentId: 'ZC_PURCHASE_ITEMObjectPage',
            contextPath: '/ZC_PURCHASEORDERH/_item'
        },
        CustomPageDefinitions
    );
});