"use client";
import Image from 'next/image';
import './page.css'; 
import Link from 'next/link';

export default function DynamicDarkWebsite() {
  const squareData = [
    { id: 1, text: 'Back to December', url: 'https://www.youtube.com/watch?v=QUwxKWT6m7U', image: '/images/sq1.jpg' },
    { id: 2, text: 'What do you mean', url: 'https://www.youtube.com/watch?v=DK_0jXPuIr0', image: '/images/sq2.jpg' },
    { id: 3, text: 'Hosanna', url: 'https://www.youtube.com/watch?v=YFYiTS46x-8', image: '/images/sq3.jpg' },
    { id: 4, text: 'Count on me', url: 'https://www.youtube.com/watch?v=6k8cpUkKK4c', image: '/images/sq4.jpg' },
    { id: 5, text: 'Perfect', url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g', image: '/images/sq5.jpg' },
    { id: 6, text: 'Honey, I\'m Good', url: 'https://www.youtube.com/watch?v=w-99JEIwZq0', image: '/images/sq6.jpg' },
    { id: 7, text: 'Tera Yaar Hoon Main', url: 'https://www.youtube.com/watch?v=EatzcaVJRMs', image: '/images/sq7.jpg' },
    { id: 8, text: 'My Heart Will Go On', url: 'https://www.youtube.com/watch?v=9bFHsd3o1w0', image: '/images/sq8.jpg' },
    { id: 9, text: 'Heart Wants What It Wants', url: 'https://www.youtube.com/watch?v=ij_0p_6qTss', image: '/images/sq9.jpg' },
    { id: 10, text: 'Hips Don\'t Lie', url: 'https://www.youtube.com/watch?v=DUT5rEU6pqM', image: '/images/sq10.jpg' },
  ];

  return (
    <>
      <Image
        src="/images/bg1.jpg"
        alt="Description of your image"
        className="main-image"
        width={1920} 
        height={1080} 
        priority
      />
      <Link href="/" className="back-button">
        Back
      </Link>
      <div className="squares-section">
        <div className="squares-grid-container">
          {squareData.map((square) => (
            <div
              key={square.id}
              className={`square-item square-${square.id}`}
              data-hover-text={square.text}
              onClick={() => window.open(square.url, '_blank')}
            />
          ))}
        </div>
      </div>
      <div className="bottom-right-text">Malar © 2025</div>
      <div className="vertical-text">
        <b>TOP ARTISTS 2025</b>
      </div>
    </>
  );
}
