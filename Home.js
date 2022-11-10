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
             <Product 
            id='12353' 
            title='Apple Watch SE (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular'
            price={35100.00}
            rating = {5}
            image = 'https://m.media-amazon.com/images/I/71ZyBh4LQuL._SL1500_.jpg'
            />
           </div>
           
           <div className="home__row">
            <Product 
            id='12349' 
            title='Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band'
            price={52900}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/31z1HR9KtwL.jpg'
            />
            <Product 
            id='12351' 
            title='
            Apple Watch Series 7 (GPS, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular'
            price={40300}
            rating = {4}
            image = 'https://assets.ajio.com/medias/sys_master/root/20220513/HekX/627e264cf997dd03e2b9edc6/-473Wx593H-463131455-red-MODEL2.jpg'
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
