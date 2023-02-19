const scheduleCtrl = require("./../controllers/schedule_ctrl");
const serviceCtrl = require("./../controllers/service_ctrl");
const adminCtrl = require("../controllers/admin_ctrl");
const cleanerCtrl = require("./../controllers/cleaner_ctrl");
const paymentCtrl = require("./../controllers/payment_ctrl");
const inventoryCtrl = require("./../controllers/inventory_ctrl");
const teamCtrl = require("./../controllers/team_ctrl");
const service_detailsCtrl = require("./../controllers/service_details_ctrl");
const requestsCtrl = require("./../controllers/requests_ctrl");
const userCtrl = require("./../controllers/user_ctrl");

module.exports = function(express){
    const route = express.Router();
// Schedules
route.post("/add_schedule", scheduleCtrl.save);
route.get("/get_schedule/:cleanerID", scheduleCtrl.get);
route.get("/get_all_schedules/", scheduleCtrl.getAllSchedules);
route.put("/update_schedule/:cleanerID", scheduleCtrl.updateSchedule);
route.delete("/delete_schedule/:cleanerID", scheduleCtrl.delete);

// Services
route.post("/add_service", serviceCtrl.save);
route.get("/get_service/:id", serviceCtrl.get);
route.get("/get_all_services", serviceCtrl.getAllServices);
route.put("/update_service/:id", serviceCtrl.updateService);
route.delete("/delete_service/:id", serviceCtrl.delete);


// Admins
route.post("/add_admin", adminCtrl.save);
route.get("/get_admin/:id",adminCtrl.get);
route.put("/update_admin/:id", adminCtrl.updateAdmin);
route.delete("/delete_admin/:id",adminCtrl.delete);

// Cleaners
route.post("/add_cleaner", cleanerCtrl.save);
route.get("/get_cleaner/:id", cleanerCtrl.get);
route.get("/get_cleaners/:cleanerAddress", cleanerCtrl.getCleaners);
route.put("/update_cleaner/:id", cleanerCtrl.updateCleaner);
route.delete("/delete_cleaner/:id", cleanerCtrl.delete);

// Payments
route.post("/add_payment", paymentCtrl.save);
route.get("/get_payment/:paymentID", paymentCtrl.get);
route.put("/update_payment/:paymentID", paymentCtrl.updatePayment);
route.delete("/delete_payment/:paymentID", paymentCtrl.delete);

// Inventories
route.post("/add_inventory", inventoryCtrl.save);
route.get("/get_inventory/:inventoryID", inventoryCtrl.get);
route.put("/update_inventory/:inventoryID", inventoryCtrl.updateInventory);
route.delete("/delete_inventory/:inventoryID",inventoryCtrl.delete);

// Teams
route.post("/add_team", teamCtrl.save);
route.get("/get_team/:teamID", teamCtrl.get);
route.put("/update_team/:teamID", teamCtrl.updateTeam);
route.delete("/delete_team/:teamID",teamCtrl.delete);

// Service_details
route.post("/add_service_details", service_detailsCtrl.save);
route.get("/getservice_details/:id", service_detailsCtrl.get);
route.put("/update_service_details/:id", service_detailsCtrl.updateService_details);
route.delete("/delete_service_details/:id",service_detailsCtrl.delete);

//requests
route.post("/add_requests", requestsCtrl.save);
route.get("/get_requests/:cleanerID", requestsCtrl.get);
route.put("/update_requests/:cleanerID", requestsCtrl.updateRequests);
route.delete("/delete_requests/:cleanerID",requestsCtrl.delete);

//Users
route.post("/add_user", userCtrl.save);
route.get("/get_user/:id", userCtrl.get);
route.put("/update_user/:id", userCtrl.updateUser);
route.delete("/delete_user/:id",userCtrl.delete);

return route;
}
