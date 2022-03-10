// Sets up the downloader
const youtubeMp3Converter = require("youtube-mp3-converter");
// creates Download function and setup the directory
const convertLinkToMp3 = youtubeMp3Converter("./videos/");

const fs = require("fs");

//Read  the file
fs.readFile("urls.txt", "utf-8", async (err, data) => {
  if (err) throw err;

  //Clean file output
  const urls = data
    .replace("\r", "")
    .replace(" \r", "")
    .replace(" ", "")
    .split("\n");
  console.log("Videos to download: " + urls.length + "\n");
  console.log("Downloading videos..." + "\n");
  for (const url of urls) {
    //Download the youtube video
    const pathToMp3 = await convertLinkToMp3(url);
    console.log(pathToMp3 + "Successfully downloaded!" + "\n");
  }
});
