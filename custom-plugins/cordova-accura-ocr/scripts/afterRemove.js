const fs = require('fs');
const os = require('os');
const srcPath = __dirname.replace('scripts', '');
var srcParentPath = __dirname.replace('plugins\\cordova-accura-ocr\\scripts', 'platforms\\android');
var ocrDestPath = srcParentPath + '\\app\\src\\main\\assets\\key.license';
var gridlePath = srcParentPath + "\\app\\build.gradle";
if (['linux', 'darwin'].indexOf(os.platform()) !== -1) {
    srcParentPath = __dirname.replace('plugins/cordova-accura-ocr/scripts', 'platforms/android');
    ocrDestPath = srcParentPath + '/app/src/main/assets/key.license';
    gridlePath = srcParentPath + "/app/build.gradle";
}

try {
    fs.unlinkSync(ocrDestPath);
}catch (e) {

}

var gradle = fs.readFileSync(gridlePath).toString();
if (gradle.indexOf('accura_kyc.aar') !== -1) {
    // const lib = 'implementation files(\'libs\\\\accura_kyc.aar\')';
    // gradle = gradle.replace(lib, '');
    // fs.writeFileSync(gridlePath, gradle);
}
