
document.addEventListener('DOMContentLoaded', function(){
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
});
