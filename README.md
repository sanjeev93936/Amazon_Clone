# Amazon-Clone

### This is basically a clone of the well-known E-commerce website Amazon. It uses Firebase for User Authentication. It uses Stripe for User Payments


## Demo

You can find the Demo [Amazon_Clone](https://fir-e4689.web.app/).


## Installation Guidlines

### STEP 1
#### Clone this Repository
 ```sh
  git clone https://github.com/sanjeev93936/Amazon_Clone1.git
  ```
### STEP 2
 #### Run -- Npm install
  ```sh
   npm install
   ```
### STEP 3
 #### [Add a Project with Firebase](https://console.firebase.google.com/u/0/)
 
### STEP 4
##### Go to the firebase.js file of the project file and add your firebase credentials (Note: This file already includes my firebase project credentials , So you just have to replace it with yours)

 ```sh
 const firebaseApp = firebase.initializeApp({
 apiKey: "",
 authDomain: "",
 databaseURL: "",
 projectId: "",
 storageBucket: "",
 messagingSenderId: "",
 appId: "",
 measurementId: "",
});
```
### STEP 5
#### Run -- npm start  (Make sure You run this in the root directory of the project folder)
  
```sh
   npm start
   ```

### STEP 6
 #### [Add a Project with Stripe](https://stripe.com/en-in)
 
### STEP 7
##### Deploy cloud functions Run -- firebase emulators : start (Make sure You run this in the functions directory) (this gives end point to server)

```sh
   firebase emulators : start
   ```

## Screnshots

### This is the Authentication Section
![Screenshot 2023-09-16 193135](https://github.com/sanjeev93936/Amazon_Clone1/assets/108318474/22df3e83-ef5b-4ab7-926c-91bd23322b7b)
### This is the Home Section
![Screenshot 2023-09-16 193039](https://github.com/sanjeev93936/Amazon_Clone1/assets/108318474/4838816c-0d14-4476-b4b2-41e0814284b1)
![Screenshot 2023-09-16 193114](https://github.com/sanjeev93936/Amazon_Clone1/assets/108318474/3e297633-5264-454c-a384-96c2d1ef2b79)
### This is the Checkout Section
![Screenshot 2023-09-16 193231](https://github.com/sanjeev93936/Amazon_Clone1/assets/108318474/1670b609-0e3e-4eb3-9cf2-d812358f8f40)
### This is the Payment Section
![Screenshot 2023-09-16 193257](https://github.com/sanjeev93936/Amazon_Clone1/assets/108318474/b22be56e-f180-4ca5-b4bd-28d022bc5489)
![Screenshot 2023-09-16 193320](https://github.com/sanjeev93936/Amazon_Clone1/assets/108318474/47174cb9-7b80-46d9-bdd6-ab3b0aa16b52)

## Author

### Sanjeev

<a href="https://linkedin.com/in/sanjeev-madhavarapu-92a389237/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://instagram.com/
sanjeev_madhavarapu" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="p_iconic_" height="30" width="40" /></a>
