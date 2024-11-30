sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'adminportal/test/integration/FirstJourney',
		'adminportal/test/integration/pages/CompanyList',
		'adminportal/test/integration/pages/CompanyObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompanyList, CompanyObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('adminportal') + '/index.html'
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