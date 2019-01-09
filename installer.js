var gulp = require('gulp');
var winInstaller = require('electron-windows-installer');
 
gulp.task('create-windows-installer', function(done) {
  winInstaller({
    'appDirectory': 'C://Users/sivaj/workspace/sample',
    'outputDirectory': 'C://Users/sivaj/workspace/release',
    'arch': 'ia32',
  }).then(done).catch(done);
});