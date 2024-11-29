sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'companyportal/test/integration/FirstJourney',
		'companyportal/test/integration/pages/CompanyList',
		'companyportal/test/integration/pages/CompanyObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompanyList, CompanyObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('companyportal') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompanyList: CompanyList,
					onTheCompanyObjectPage: CompanyObjectPage
                }
            },
            opaJourney.run
        );
    }
);