const Preview = require('../services/service');

test('should fetch video/text link preview information', (done) => {
  let url = "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts";
  fetchPreviewInformation(url).then((data)=>{
    expect(data.mediaType).toEqual("video.other");
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('description');
    done();
  })
});

test('should fetch image link preview information', (done) => {
  let url = "https://media.npr.org/assets/img/2018/04/27/gettyimages-656523922nunes-4bb9a194ab2986834622983bb2f8fe57728a9e5f-s1100-c15.jpg";
  fetchPreviewInformation(url).then((data)=>{
    expect(data.mediaType).toEqual("image");
    done();
  })
});

test('should fetch audio link preview information', (done) => {
  let url = "https://ondemand.npr.org/anon.npr-mp3/npr/atc/2007/12/20071231_atc_13.mp3";
  fetchPreviewInformation(url).then((data)=>{
    expect(data.mediaType).toEqual("audio");
    done();
  })
});

test('should fetch video link preview information', (done) => {
  let url = "https://www.w3schools.com/html/mov_bbb.mp4";
  fetchPreviewInformation(url).then((data)=>{
    expect(data.mediaType).toEqual("video");
    done();
  })
});


function fetchPreviewInformation(url){
  return Preview.fetch(url).then((data) => {
    // console.log(data);
    expect(data).toBeTruthy;
    expect(data.url).toEqual(url);
    expect(data).toHaveProperty('contentType');
    expect(data).toHaveProperty('contentType');
    return data;
  });
}
