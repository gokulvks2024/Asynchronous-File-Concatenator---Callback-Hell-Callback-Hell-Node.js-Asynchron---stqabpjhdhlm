async function cat(filePaths, outputFilePath) {
  const fs = require('fs').promises;
  await fs.writeFile(outputFilePath, '');
 for(let i of filePaths){
    try{
      if(i.includes('.txt')){
        const data = await fs.readFile(i, 'utf8')
        await fs.appendFile(outputFilePath, `${data}\n`)
      }
      else{
        await fs.appendFile(outputFilePath,'Is a directory\n')
      }
  }
    catch(err){
      await fs.appendFile(outputFilePath,`File not found\n`)
    }
  }
}

module.exports = { cat };
