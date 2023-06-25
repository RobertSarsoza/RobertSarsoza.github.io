var losing = Math.floor(Math.random() * 9)
var winning = Math.floor(Math.random() *9 )

const treasure =(number) => {
//     if (number  ===0) {
//         document.getElementById(0).innerHTML = "🐟"
//     }
//     else if (number  ===1) {
//         document.getElementById(1).innerHTML = "🍣" 
//     } 
//     else if (number  ===2) {
//         document.getElementById(2).innerHTML = "🐡"
//     }
// else if (number  ===3) {
//     document.getElementById(3).innerHTML = "🍱"
//     }
// else if (number  ===4) {
//     document.getElementById(4).innerHTML = "🍣"
//     }
//     else if (number  ===5) {
//         document.getElementById(5).innerHTML = "🐟"
//     }
// else if (number  ===8) {
//     document.getElementById(8).innerHTML = "🍣"
//     }
//     else if (number  ===6) {
//         document.getElementById(6).innerHTML = "🐟"
//     }
//         else if (number  ===7) {
//             document.getElementById(7).innerHTML = "🐟"
//     }  
    if(number===winning) {
        document.getElementById(number).innerHTML = "🍱"
        alert ("YUMMM im full now")
    }
    else if(number===losing) {
        document.getElementById(number).innerHTML = "🐡"
        alert ("Poisoned!")
    }
    else {
        document.getElementById(number).innerHTML = "🐟"
        alert ("Still Hungry!")
    }
}
//  }
//    if(number === losing) {
//         return alert ("Poisoned!")
//     } 
//     else if(number === winning) {
//         return alert ("YUMMM im full now")
//     } else {
//      return alert ("Still Hungry!")
//     }