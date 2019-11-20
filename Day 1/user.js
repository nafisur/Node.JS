// module.exports = {
//     username: "nafisur",
//     password: "pass"
// }

module.exports = function(fname, lname) {
    this.fname = fname
    this.lname = lname
    this.fullname = function()
    {
        return this.fname + " " + this.lname
    }
}