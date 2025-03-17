
document.addEventListener('DOMContentLoaded', function(e){
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
     ];

     const myRamen = document.querySelectorAll('div#images img');
     
     myRamen.forEach(ramenImage => {
     ramenImage.addEventListener('click', function(){
        
        const myDiv = document.getElementById('enlargedImage');
        
        myDiv.src = ramenImage.src;

        myDiv.style.height = '250px';
        myDiv.style.width = '300px';
     });
     });

     // Creating a new image element
     const button = document.querySelector('#myButton');
     button.addEventListener('click', function(e){
        e.preventDefault();

        const ramenName = document.getElementById('ramenName').value;
        const ramenRestaurant = document.getElementById('ramenRestaurant').value;
        const ramenImage = document.getElementById('ramenImage').value;
        const ramenRating= document.getElementById('ramenRating').value;
        const ramenComment = document.getElementById('ramenComment').value; 

        if(ramenName.trim() !== '' && ramenRestaurant.trim() !== ''  && ramenImage.trim() !== ''  && ramenRating.trim() !== ''  && ramenComment.trim() !== '' ){
        
        }else{
         alert('Please fill all the requirements');
        }


       
     });
});
