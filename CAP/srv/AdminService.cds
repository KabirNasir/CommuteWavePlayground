using { commute.wave as db } from '../db/schema';

service AdminService {
    entity NodalPoints as projection on db.NodalPoints;
    entity ShuttleRoutes as projection on db.ShuttleRoutes;
    entity BusDetails as projection on db.BusDetails;
    entity Users as projection on db.Users;
    entity Company as projection on db.Company;
    entity DriverDetails as projection on db.DriverDetails;
    @odata.draft.enabled : true
    entity Booking as projection on db.Booking;
    entity BookingStatus as projection on db.BookingStatus;
    @odata.draft.enabled : true
    entity Shuttles as projection on db.Shuttles;
}