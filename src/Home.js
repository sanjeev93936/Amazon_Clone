import React from 'react'
import "./Home.css"
import Product from "./Product";
import Header from './Header';

function Home() {
  return (
   
    <div >

       <Header/>
       <div className='home'>
      <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
      <div className="home__row">
            <Product 
            id='1234' 
            title='HP All-in-One 24-df0215in 60.45 cm (23.8-Inch) FHD with Alexa Built-in (AMD Ryzen 3-3250U/8GB/256GB SSD + 1TB HDD/Win 10/MS Office 2019/Jet Black)'
            price={59999.99}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/71MW1E0je-L._SX466_.jpg'
            />
            <Product 
            id='1235' 
            title='
            HP Pavilion Gaming Latest AMD Ryzen 5 5600H Processor 15.6"(39.6cm)FHD Gaming Laptop (8GB/512GB SSD/Windows 11 Home/NVIDIA GeForce GTX 1650 4GB...'
            price={71343.00}
            rating = {5}
            image = 'https://m.media-amazon.com/images/I/51DmOWr3rnL._SL1000_.jpg'
            />
            </div>
            <div className="home__row">
            <Product 
            id='12346' 
            title='Apple iPhone 13 Pro Max (128GB) - Sierra Blue'
            price={120999.00}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg'
            />
            <Product 
            id='12347' 
            title='
            OnePlus 10T 5G (Jade Green, 12GB RAM, 256GB Storage)'
            price={54999.00}
            rating = {3}
            image = 'https://m.media-amazon.com/images/I/71flXufDnbL._SX679_.jpg'
            />
            <Product 
            id='123456' 
            title='iQOO Neo 6 5G (Dark Nova, 12GB RAM, 256GB Storage) | Snapdragon® 870 5G | 80W FlashCharge'
            price={33999.00}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/71WS-0ITj7L._SX679_.jpg'
            />
            </div>

            <div className="home__row">
            <Product 
            id='1' 
            title='Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band'
            price={52900}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/71fp5ankbqL._SX679_.jpg'
            />
            <Product 
            id='2' 
            title='
            Apple Watch Series 7 (GPS, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular'
            price={40300}
            rating = {5}
            image = 'https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg'
            />
            <Product 
            id='12352' 
            title='New Apple Watch Series 6 (GPS + Cellular, 40mm) - Blue Aluminium Case with Deep Navy Sport Band'
            price={49999.00}
            rating = {5}
            image = 'https://m.media-amazon.com/images/I/718qilkBKUL._SL1500_.jpg'
            />
             
           </div>
           <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={1000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={9999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
     
           <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={15770.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3338.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={121999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>


            <div className="home__row">
            <Product 
            id='12' 
            title='
            Sony Bravia 164 cm (65 inches) XR Series 4K Ultra HD Smart Full Array LED Google TV XR-65X90K (Black) '
            price={160000.00}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/816pDYhthXL._SL1500_.jpg'
            />
            </div>
          
    </div>
    </div>
  )
}

export default Home
