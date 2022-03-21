const sql = require("../config/vacCenterDB");

const VacCenter = function (vacCenter) {
  this.is = vacCenter.id;
  this.name = vacCenter.name;
  this.tel = vacCenter.tel;
};

VacCenter.getAll = (result) => {
  sql.query("SELECT * FROM vaccenters", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("vacCenters: ", res);
    result(null, res);
  });
};

module.exports = VacCenter;
