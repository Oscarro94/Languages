const dropElement = document.getElementById('drop');
const modalLinkElements = document.querySelectorAll('.info-modal');
let infoModal;

function toggleDrop(){
    dropElement.classList.toggle('visible');
}

function presentInfoModal(event){
 const text = event.target.dataset.text;
 toggleDrop();
 infoModal = document.createElement('div');
 infoModal.classList.add('modal');
 infoModal.innerHTML = `
 <h2>More details</h2>
 <p>${text}</p>
 `;  

const closeButton = document.createElement('button');
closeButton.addEventListener('click', hideInfoModal);
closeButton.textContent = 'Okay';
infoModal.appendChild(closeButton);
document.body.appendChild(infoModal);
}

function hideInfoModal(){
    toggleDrop();
    document.body.removeChild(infoModal);
}

for (const linkElement of modalLinkElements){
    linkElement.addEventListener('click', presentInfoModal);
}

dropElement.addEventListener('click', hideInfoModal);
