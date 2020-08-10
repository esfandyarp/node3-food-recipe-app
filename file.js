const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'public/pdfs')





const loadFiles = () => {
    fs.readdirSync(path.join(__dirname, 'public/pdfs')).map(name => {
    return {
        name: path.basename(name, 'pdf'),
        url: `/pdfs/${name}`
    };
})
}

const files = []

console.log(dirPath)