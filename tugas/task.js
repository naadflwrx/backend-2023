function showDownload(result) {
    console.log("Donwload selesai");
    console.log("Hasil Donwload: " + result);
}

function download(callShowDownload) {
    setTimeout(function() {
        const result = "windows-10.exe";
        callShowDownload(result);
    }, 3000); 
}

download(showDownload);
