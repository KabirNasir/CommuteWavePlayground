
using {
  cuid,
   sap.common.CodeList
} from '@sap/cds/common';

namespace commute.wave;

entity NodalPoints : cuid {
    location : String;
}

entity ShuttleRoutes : cuid {
    startPoint : Association to NodalPoints;
    endPoint : Association to NodalPoints;
    intermediatePoints : Association to many NodalPoints;
}

entity BusDetails : cuid {
    busNumber : String;
    seatCapacity : Integer;
}

entity Users : cuid{
    Name : String;
    Email : String;
    Password : String;
}

entity Company : cuid{
    companyName : String;
    companyPointOfContact : Association to one Users;
}

entity DriverDetails{
    key ID : UUID;
    driverName : String;
    driverNumber : String;
    driverLicenseNumber : String;
}
entity Booking : cuid {
    shuttle : Association to Shuttles;
    employeeID : Association to Users;
    route : Association to ShuttleRoutes;
    date : DateTime;
    status : Association to BookingStatus  ;
}

@readonly
entity BookingStatus : CodeList {
  key code : String(30) @assert.range enum {
        WAITLISTED;
        BOOKED;
        CANCELLED;
      };
      name : String(30);
}

entity Shuttles:  cuid{
    busID : Association to BusDetails;
    routeID : Association to ShuttleRoutes;
    driverID : Association to DriverDetails;
    date : DateTime;
    isBusFull: Boolean;
    remainingSeats: Integer;
}
