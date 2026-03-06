sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zpurchaseorder/zpurchaseorder/test/integration/pages/ZC_PURCHASEORDERHList",
	"zpurchaseorder/zpurchaseorder/test/integration/pages/ZC_PURCHASEORDERHObjectPage",
	"zpurchaseorder/zpurchaseorder/test/integration/pages/ZC_PURCHASE_ITEMObjectPage"
], function (JourneyRunner, ZC_PURCHASEORDERHList, ZC_PURCHASEORDERHObjectPage, ZC_PURCHASE_ITEMObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zpurchaseorder/zpurchaseorder') + '/test/flpSandbox.html#zpurchaseorderzpurchaseorder-tile',
        pages: {
			onTheZC_PURCHASEORDERHList: ZC_PURCHASEORDERHList,
			onTheZC_PURCHASEORDERHObjectPage: ZC_PURCHASEORDERHObjectPage,
			onTheZC_PURCHASE_ITEMObjectPage: ZC_PURCHASE_ITEMObjectPage
        },
        async: true
    });

    return runner;
});

