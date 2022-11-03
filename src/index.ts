import * as fs from "fs";

/**
 * .md 파일 찾기
 */
fs.readdir(__dirname,(err,fileList)=>{

    fileList.forEach(file=>{
        const fileNames = file.split(".");
        // 폴더입니다.
        if(fileNames.length === 1 ){
            return
        }

        if (fileNames[fileNames.length-1] =="md"){
            console.log(__dirname);
            fs.readFile(__dirname+"/"+file, (err, data) =>{
                console.log(data.toString());
            })
        }
    })
})
