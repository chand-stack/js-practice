const instructor =[
   { name:'Nodi', age:28, position:'Senior'},
   { name:'Akil', age:26, position:'Junior'},
   { name:'Shobuj', age:30, position:'Senior'}
]

const names = instructor.filter(x => x.position === "Senior")

const teacherName = names.map(x => x.name)
console.log(teacherName)