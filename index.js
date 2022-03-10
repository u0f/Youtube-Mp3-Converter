// Sets up the downloader
const youtubeMp3Converter = require("youtube-mp3-converter");
// creates Download function
const convertLinkToMp3 = youtubeMp3Converter("./videos/");
// Downloads mp3 and Returns path were it was saved.

const fs = require("fs");
fs.readFile("urls.txt", "utf-8", async (err, data) => {
  if (err) throw err;

  const urls = data.replace("\r", "").replace(" \r", "").split("\n");

  for (const url of urls) {
    const pathToMp3 = await convertLinkToMp3(url);
    console.log(pathToMp3);
  }
});
