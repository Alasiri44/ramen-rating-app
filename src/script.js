
document.addEventListener('DOMContentLoaded', function(e){
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./assets/shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./assets/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./assets/nirvana.jpg", rating: 4, comment: 'The best' },
        {id: 4, name: 'Narotu Ramen', restaurant: 'Mahashi', image: './assets/naruto.jpg', rating: 5, comment: 'Fabulous' },
        {id: 5, name: 'Mahak Ramen', restaurant: 'Mahaja', image: './assets/gyukotsu.jpg', rating: 1, comment: 'Bad choice' }
       
     ];

     const button = document.querySelector('#myButton');
     const form = document.querySelector('#myForm');
     const images = document.getElementById('ramen-menu');
     const newRating = document.getElementById('ratingParagraph');
     const newComment = document.getElementById('commentParagraph');
     const nameTop = document.getElementById('name-p');
     const restaurantTop = document.getElementById('restaurant-p');

 //Function to display the ramens
   function displayRamens(){
      const imgDiv = document.getElementById('ramen-menu');
      for(let element of ramens){
         let img = document.createElement('img');
         img.src = element.image;
         img.alt = element.name;
         img.classList.add('ramen-image');

         let removeButton = document.createElement('button');
         removeButton.classList.add('remove-button');
         removeButton.innerText = 'X';         

         imgDiv.appendChild(removeButton);
         imgDiv.appendChild(img);
         

         removeButton.style.position = 'absolute';
      }

      let removeButton = document.querySelectorAll('.remove-button');
      removeButton.forEach(buttonElement=> {
         buttonElement.addEventListener('click', function(event){
            event.target.nextSibling.remove();
            event.target.remove();
            
         });
      });
      

     
      images.addEventListener('click', handleClick);
         
         
      function handleClick(event){        
         if (event.target.classList.contains("ramen-image")) {
         const myDiv = document.getElementById('enlargedImage');
         
         myDiv.src = event.target.src;
         myDiv.alt = event.target.alt;

         myDiv.style.height = '250px';
         myDiv.style.width = '300px';
         const myRamen = ramens.find((element) => element.name === myDiv.alt )
         
         newRating.innerText = myRamen.rating;
         newRating.style.margin = '0px';
         newRating.style.padding = '0px';
         newComment.innerText = myRamen.comment;
         newComment.style.margin = '0px';
         newComment.style.padding = '0px';
         
         nameTop.innerText =myRamen.name;
         restaurantTop.innerText = myRamen.restaurant;
         }
      }
   }

     
// Function addSubmitListener to create new elements
     function addSubmitListener(){


      form.addEventListener('submit', function(e){
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

               ramens.push({id: (ramens[ramens.length - 1].id)++, name: ramenName, restaurant: ramenRestaurant, image: ramenImage, rating: ramenRating, comment: ramenComment});
              
               images.appendChild(newImage);
         }else{
            alert('Please fill all the requirements');
         }                          
      });
   }  


   //main function to invoke the displayRamens() function and addSubmitListener() function
   (function main(){
      displayRamens();
      addSubmitListener();
   })();

 
});
