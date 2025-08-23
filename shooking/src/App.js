import { useState } from 'react';
import './App.css';

function ShoeCard({shoe, toggleCart, isInCart}){
  return (
    <div className='card'>
      <img src={shoe.image} alt={shoe.brand}/>
      <h3>{shoe.brand}</h3>
      <p>{shoe.description}</p>
      <p>{shoe.price}원</p>
      <button onClick={() => toggleCart(shoe)}>
        {isInCart ? '담김!': '담기!'}
      </button>
    </div>
  );
}

function App() {
  //상품 목록 데이터
  const shoes = [{
    id: 1,
      image: '/Shoes_1.jpg',
      brand: '브랜드A',
      description: '편하고 착용감이 좋은 신발',
      price: 35000
    },
    {
      id: 2,
      image: '/Shoes_2.jpg',
      brand: '브랜드A',
      description: '힙한 컬러가 매력적인 신발',
      price: 25000
    },
    {
      id: 3,
      image: '/Shoes_3.jpg',
      brand: '브랜드B',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000
    },
    {
      id: 4,
      image: '/Shoes_4.jpg',
      brand: '브랜드B',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000
    },
    {
      id: 5,
      image: '/Shoes_5.jpg',
      brand: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000
    },
    {
      id: 6,
      image: '/Shoes_6.jpg',
      brand: '브랜드C',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000
    }
  ];

  //장바구니에 담김 삼품 배열
  const [cart, setCart] = useState([]);

  //담기!/담김! 버튼
  const toggleCart = (shoe) => {
    setCart(prevCart => {
      const isInCart = prevCart.some(item => item.id === shoe.id);
      let updatedCart;
      if (isInCart) { //이미 담겨있으면 제거
        updatedCart = prevCart.filter(item => item.id !== shoe.id);
      } 
      else {          // 없으면 추가
        updatedCart = [...prevCart, shoe];
      }
      console.log("현재 장바구니:", updatedCart);
      return updatedCart;
    });
  };

  return (
    <div className='App'>
      <header className='app-header'>
        <div className="cart-icon">
          <img src='/cart.png' alt="장바구니"/>
          {cart.length > 0 && <span>{cart.length}</span>}
        </div>
      </header>
      <h1>신발 상품 목록</h1>
      <p>현재 {shoes.length}개의 상품이 있습니다.</p>

      <div className='card-container'>
        {shoes.map((shoe, index) => (
          <ShoeCard 
          key={index} 
          shoe={shoe}
          toggleCart={toggleCart}
          isInCart={cart.some(item => item.id === shoe.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;