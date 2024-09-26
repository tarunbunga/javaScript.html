
//example:--->call
var emp= {
    name: "tarun",
    address: "hyd" ,
    getInfo: function(country,pincode,hno){
        return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno
    }
}
//console.log(emp.getInfo());
var emp2={
    name: "sursh",
    address: "andhar",
}
var arr = ["India",505001,"5-11"]
console.log(emp.getInfo.call(emp2, arr[0], arr[1], arr[2]));
console.log(emp.getInfo.apply(emp2,arr));

//--->bind function()

var person = {
    firstName:"suresh",
    lastName: "karingula",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());
  var member = {
    firstName:"Tarun",
    lastName: "bunga",
  }
   console.log(person.fullName.bind(member));
   