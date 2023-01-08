const {Readable} = require('stream')


const bufferToStream = (fileBuffer) => {
    const stream = new Readable({
        read(){
            this.push(fileBuffer)
            this.push(null)
        }
    });
    return stream;
}

module.exports = {bufferToStream}