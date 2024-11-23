sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'shuttles/test/integration/FirstJourney',
		'shuttles/test/integration/pages/ShuttlesList',
		'shuttles/test/integration/pages/ShuttlesObjectPage'
    ],
    function(JourneyRunner, opaJourney, ShuttlesList, ShuttlesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('shuttles') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheShuttlesList: ShuttlesList,
					onTheShuttlesObjectPage: ShuttlesObjectPage
                }
            },
            opaJourney.run
        );
    }
);