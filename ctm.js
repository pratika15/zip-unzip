var JSZip = require('JSZip');

fs.readFile( filePath, function(err, data){
    if (!err){
        var zip = new JSZip();
        JSZip.loadAsync(data).then(function(zip){
            object.keys(zip.files).forEach(function(filename){
                var content = zip.files[filename];
                var dest = path + filename;
                fs.writeFileSync(dest, content);
            });
        });
    }
});