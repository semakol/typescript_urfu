import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const uploadInput = document.getElementById('upload');
const imageElement = document.getElementById('image');
const cropButton = document.getElementById('crop-button');
const saveButton = document.getElementById('save-button');
const croppedImageContainer = document.createElement('div');
const imageContainer = document.getElementById('image-container');
imageContainer.insertBefore(croppedImageContainer, imageElement);

let cropper;

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageElement.src = e.target.result;
            if (cropper) {
                cropper.destroy();
            }
            cropper = new Cropper(imageElement, {
                aspectRatio: 1,
                viewMode: 1,
                autoCropArea: 1,
                responsive: true,
            });
        };
        reader.readAsDataURL(file);
    }
});

// Remove old cropArea event listeners

cropButton.addEventListener('click', () => {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        const croppedImage = canvas.toDataURL('image/png');
        const croppedImageElement = document.createElement('img');
        croppedImageElement.src = croppedImage;
        croppedImageContainer.innerHTML = '';
        croppedImageContainer.appendChild(croppedImageElement);
    }
});

saveButton.addEventListener('click', () => {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        const croppedImage = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = croppedImage;
        link.download = 'cropped-image.png';
        link.click();
    }
});
