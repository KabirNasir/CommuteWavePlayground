sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'commute/wave/nodalpoints/test/integration/FirstJourney',
		'commute/wave/nodalpoints/test/integration/pages/NodalPointsList',
		'commute/wave/nodalpoints/test/integration/pages/NodalPointsObjectPage'
    ],
    function(JourneyRunner, opaJourney, NodalPointsList, NodalPointsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('commute/wave/nodalpoints') + '/index.html'
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