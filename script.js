const imageUrls= ['https://images.unsplash.com/photo-1695558676939-466df132a0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80']
let currentIndex= 0;
function showImage() {
    const img = document.getElementById('slideshow-img');
    img.src = imageUrls[currentIndex];
    currentIndex=(currentIndex + 1)
    %imageUrls.length;
    setTimeout(showImage, 3000); //
} 
window.onload=showImage;