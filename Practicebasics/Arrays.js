//Arrays

var arr=["Volvo","BMW","Honda","Toyota","Kia"]
arr[1]="Toyota"
console.log(arr[0])
console.log(arr[1])
arr.splice(1,4,"abc","cdf")
console.log(arr)
//iteration
arr.forEach((e)=>
{
    a=e+2
    console.log(a)

})
console.log("--------------")
//Mapp functons
let arr1=[1,6,3,6]
let maparr=arr1.map(e => e*2 )

console.log(maparr)


maparr=arr1.map(e=> {
    let a = e+2
    let b = a+5
    return b
}
)

console.log(maparr)