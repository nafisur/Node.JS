var operations = require('./assignment')

module.exports = function(e_id, e_name, e_age, e_designation, e_dept) {
    this.e_id = e_id
    this.e_name = e_name
    this.e_age = e_age
    this.e_designation = function()
        {
            if (operations.checkPrime(this.e_id)) {
                return "IT Head"
            }
            else {
                return "Junior Employee"
            } 
           
     
         }
    this.e_dept = function()
    {
      
       if (operations.calculateOdd(this.e_id)) {
       return "IT Development"
       }
       else {
        return "IT Operations" 
       }

    }
}
