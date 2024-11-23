sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'userapp/test/integration/FirstJourney',
		'userapp/test/integration/pages/BookingList',
		'userapp/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, BookingList, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('userapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookingList: BookingList,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);