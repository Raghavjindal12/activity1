let input = process.argv.slice(2);
let viewFile=require("./commands/view")
let untreefyallFile=require("./commands/untreefyall")
let treefyFile=require("./commands/treefy");
//console.log(input);
//node tpp.js view src -t
//node tpp.js view src -f
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFile.view(process.argv[3],process.argv[4])
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4])
        //console.log("Treefy  command Implemented");
        break;
    case "untreefy":
        console.log("Untreefy  command Implemented");
        break;
        case "untreefyall":
            untreefyallFile.untreefyall(process.argv[3],process.argv[4]);
            //console.log("Untreefyall  command Implemented");
            break;
    case "help":
        console.log("Help Command Implemented");
        break;
    default:
        console.log("Work Command");
        break;
}