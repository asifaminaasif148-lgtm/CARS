// let d = new Date()
// let d = new Date().getFullYear()
// let d = new Date().getMonth() +1
// let d = new Date().getDate()
// let d = new Date().getHours()
// let d = new Date().getMinutes()
// let d = new Date().getSeconds()
// let d = new Date().getMilliseconds()
// let d = new Date().getTime()
// document.write(d)



// document.write(year  + "/" + month + "/"  +date)

// let month = prompt('Enter tHe month')
// let d = new Date(2005 , month -1 , 24   , 12, 70,75)
// document.write(d)


// let d= new Date()
// let year = d.getFullYear()
// let month = d.getMonth() + 1
// let date = d.getDate()



// let num = -10.99

// document.write(Math.round(num))
// document.write(Math.ceil(num))
// document.write(Math.trunc(num))
// document.write(Math.floor(num))
// document.write(Math.random()*100)
// document.write(Math.floor(Math.random()*7))
// document.write(Math.sign(num))
// document.write(Math.abs(num))
// document.write(Math.pow(10,3))
// document.write(Math.sqrt(81))
// document.write(Math.max(10,0,-10,100,11))
// document.write(Math.min(10,0,-10,100,11))
// document.write(Math.cos(32))
// document.write(Math.sin(32))
// document.write(Math.log(32))

//objects = key value pair

// let student = {
//     name : "asra",
//     age : 23,
//     city:"fsd",
//     course:{
//       first:"web",
//       second:"DM"
//     }
    
// }

// document.write(student.age)
// document.write(JSON.stringify(student))

// student.department = "CS"
// document.write(JSON.stringify(student))

// student.city = "Lahore"
// document.write(JSON.stringify(student))

// delete student.age
// document.write(JSON.stringify(student))
// let name="my name is amina "
// document.write(name)



// let car = 
// [ "HONDAA" , "TOYOTA" , "HYNDAI" , "NISSAN" , "VOLVO"]
// let bikes = [
//     "KAWASAKI NINJA H2R",
//     "YAMAHA R6",
//     "HONDA S1000RR"
// ]
// car[10] = "BUGGATI"
// document.write(car.length)
// document.write(car.join(' | '))
// car.push('Lambo/')
// car.pop()
// car.unshift('Mustang')
// car.shift()
// car.splice(1 , 2 , 'Mazda 4x8' , 'Mehran')
// document.write(car.slice(2 , 4))
// let newArr = car.concat(bikes)
// document.write(newArr[4])
// document.write(car+bikes)


// // delete car[3]
// // document.write(Array.isArray(car)) 
// let car=[
// "honda","mehran","TOYOTA"

// ]
// document.write()



const products = [
    {
        id:1,
        name:'laptop',
        price:50000
    },
    {
        id:1,
        name:'laptop',
        price:50000
    },
    {
        id:1,
        name:'laptop',
        price:50000
    }
]

console.log(products[0])


let car = [
    {
    pic : 'https://images4.alphacoders.com/686/thumb-1920-686332.jpg',
    name : 'Buggati',
    headline : 'This is my fav car'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
}
,
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
},
 {
    pic : 'https://w0.peakpx.com/wallpaper/572/358/HD-wallpaper-mazda-rx-7-mazda-car-white-wheel.jpg',
    name : 'Mazda rx7',
    headline : 'This is my fav car (1)'
}
,
 {
    pic : 'https://cdn.motor1.com/images/mgl/0eN8nj/s3/r4w8jwqa-zldd4tsiq0--edit.jpg',
    name : 'Honda s2000',
    headline : 'This is my fav car (3)'
}

,
 {
    pic : 'https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2018/10/Ford-Mustang-GT-20181.jpg?fit=768%2C512&ssl=1',
    name : 'Mustang GT',
    headline : 'This is my fav car (4)'
}

]


// document.getElementById('demo').innerHTML +=
// `
//  <div class="inner">
//         <img src=${car[0].pic} alt="">
//         <h1>${car[0].name}</h1>
//         <h3>${car[0].headline}</h3>
//     </div>

// `



// document.getElementById('demo').innerHTML +=
// `
//  <div class="inner">
//         <img src=${car[1].pic} alt="">
//         <h1>${car[1].name}</h1>
//         <h3>${car[1].headline}</h3>
//     </div>

// `

// document.getElementById('demo').innerHTML +=
// `
//  <div class="inner">
//         <img src=${car[2].pic} alt="">
//         <h1>${car[2].name}</h1>
//         <h3>${car[2].headline}</h3>
//     </div>

// `


// car.map(function(card){
// document.getElementById('demo').innerHTML +=
// `
//  <div class="inner">
//         <img src=${card.pic} alt="">
//         <h1>${card.name}</h1>
//         <h3>${card.headline}</h3>
//     </div>

// `
// })


car.forEach(function(card){
document.getElementById('demo').innerHTML +=
`
 <div class="inner">
        <img src=${card.pic} alt="">
        <h1>${card.name}</h1>
        <h3>${card.headline}</h3>
    </div>

`
})