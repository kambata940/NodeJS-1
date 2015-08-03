function iniToJson(fileName){
  
  this.targetFile = require(fileName);
  this.libraly = new Libraly();
  this.run();

  this.run = function(targetFile) {
    targetFile.readFile(fileName, function (errors, data) {
      if (errors) {
        console.log('There are some errors' + errors);
      }else {
        console.log('Parsing...');
        return this.iniParser(data.toString());
      }
    });
  }

  this.iniParser = function(string) {
    return string.match(libraly.objects);
  }
}

function Libraly(){
  this.header = spaces + '\[(\w+)\]' + '\n';
  this.spaces = '[\t ]*';
  this.emptyLines = '\s*'
  this.key = spaces + '(\w+)' + spaces;
  this.val = '([^\n]*)\n';
  this.keyValue = key + '=' + value + '\n';
  this.obj = header + '(' + keyValue + ')*';
  this.objects = '^' + emptyLines +'(' + obj + ')*'
}
