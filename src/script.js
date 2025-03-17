
document.addEventListener('DOMContentLoaded', function(e){
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
     ];

     
     // Creating a new image element
     const button = document.querySelector('#myButton');
     const images = document.getElementById('images');
     button.addEventListener('click', function(e){
        e.preventDefault();

        const ramenName = document.getElementById('ramenName').value;
        const ramenRestaurant = document.getElementById('ramenRestaurant').value;
        const ramenImage = document.getElementById('ramenImage').value;
        const ramenRating= document.getElementById('ramenRating').value;
        const ramenComment = document.getElementById('ramenComment').value; 

        if(ramenName.trim() !== '' && ramenRestaurant.trim() !== ''  && ramenImage.trim() !== ''  && ramenRating.trim() !== ''  && ramenComment.trim() !== '' ){
            const newImage = document.createElement('img');
            newImage.src = ramenImage;
            newImage.alt = ramenName;
            newImage.classList.add("ramen-image");

            images.appendChild(newImage);
        }else{
         alert('Please fill all the requirements');
        }        
     });


     // Selecting the images
     const myRamen = document.querySelectorAll('div#images img');
     
     
     images.addEventListener('click', function(event){
        
      if (event.target.classList.contains("ramen-image")) {
        const myDiv = document.getElementById('enlargedImage');
        
        myDiv.src = event.target.src;

        myDiv.style.height = '250px';
        myDiv.style.width = '300px';
      }
     });
     

});
