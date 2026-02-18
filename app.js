// Core modules
const readline = require("readline");
const fs = require("fs");
const http = require("http");
const url = require("url");
const events = require('events');


// User define modules
const user = require('./Modules/user');



// Third party modules / Librearys





console.log("Lecture 3 : Done");
// Lecture 3: Code Example
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please enter your name : ", (name) => {
//     console.log("Your name is ", name)
//     rl.close();
// })

// rl.on('close', () => {
//     console.log("Interface is closed");
//     process.exit(0);
// })

console.log("Lecture 4 : Done");
// Lecture 4: Read & Write file sync

// const textIn = fs.readFileSync('./File/input.txt', 'utf-8');
// console.log(textIn)

// let content = `Data read from input.txt : ${textIn}.\nDate created : ${new Date()}`
// fs.writeFileSync('./File/output.txt', content)

console.log("Lecture 5 : Done");
// Lecture 5: Read & Write file async

// fs.readFile('./File/start.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     fs.readFile(`./File/${data}.txt`, 'utf-8', (err1, data1) => {
//         console.log(data1);
//         fs.writeFile(`./File/output.txt`, `${data} : ${data1}`, () => {
//             console.log("File has been written successfully..");

//         })
//     })
// })
// console.log("Reading file...");

console.log("Lecture 6 : Done");
// Lecture 6: Create server using http and using JSON Data in html with routes

// const html = fs.readFileSync("./Template/index.html", "utf-8");
// const products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"));
// const productslisthtml = fs.readFileSync("./Template/product-list.html", "utf-8");
// const productDetailhtml = fs.readFileSync(
//   "./Template/product-details.html",
//   "utf-8"
// );


// const productHtmlArray = products.map((prod) => {
//   let output = productslisthtml.replace("{{%IMAGE%}}", prod.productImage);
//   output = output.replace("{{%NAME%}}", prod.name);
//   output = output.replace("{{%MODELNAME%}}", prod.modelName);
//   output = output.replace("{{%MODELNO%}}", prod.modelNumber);
//   output = output.replace("{{%SIZE%}}", prod.size);
//   output = output.replace("{{%CAMERA%}}", prod.camera);
//   output = output.replace("{{%PRICE%}}", prod.price);
//   output = output.replace("{{%COLOR%}}", prod.color);

//   return output;
  
// })

// function replaceHtml(temp, prod) {
//   let output = temp.replace("{{%IMAGE%}}", prod.productImage);
//   output = output.replace("{{%NAME%}}", prod.name);
//   output = output.replace("{{%MODELNAME%}}", prod.modelName);
//   output = output.replace("{{%MODELNO%}}", prod.modelNumber);
//   output = output.replace("{{%SIZE%}}", prod.size);
//   output = output.replace("{{%CAMERA%}}", prod.camera);
//   output = output.replace("{{%PRICE%}}", prod.price);
//   output = output.replace("{{%COLOR%}}", prod.color);

//   output = output.replace("{{%ROM%}}", prod.ROM);
//   output = output.replace("{{%DESC%}}", prod.Description);
//   return output;
// }


// Server has created
// const server = http.createServer((req, res) => {
//   // res.writeHead(200, { "Content-Type": "text/html" });
//   // res.end("HI, From the server!!")
//   console.log("Get a request..");

//   // const { url, method } = req;
//   // console.log(req);
//   // res.end(`Hi Rishav, You made a ${method} request to ${url}`);
//   // res.end(html);
//   // let path = req.url.toLocaleLowerCase();
  
//   let { query, pathname: path } = url.parse(req.url, true);
//   console.log(query.id, path);
  

//   if (path === "/" || path.toLocaleLowerCase() === "/home") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(html.replace("{{%CONTENT%}}", "You are on Home page!!"));


//   } else if (path.toLocaleLowerCase() === "/products") {
//     if (!query.id) {
//       let productHtmlArray = products.map((prod) => {
//         return replaceHtml(productslisthtml, prod);
//       })
//       const productResponsehtml = html.replace(
//         "{{%CONTENT%}}",
//         productHtmlArray.join(",")
//       );
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(productResponsehtml);
//     } else {
//       let prod = products[query.id];
//       let productDetailsResponseHtml = replaceHtml(productDetailhtml, prod);
//       res.end(html.replace("{{%CONTENT%}}", productDetailsResponseHtml));
//     }


//   } else if (path.toLocaleLowerCase() === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(html.replace("{{%CONTENT%}}", "You are on About page!!"));


//   } else if (path.toLocaleLowerCase() === "/contact") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(html.replace("{{%CONTENT%}}", "You are on Contect page!!"));


//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end(html.replace("{{%CONTENT%}}", "Page not found: 404!!"));
//   }
// });

// Server Started


// Create the server
// const server = http.createServer();

// Start the server
// const PORT = 8000;
// server.listen(PORT, "localhost", () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
 





console.log("Lecture 6 : On Going\n\n");
// Emmate and custum emmates 

// let myEmmets = new events.EventEmitter();
// let myEmmets = new user();

// myEmmets.on("userCreated", (id, name) => {
//   console.log(`A new user ${name} joined with id ${id}!!`);
// });

// myEmmets.on('userCreated', (id, name) => {
//   console.log(`A new user ${name} added with id ${id} in database!!`);
// })

// myEmmets.emit("userCreated", 101, "Rishav");



// Streaming data

// server.on('request', (req, res) => {
//   fs.readFile("./File/large-data.txt", (err, data) => {
//     if (err){
//       res.end("Something went wrong!!")
//       return;
//     }
//     res.end(data);
//   });
// })



// server.on("request", (req, res) => {
//   const rs = fs.createReadStream("./File/large-data.txt");

//   rs.on('data', (chunk) => {
//     res.write(chunk);
//   });

//   rs.on('end', () => {
//     res.end();
//   });

//   rs.on('error', (err) => {
//     res.end("Something went wrong!! : ", err.message);
//   });
// });




// Event loop 

console.log('Progress has started!');

fs.readFile('./File/large-data.txt', () => {
  console.log('File read compelted!!');

  setTimeout(() => {
    console.log('Timer callback is excuted!!');
  })

  setImmediate(() => {
    console.log('setImmidate is excuted!!');
  })

  // It will not waits to complete the current tic
  process.nextTick(() => {
    console.log('nextTick is excuted!!');
    
  })
  
})

console.log("Progress Completed!");





