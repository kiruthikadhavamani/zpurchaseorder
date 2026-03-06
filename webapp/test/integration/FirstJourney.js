sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_PURCHASEORDERHList.iSeeThisPage();
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Changed On");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Purchaseorder");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Purchaseorderid");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Supplier");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Companycode");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("PurchaseDate");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("PricingAmount");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Purchasingorganization");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Purchasinggroup");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Purchasingdoctype");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Languagekey");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("supplierphonenumber");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("purchase_date12");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("incotermslocation1");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Totalamount");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Created By");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Created On");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Changed By");
            Then.onTheZC_PURCHASEORDERHList.onFilterBar().iCheckFilterField("Changed On");
            Then.onTheZC_PURCHASEORDERHList.onTable().iCheckColumns(17, {"ZLocalLastChangedAt":{"header":"Changed On"},"Purchaseorderid":{"header":"Purchaseorderid"},"Supplier":{"header":"Supplier"},"PurchaseDate":{"header":"PurchaseDate"},"PricingAmount":{"header":"PricingAmount"},"Purchasingorganization":{"header":"Purchasingorganization"},"Purchasinggroup":{"header":"Purchasinggroup"},"Purchasingdoctype":{"header":"Purchasingdoctype"},"Languagekey":{"header":"Languagekey"},"Supplierphonenumber":{"header":"supplierphonenumber"},"Purchase_date12":{"header":"purchase_date12"},"Incotermslocation1":{"header":"incotermslocation1"},"Totalamount":{"header":"Totalamount"},"ZCreatedBy":{"header":"Created By"},"ZCreatedAt":{"header":"Created On"},"ZLastChangedBy":{"header":"Changed By"},"ZLastChangedAt":{"header":"Changed On"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_PURCHASEORDERHList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_PURCHASEORDERHList.onTable().iCheckRows();

            When.onTheZC_PURCHASEORDERHList.onTable().iPressRow(0);
            Then.onTheZC_PURCHASEORDERHObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});