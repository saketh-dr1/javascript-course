// const tinderUser = new Object() // {} singleton obj

const tinderUser = {} // non singleton obj

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Saketh',
            lastname:'Reddy'
        }
    }
}

// console.log(regularUser.fullname) // { userfullname: { firstname: 'Saketh', lastname: 'Reddy' } }
// console.log(regularUser.fullname.userfullname) // { firstname: 'Saketh', lastname: 'Reddy' }

const obj1 = {1:'a', 2: 'b'}
const obj2 = { 3: 'a', 4: 'b' }

// const obj3 =  {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({} (optional but recommended), obj1, obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2} // spred op - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

const users = [
    {
        id: '1',
        email: 'h@gmail.com'
    },
    {
        id: '2',
        email: 'h@gmail.com'
    },
    {
        id: '3',
        email: 'h@gmail.com'
    }
]

// accessing array of objs
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('islofs')); // to check whether the prop is present or not

// obj destructure

const course = {
    course: 'js',
    price: '999',
    courseInstructor:'DSR'
}

// course.courseInstructor

const { courseInstructor: instructor } = course
// console.log(courseInstructor) // DSR
console.log(instructor) // DSR

// React
// const navbar = ({company}) => {
      
// }

// navbar(company = 'dsr');

