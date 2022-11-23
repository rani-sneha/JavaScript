// var getUserRole= function(names, role){
//     switch (role) {
//         case "admin":
//             return `${names} is admin with all access`;
//         case "sub-admin":
//             return `${names} is admin with not all access`;
//         default:
//             return `${names} is a trial user`;
//     }
// };
// console.log(getUserRole("Sneha", "admin"));

var getUserRole=(names, role)=>{ //arrow function
    switch (role) {
        case "admin":
            return `${names} is admin with all access`;
        case "sub-admin":
            return `${names} is admin with not all access`;
        default:
            return `${names} is a trial user`;
    }
};
console.log(getUserRole("Sneha", "admin"));


//what is a global context?
//The global context actually differs when we execute it using node and when we execute it in browser.
myName="Sneha";
if(myName ===window.myName) //window means diff when used in browser and diff when used here..,
console.log("This is a true statement");
