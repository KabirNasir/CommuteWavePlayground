sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'frontend/test/integration/FirstJourney',
		'frontend/test/integration/pages/NodalPointsList',
		'frontend/test/integration/pages/NodalPointsObjectPage'
    ],
    function(JourneyRunner, opaJourney, NodalPointsList, NodalPointsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('frontend') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheNodalPointsList: NodalPointsList,
					onTheNodalPointsObjectPage: NodalPointsObjectPage
                }
            },
            opaJourney.run
        );
    }
);