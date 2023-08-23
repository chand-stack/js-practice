let students = {
   name: "jack",
   section : "C",
   class : "IX",
   address : {
      "building no": 12,
      "street": "St. jonson",
      "city": "Petersburg",
      "country": "UK"
   },
   3333:{
      name:"herry",
      section: "D",
      class : "X",
      address : {
         "building no" : 85,
         "street" : "DC road",
         "city" : "Kachukhet",
         "country" : "Bangladesh"
      }
   }
}

console.log(students.address["city"])
console.log(students[3333].name)