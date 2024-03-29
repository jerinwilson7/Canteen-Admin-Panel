const convertToBase64=(file)=>{
    return new Promise ((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            console.log(error)
            reject(error)
        }
    })
}

module.exports={convertToBase64}