# CommuteWave

## Overview
Effortless Shuttle Booking for Daily Commuters. Designed to streamline shuttle reservations and optimize routes for efficient commuting.

# Getting Started
## Prerequisites
Before running the application, ensure you have the following prerequisites installed:
- BTP Account 
- Node.js
- npm (Node Package Manager)
- CAP cds
- Postman for testing
- Swaggger for documentation

## Tools
- Miro: ``
- Note:
 `https://sap-my.sharepoint.com/:o:/p/kabir_nasir/EmoZG91Q2-VMgxr2V28Zg6IBDbSZNiABewlXY3yp5zUQKw?e=XeEBMn`


## Setup
Folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | Content for UI frontends goe here
`db/` | Domain models and data go here
`srv/` | Service models and code go here
`package.json` | Project metadata and configuration
`readme.md` | Getting started guide
<!-- Add some space here -->
Clone the repository:

```shell
git clone `https://github.com/BITSAPIBP2024/TeamA05.git`
```
install dependencies:

```shell
 npm install
 ```

## Command to start the application

Run the following command:
```shell
cds watch
```
- open `http://localhost:4004`


## Features
1. **User Registration**: Employees can register using their work email, password, and name.
2. **User Login**: Employees can securely log in to the app.
3. **Nodal Points Management**: View, add, update, or delete shuttle nodal points.
4. **Shuttle Routes**: Display available routes, create new routes, or modify existing ones.
5. **Booking System**: Reserve or cancel seats, update bookings, and handle waitlists.
6. **Company Management**: Add, update, or remove companies associated with shuttle operations.
7. **Driver Information**: Register, update, or view details of shuttle drivers.
8. **Shuttle Assignment**: Assign shuttles to routes with specific drivers.


##  API Overview
This API enables organizations to streamline shuttle operations for employees. Employees can log in using their work email, view the nearest nodal point, check available shuttles, and reserve a seat. Shuttle operators can manage shuttle schedules, routes, and details.


| Endpoint                          | Method | Summary                                   | Tags                 |
|-----------------------------------|--------|-------------------------------------------|----------------------|
| `/employee_register`              | POST   | Register a new employee for the app.      | User Registration    |
| `/employee_login`                 | POST   | Login into the app.                       | User Login           |
| `/nodal-points`                   | GET    | Get available nodal points.               | Nodal Points         |
| `/nodal-points`                   | POST   | Add a new nodal point.                    | Nodal Points         |
| `/nodal-points/{nodal_point_id}`  | DELETE | Delete a specific nodal point.            | Nodal Points         |
| `/nodal-points/{nodal_point_id}`  | PATCH  | Update specific attributes of a nodal point. | Nodal Points      |
| `/shuttle-routes`                 | GET    | Display available shuttle routes.         | Shuttle Routes       |
| `/shuttle-routes`                 | POST   | Create a new shuttle route.               | Shuttle Routes       |
| `/shuttle-routes/{route_id}`      | DELETE | Delete a specific route.                  | Shuttle Routes       |
| `/shuttle-routes/{route_id}`      | PATCH  | Update specific attributes of a shuttle route. | Shuttle Routes    |
| `/booking`                        | POST   | Book a seat on a selected route.          | Booking              |
| `/booking/{booking_id}`           | DELETE | Cancel a specific booking.                | Booking              |
| `/booking/{booking_id}`           | PATCH  | Update a specific booking.                | Booking              |
| `/company`                        | POST   | Add a new company.                        | Company              |
| `/company/{company_ID}`           | DELETE | Remove a specific company.                | Company              |
| `/company/{company_ID}`           | PATCH  | Update a specific company's details.      | Company              |
| `/drivers`                        | POST   | Register a new driver.                    | Driver Information   |
| `/drivers`                        | GET    | Display the list of drivers.              | Driver Information   |
| `/drivers/{driver_id}`            | DELETE | Delete a driver.                          | Driver Information   |
| `/drivers/{driver_id}`            | PATCH  | Update specific attributes of a driver.   | Driver Information   |
| `/shuttles`                       | POST   | Assign bus details to a route.            | Shuttle              |
| `/shuttles/{shuttle_id}`          | DELETE | Remove a bus from the system.             | Shuttle              |


## Conclusion

This Shuttle Management Application provides a comprehensive and efficient solution for managing shuttle routes, bookings, and operations. With features designed for easy user interaction, secure access, and real-time updates, the system streamlines shuttle management for both employees and administrators.
