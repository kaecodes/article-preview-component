const shareBtn = document.querySelector('.share'); 
const popup = document.querySelector('.popup');
const popupShare = document.querySelector('.popup-share'); 

shareBtn.addEventListener('click', () => {
  popup.classList.toggle('active'); 
})

popupShare.addEventListener('click', () => {
  popup.classList.toggle('active'); 
})

