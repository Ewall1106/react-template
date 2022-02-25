const fs = require('fs')
const archiver = require('archiver')

const output = fs.createWriteStream('dist.zip')
const archive = archiver('zip', {
  zlib: { level: 9 }
})

output.on('end', () => {
  console.log('Data has been drained')
})

archive.on('error', err => {
  throw err
})

archive.pipe(output)

archive.directory('build/', '')

archive.finalize()
