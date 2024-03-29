# Amasport

Amasport, an Amazon clone, is a full-stack web application that allows users to browse, review and checkout products in a similar way to Amazon. It includes features such as user authentication, search and filter functionality, product pages with detailed information and reviews, as well as a shopping cart and checkout process. With a modern and user-friendly interface, Amasport provides a seamless e-commerce experience for users, and was built using a combination of front-end and back-end technologies such as React, Node.js, Flask, and PostgreSQL.

## Links


- <a href="https://amasport.herokuapp.com/" target="popup"> Live Site
- <a href="https://github.com/WingNinCheung/Amasport/wiki/Database-Schema"> Database Schema
- <a href="https://github.com/WingNinCheung/Amasport/wiki/Feature-List"> Feature List
- <a href="https://github.com/WingNinCheung/Amasport/wiki"> Documentation

## Technologies Used
   
### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)


### Backend
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Flask](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Docker](https://img.shields.io/badge/docker-container-blue)
   
## Key Features & Screenshots
  
   
### Products Search & Sort-by category
   
   - Users can find by products through the use of either the search bar or category links.
   - A dropdown menu next to the search bar allows users to filter results to the selected category. 
   - Matching results to the current category and search-term combination will be displayed as links in real time.
   


### Shopping Cart
   
   - Users can add, update quantities, and remove products from their carts. 
   - Users can checkout their carts and will be directed to the checkout page.
   - Total price will be displayed on the shopping cart page.
   - Items that are in the cart will be cleared from the cart after payment is complete.
   
<img width="1762" alt="Screen Shot 2022-08-14 at 5 38 41 PM" src="https://user-images.githubusercontent.com/96600317/184561063-e8d19a02-f0b7-4c3e-9f4a-f8c8c5aede5c.png">

<img width="1628" alt="Screen Shot 2022-08-14 at 5 47 00 PM" src="https://user-images.githubusercontent.com/96600317/184561373-3bc38063-ed45-40bf-a6a4-966c316ee965.png">

   
   - Users are only able to buy a maximum of nine of the same products. If the cart has already nine of a particular product, adding one more to the cart will lead to a message that users have to check out before purchasing more.
   
   <img width="365" alt="Screen Shot 2022-08-14 at 5 50 00 PM" src="https://user-images.githubusercontent.com/96600317/184561518-f281b13b-11d6-4125-9d0a-50c452be19ac.png">

```
   // if no product is found, create that product in the cart table
  useEffect(async () => {
    if (!myProduct) {
      await dispatch(addProduct(userId, id));
      await dispatch(getCart(userId));
   
    } else {
   
      // if found, check if the quantity is <= 9, if yes, then add to db increase +1
      if (myProduct.quantity < 9) {
        myProduct.quantity = myProduct.quantity + 1;
        await dispatch(updateQuantity(userId, id, myProduct.quantity));
   
      } else {
   
        // if not found, then display a message and do not add to cart
        setExceedLimit(true);
      }
    }
  }, [dispatch]);
```
   
### Checkout
   
   - On the checkout page, users can choose their shipping address.
   (Users can put their delivery address on their profile page and this address will be shown when they check out). 
   - Or users can add a new/different shipping address during checkout.
   
   <img width="1488" alt="Screen Shot 2022-08-14 at 5 53 38 PM" src="https://user-images.githubusercontent.com/96600317/184561695-0a9e53f1-19e3-45eb-8682-5340ee5b1678.png">
   
   - After the users select their shipping address, they are able to checkout their carts and will get redirected to the home page in five seconds.
<img width="1788" alt="Screen Shot 2022-08-14 at 6 05 03 PM" src="https://user-images.githubusercontent.com/96600317/184562142-4e68ea21-ab33-4719-9c30-7b48db612052.png">

### Order History
   
   - Users can view their order history by clicking Account & Lists on the right of the navigation bar.
   
   <img width="1080" alt="Screen Shot 2022-08-14 at 6 09 24 PM" src="https://user-images.githubusercontent.com/96600317/184562321-1af6a019-1393-4128-99af-9daf7848f2ef.png">
   
   - User can edit their shipping address or cancel their orders **if the order status pending.**
  
### Dynamic Order Status
   
   - When the users place their orders, the status is pending initially.
   - Two hours later from the time they place their orders, the status will change to "Shipped" dynamically.
   - Two days later, the status will change to "Delivered".
   <img width="777" alt="Screen Shot 2022-08-14 at 6 12 45 PM" src="https://user-images.githubusercontent.com/96600317/184562469-fb189b07-9811-4b30-8238-8b330c285312.png">
   
   ```
   useEffect(() =>{
      ...
      ...
   
      if (currentTime >= twoHoursLater && currentTime < twoDaysLater) {
        setStatus("Shipped");
        const data = {
          delivery_status: "Shipped",
        };
        dispatch(updateStatus(data, item.id));
      } else if (currentTime >= twoDaysLater) {
        setStatus("Delivered");
        const data = {
          delivery_status: "Delivered",
        };
        dispatch(updateStatus(data, item.id));
      }
    });
  }, [dispatch, status]);
  
   
   ```
### Reviews
                                 
   - Users can write reviews on any products and rate them using stars.
   - Users can edit or remove their own reviews.
                                 
  <img width="1870" alt="Screen Shot 2022-08-14 at 6 18 13 PM" src="https://user-images.githubusercontent.com/96600317/184562745-e91e2bce-d306-4225-bc6d-741fd82bdd6b.png">
<img width="801" alt="Screen Shot 2022-08-14 at 6 18 28 PM" src="https://user-images.githubusercontent.com/96600317/184562756-2360bfb9-4ae3-4a8e-88be-6abd54aa22cd.png">

```
function StarRating({ review }) {
  return (
    <div className="star-rating">
      {[...Array(review.rating)].map((star) => {
        return (
          <span className="star">
            <i class="fa-solid fa-star" id="review-star"></i>
          </span>
        );
      })}
    </div>
  );
}
```
   
### Undefined URLs

   - A customized page for any undefined URLs, such as /abc or /xyz
   <img width="1699" alt="Screen Shot 2022-09-30 at 11 43 55 AM" src="https://user-images.githubusercontent.com/96600317/193336189-7c2c9f75-035a-4cd6-9ee1-e2330370aec6.png">

   
