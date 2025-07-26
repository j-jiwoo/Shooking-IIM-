import { render, screen } from '@testing-library/react';
import App from './App';

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

test('제목 렌더링 완료', ()=>{
  render(<App/>);
  const titleEl = screen.getByText(/신발 상품 목록/i);
  expect(titleEl).toBeInTheDocument();
});

test('상품 개수 정상적으로 표시 완료', ()=>{
  render(<App shoes={shoes}/>);
  const countEl = screen.getByText(/현재 6개의 상품이 있습니다./i);
  expect(countEl).toBeInTheDocument();
});

test('상품 개수만큼 상품 카드 표시 완료', ()=>{
  render(<App/>);
  const cardEl = screen.getAllByRole('img');
  expect(cardEl.length).toBe(shoes.length);
});