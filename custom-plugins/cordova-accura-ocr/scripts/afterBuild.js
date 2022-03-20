const fs = require('fs');
const os = require('os');
const srcPath = __dirname.replace('scripts', '');
//Code for copy license files into Project root
var srcParentPath = __dirname.replace('plugins\\cordova-accura-ocr\\scripts', 'platforms\\android');
var ocrPath = srcPath + 'src\\android\\key.license';
var ocrDestPath = srcParentPath + '\\app\\src\\main\\assets\\key.license';
var gridlePath = srcParentPath + "\\app\\build.gradle";
if (['linux', 'darwin'].indexOf(os.platform()) !== -1) {
    srcParentPath = __dirname.replace('plugins/cordova-accura-ocr/scripts', 'platforms/android');
    ocrPath = srcPath + 'src/android/key.license';
    ocrDestPath = srcParentPath + '/app/src/main/assets/key.license';
    gridlePath = srcParentPath + "/app/build.gradle";
}

fs.copyFileSync(ocrPath, ocrDestPath);
