if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function () {
            console.log('SW registered');
        });
}




var video = document.getElementById('video');
// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
});
var data = canvas.toDataURL('image/png');
photo.setAttribute('src', data);
function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
}



var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxdieiyof/upload";
var CLOUDINARY_UPLOAD_PRESET = 'n2bowxfs';
var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    console.log(file);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;
    }).catch(function (err) {
        console.log(err);
    });

});