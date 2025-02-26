const uploaderBtn = document.querySelector('.js-open-uploader_1')
const uploaderBtn2 = document.querySelector('.js-open-uploader_2')

const uploaderHandle = document.querySelector('.uploader')
const dropZone = document.querySelector('.drop_1')
const cropZone = document.querySelector('.uploader__crop img')
const rotateLeft = document.querySelector('.uploader__rotate_left')
const rotateRight = document.querySelector('.uploader__rotate_right')
const saveImageBtn = document.querySelector('.uploader__save')
const closeBtn = document.querySelector('.uploader__close')
window.uploader = {}
window.imageUploads = []

const allowedExtentions = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/webp'
];

//Change the upload location to the right one here and in the uploader.php
uploadLocation="/userUploads/imageUploads/"

//uploadLocation="/animPacks/sport_packs/football_starter_pack/images/"



async function dropHandler (event) {
    event.preventDefault();
    if (!checkExtention(event.dataTransfer.files[0])) {
        return
    }
    let image = await handleImageFile(event.dataTransfer.files[0])
    
    initCropper(image)
}
async function uploadHandler (event) {
    console.log(event.target.files[0])
    let image = await handleImageFile(event.target.files[0])
    if (!checkExtention(event.target.files[0])) {
        return
    }
    initCropper(image)
}

function checkExtention (file) {
    window.uploader.file = file
    console.log(file)
    if (allowedExtentions.indexOf(file.type) >= 0) {
        return true
    } else {
        alert('this type of file is not allowed');
        return false
    }
}
function initCropper (image) {
    if (window.cropper) {
        window.cropper.destroy()
    }
    rotateLeft.classList.remove('hidden')
    rotateRight.classList.remove('hidden')
    saveImageBtn.classList.remove('hidden')
    cropZone.src = image
    let cropper = new Croppie(cropZone, {
        viewport: {
            width: 200,
            height: 300,
            type: 'square'
        },
        enableOrientation: true,
        boundary: { width: 600, height: 400 },
        enableResize: true,
    });
    window.cropper = cropper
}
rotateRight.onclick = function () {
    if (window.cropper) {
        window.cropper.rotate(90)
    }
}
rotateLeft.onclick = function () {
    if (window.cropper) {
        window.cropper.rotate(-90)
    }
}
function dragHandler (event) {
    event.preventDefault();
    // console.log(event)

}

//for  file naming
uploaderBtn.onclick = function () {
    window.uploader.button = 'img_0';
    uploaderHandle.classList.add('uploader_active')
}

//for  file naming
uploaderBtn2.onclick = function () {
    window.uploader.button = 'img_1';
    uploaderHandle.classList.add('uploader_active')
}

function handleImageFile (file) {
    return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            let fileContent = reader.result;
            resolve(fileContent)
        }
    })
}
saveImageBtn.onclick = function () {
    if (window.cropper) { 
        window.cropper.result('blob').then(async function(blob) {
            console.log(blob)
            uploaderHandle.classList.remove('uploader_active')

            let data = new FormData(),
                //filename = `/userUploads/imageUploads/${uploader.button}_${FootbStartSessionID}_${uploader.file.name}`//
                
                filename = `${uploadLocation}${uploader.button}_${FootbStartSessionID}_${uploader.file.name}`
            
                imageUploads.splice(`${uploader.button}`.replace('img_',''),1,filename)
            
                //imageUploads.push(filename)

            data.append('file', new File([blob], filename))

            let result = await fetch('./uploader.php', {method:"POST", body: data})
        });
    }
}
closeBtn.onclick = function () {
    console.log('close')
    if (window.cropper) {
        window.cropper.destroy()
        delete window.cropper
    }
    uploaderHandle.classList.remove('uploader_active')
    cropZone.src = ""
    document.querySelector('.uploader__input').value = ""
    
}