let fs = require("fs");
// ??
let path = require("path");
function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile()
}
function getContent(src) {
    return fs.readdirSync(src);
}

let uniqid = require("uniqid");
function untreefy(src) {
    // checkwhether file or directory
    if (checkWhetherFile(src) == true) {
        // console.log(toprint + " *");
        // copy with newname
        let oldName = path.basename(src);
        let newName = uniqid();
        let destPath = path.join(dest, newName);
        fs.copyFileSync(src, destPath);
        console.log(`File ${oldName} from src copied to ${destPath}`);
    } else {
        // directory
         // print
        // console.log(toprint);
        // get childrens
       let childNames = getContent(src);
        // console.log(childNames);
        for (let i = 0; i < childNames.length; i++) {
            let childPath = path.join(src, childNames[i]);
            // let cToprint = path.join(toprint, childNames[i]);
            let chobj = {};
            untreefy(childPath);
            
        }
    }
}
let src = process.argv[2];
let dest = process.argv[3];
untreefy(src,dest);
//console.log(src);