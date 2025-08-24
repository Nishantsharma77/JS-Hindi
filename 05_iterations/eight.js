const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
// console.log(myTotal);

const shoppingKart = [
    {
        itemName: "js course",
        price: 2599
    },
    {
        itemName: "python course",
        price: 99
    },
    {
        itemName: "app dev course",
        price: 3000
    }
]

const pricetopay = shoppingKart.reduce( (acc,item) => acc+ item.price,0)
console.log(pricetopay);

