const fs = require('fs');
// console.log(fs);


// Creats a new file with data
// fs.writeFile("hey.txt", "Kaisa hai bhai tu", function (err) {
//     if (err) console.error(err);
//     else console.log("Done")
// })


// Append data in existing file
// fs.appendFile("hey.txt", "\nMai to mast hu bhai tu bata", function (err) {
//     if (err) console.error(err);
//     else console.log("Added")
// })


// Edit file name
// fs.rename("hey.txt", "message.txt", (err) => {
//     if (err) console.error(err);
//     else console.log("Modified file name");
// })


// Copy a file data in other place
// fs.copyFile("message.txt", "./data.txt", (err) => {
//     if (err) console.error(err);
//     else console.log("Copied");
// })


// Delete file 
// fs.unlink("message.txt", (err) => {
//     if (err) console.error(err);
//     else console.log("Delete files")
// })


// remove file
// fs.rm("./data", {recursive: true} , (err) => {
//     if (err) console.error(err);
//     else console.log("Deleted");
// })


// Create file
// fs.mkdir("data/data.txt", { recursive: true }, (err) => {
//     if (err) console.error(err);
//     else console.log("Created File");
// }) 


// Open a file for writing
// 'w' - Open file for writing. Create if not exists, truncate if exists
// 'r' – Open file for reading. Error if file does not exist.
// 'a' – Open file for appending. Create if not exists.
// fs.open("data.txt", 'r' ,(err,fd) => {
//     if (err) console.error(err)
//     else console.log("Opened file:- fd:-", fd)
    
//     // Append data 
//     fs.appendFile("data.txt", "\nMai to mast hu bhai tu bata", function (err) {
//         if (err) console.error(err);
//         else console.log("Added")

//         // Close file
//         fs.close(fd, (err) => {
//             if (err) console.error(err);
//             else console.log('Closed file');
//         })
//     })
// })


// if (fs.existsSync('data.txt')) {
//   console.log('File exists!');
// } else {
//   console.log('File does NOT exist!');
// }
    
    
// Read file data
// const data = fs.readFile('./filesystem/Bike_Data.json', 'utf8', (err, fd) => {
//     if (err) {
//         console.error("Error : ", err);
//     } else {
//         console.log("FD : ", fd); 
//     }
// })




