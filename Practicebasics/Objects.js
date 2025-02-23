//Objects
var customer = {
  student:[
    {
        first:"f",
        last:"l"
    },{
        first:"f1",
        last:"l1"
    }
  ]
}

console.log(customer)
console.log(customer.student)
console.log(customer.student[0]["first"])
console.log("---")
console.log(customer.student[0].first)
console.log(customer.student[1].last)
console.log("----------------")

customer.student[0].first = "First"
console.log(customer.student[0].first)
console.log("----------------")

console.log(typeof `${customer.student[0].first}`)


