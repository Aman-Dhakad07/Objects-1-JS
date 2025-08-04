
//Singleton
//object literals




const mySym = Symbol("Key1")
const JsUser={
    name:"Hitesh",
    "Full_name":"Hitesh Chaudhary",
    aga:19,
    [mySym] :"myKey1",
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full_name"])
console.log(JsUser[mySym])

JsUser.email="hitesh@google.com"
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello js User");

}
JsUser.greeting2=function(){
    console.log(`Hello js User,${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

