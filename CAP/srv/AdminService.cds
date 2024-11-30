using { commute.wave as db } from '../db/schema';
service AdminService {
     action userAuthentication(Email : String, Password : String) returns {
        jaat : String;
  };

   action cancelBooking(bookingID : UUID, employeeID : UUID) returns {  };


   
    @restrict:[{grant:'*',to:'ADMIN'}]
  action assignPOC(ID : UUID) returns {success : Boolean};
    @restrict:[{grant:'*',to:'ADMIN'}]
  action assignADMIN(ID : UUID) returns {success : Boolean};
    @restrict:[{grant:'READ',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity NodalPoints as projection on db.NodalPoints;
    @restrict:[{grant:'READ',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity ShuttleRoutes as projection on db.ShuttleRoutes;
    @restrict:[{grant:'READ',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity BusDetails as projection on db.BusDetails;
    // @restrict:[{grant:'*',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity Users as projection on db.Users;
    @restrict:[{grant:'*',to:'ADMIN'}]
    entity Company as projection on db.Company;
    @restrict:[{grant:'READ',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity DriverDetails as projection on db.DriverDetails;
    @restrict:[{grant:'*',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity Booking as projection on db.Booking;
    entity BookingStatus as projection on db.BookingStatus;
    entity UserRole as projection on db.UserRole;

    @restrict:[{grant:'*',to:'USER'},{grant:'*',to:'POINTOFCONTACT'}]
    entity Shuttles as projection on db.Shuttles;

    
}