import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="image-and-text-section">
      <Image
        src="/images/i2.jpg"
        alt="A person listening to music with headphones"
        className="left-image"
        width={500}
        height={680}
        priority
      />
      <div className="right-content">
        <div className="profile-display">
          <span className="user-name">Malar</span>
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture of Malar"
            className="profile-pic"
            width={40}
            height={40}
          />
        </div>
        <h2><i>Where words leave off</i></h2>
        <h3><i>MUSIC begins....</i></h3>
      </div>
      <Link href="/page" passHref legacyBehavior>
        <button className="corner-button">Explore</button>
      </Link>
    </div>
  );
}