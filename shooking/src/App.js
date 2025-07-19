import './App.css';

function App() {
  //상품 목록 데이터
  const shoes = [{
      image: 'https://via.placeholder.com/150?text=브랜드A',
      brand: '브랜드A',
      description: '편하고 착용감이 좋은 신발',
      price: 35000
    },
    {
      image: 'https://via.placeholder.com/150?text=브랜드A',
      brand: '브랜드A',
      description: '힙한 컬러가 매력적인 신발',
      price: 25000
    },
    {
      image: 'https://via.placeholder.com/150?text=브랜드B',
      brand: '브랜드B',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000
    },
    {
      image: 'https://via.placeholder.com/150?text=브랜드B',
      brand: '브랜드B',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000
    },
    {
      image: 'https://via.placeholder.com/150?text=브랜드C',
      brand: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000
    },
    {
      image: 'https://via.placeholder.com/150?text=브랜드C',
      brand: '브랜드C',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000
    }
  ];

  return (
    <div className='App'>
      <header className='app-header'>
        <div className="cart-icon">🛒</div>
      </header>
      <h1>신발 상품 목록</h1>
      <p>현재 {shoes.length}개의 상품이 있습니다.</p>

      <div className='card-container'>
        {shoes.map((shoe, index) => (
          <div key={index} className='card'>
            <img src={shoe.image} alt={shoe.brand}/>
            <h3>{shoe.brand}</h3>
            <p>{shoe.description}</p>
            <p>{shoe.price}원</p>
            <button>담기</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;