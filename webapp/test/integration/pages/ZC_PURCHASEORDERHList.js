sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zpurchaseorder.zpurchaseorder',
            componentId: 'ZC_PURCHASEORDERHList',
            contextPath: '/ZC_PURCHASEORDERH'
        },
        CustomPageDefinitions
    );
});