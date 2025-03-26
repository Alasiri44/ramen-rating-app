# 🍜 Ramen Menu App  

A simple web application that displays a list of ramen dishes. Users can:  
✅ View ramen images.  
✅ Click an image to see ramen details (name, restaurant, rating, and comment).  
✅ Add new ramen entries via a form.   
✅ (Optional) Remove a ramen entry from the menu.  

---

## 📌 Features  

### 🔹 Basic Features  
- **Display Ramen Images:**  
  - Implement `displayRamens()` to load images from the `ramens` array.  
  - Append them as `<img>` elements inside the `#ramen-menu` div.  

- **Ramen Detail Display:**  
  - Clicking an image triggers `handleClick()`.  
  - Displays details inside the `#ramen-detail` div.  

- **Handle New Ramen Form Submission:**  
  - Implement `addSubmitListener()`.  
  - Users can add a new ramen, updating the DOM without data persistence.  

- **Initialize App:**  
  - Implement `main()` to initialize the app.  
  - Ensure the DOM is fully loaded before execution.  

### ⭐ Advanced Features  
- Display the first ramen’s details automatically on page load.   
- Enable deletion of a ramen entry from the menu.  

---

## 🛠️ Technologies Used  
- HTML  
- CSS  
- JavaScript (DOM Manipulation)  

---


