const express = require("express");
const ItemManager = require("../../backend/business/itemManager").ItemManager;
const fs = require('fs');
const fetch = require('node-fetch');
var Jimp = require('jimp');
var path = require('path');
const router = express.Router();

router.get("/image/testRoute", async function (req, res, next) {
    let result = null;
    globalVar = globalVar + 1
    res.send(true)
});

router.post("/image", async function (req, res, next) {
    let result = null;
    try {
             const response = await fetch(req.body.url);
             console.log('req.body.url', req.body)
             const buffer = await response.buffer();

              fs.writeFile(`storage/image.jpg`, buffer,async ()=>{
                  console.log('Download done')
             });
        // original image

        var listImages = [];
        let originalImage = 'storage/image.jpg';
        // file name for cropped image
        //  let outputImage = 'storage/'+Date.now()+'.jpg';

        for (let i = 0; i < req.body.coordinates.length; i++) {
            console.log(req.body.coordinates[i])
            let img = await test(originalImage, req.body.coordinates[i]);
            console.log('img', img)
            listImages.push(img);
        }

        res.send(listImages);
    } catch (err) {
        next(err);
    }
});

router.post("/cmd", async function (req, res, next) {
    let result = null;
    try {

        const { exec } = require("child_process");
        exec("sh First.sh", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        res.send([]);
    } catch (err) {
        next(err);
    }
});


async function test(inputURL, obj) {
    return new Promise(async (resolve, reject) => {
        try {
            const photo = await Jimp.read(inputURL);
            const outpath = 'storage/filtered' + Math.floor(Math.random() * 2000) + '.jpg';
            await photo
                .crop(obj.x, obj.y, obj.w, obj.h) // resize
                .write(outpath,()=>{
                    resolve(outpath)
                });
        } catch (error) {
            console.log('Error in Test', error)
            reject(error)
        }
    });
}

module.exports = router;
