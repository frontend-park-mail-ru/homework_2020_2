'use strict';


function a(...aa) {
    console.log("aa: ");

    console.log(aa);
}

// const zip = (...objects) => {
//     console.log("!!!!!!")
//     // let aaa = {
//     //     "123": 123, 
//     //     "456": 456,
//     // }
//     // a(aaa, {"11": 11,});
//     // console.log("=================")
//     // let args = {"123": 123,}
//     // console.log(args)
//     // console.log("=================")


//     let BigObject = {};
    
//     console.log("objects: ");
//     console.log(objects);
//     console.log("objects length " + objects.length);
//     for (let i = 0; i < objects.length; i++) {
//         let objects_entries = Object.entries(objects[i]);
//         console.log("obj: " );
//         console.log(objects[i])
//         console.log("obj entries: ");
//         console.log(objects_entries)
//         if (objects_entries) {
//             console.log(i + "th object items: " + objects_entries.length);
//             for (let j = 0; j < objects_entries.length; j++) {
                
//                 if (!(objects_entries[j][0] in BigObject)) {
//                     BigObject[objects_entries[j][0]] = objects_entries[j][1];
//                 }
//             }
//         }
//     }
//     return BigObject;
// };

// const zip = (...objects) => {
//     let BigObject = {};
    
//     for (let i = 0; i < objects.length; i++) {
//         let objects_entries = Object.entries(objects[i]);
//         if (objects_entries) {
//             for (let j = 0; j < objects_entries.length; j++) {
//                 if (!(objects_entries[j][0] in BigObject)) {
//                     BigObject[objects_entries[j][0]] = objects_entries[j][1];
//                 }
//             }
//         }
//     }
//     return BigObject;
// };



const zip = (...objects) => {
    let BigObject = {};
    objects.forEach((item) => {
        Object.entries(item).forEach((item) => {                
            if (!(item[0] in BigObject)) {
                BigObject[item[0]] = item[1];
            }
        });
    });
    return BigObject;
};


// const zip = (...objects) => {
//     let BigObject = {};
//     objects.reverse(); // in order to to leave the first prop among duplicate props
//     objects.forEach((item) => {
//         Object.assign(BigObject, item); // combines properties of objects with rewriting prev versions of prop
//     });
//     return BigObject;
// };