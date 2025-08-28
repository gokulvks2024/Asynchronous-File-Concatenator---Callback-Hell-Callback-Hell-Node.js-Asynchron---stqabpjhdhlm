async function cat(filePaths, outputFilePath) {
  const fs = require('fs').promises;
  await fs.writeFile(outputFilePath, '');
  let ans=[]
  for(let i of filePaths){
    try{
      if(i.includes('.txt')){
        const data = await fs.readFile(i, 'utf8')
        ans.push(data)
        // await fs.appendFile(outputFilePath, `${data}\n`)
      }
      else{
        ans.push('Is a directory')
        // await fs.appendFile(outputFilePath,'Is a directory\n')
      }
  }
    catch(err){
      ans.push('File not found')
      // await fs.appendFile(outputFilePath,`File not found\n`)
    }
  }
  await fs.writeFile(outputFilePath,ans.join('\n'))
}

module.exports = { cat };
