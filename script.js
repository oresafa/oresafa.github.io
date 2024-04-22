// Replace 'YOUR_ACCESS_KEY' with your actual Unsplash access key
const accessKey = 'YOUR_ACCESS_KEY';

// Replace 'COLLECTION_ID' with the ID of the Unsplash collection you want to fetch photos from
const collectionId = 'COLLECTION_ID';

// Specify the number of photos you want to fetch
const perPage = 10;

// Fetch photos from the Unsplash collection
fetch(`https://api.unsplash.com/collections/${collectionId}/photos?per_page=${perPage}&client_id=${accessKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the data (an array of photo objects)
    // Display the photos on your webpage
    displayPhotos(data);
  })
  .catch(error => {
    console.error('There was a problem fetching the photos:', error);
  });

// Function to display the fetched photos on your webpage
function displayPhotos(photos) {
  const photoContainer = document.getElementById('photo-container');
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.urls.regular; // Use the 'regular' size image
    img.alt = photo.alt_description || 'Photo';
    photoContainer.appendChild(img);
  });
}
