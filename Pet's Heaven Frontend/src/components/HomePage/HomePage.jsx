import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      ></link>

      <section>
        <Carousel style={{ maxHeight: "600px", overflow: "hidden" }}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/C2.jpg"
              alt="First slide"
            // style={{ height: '50%', width: '50%', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="/C3.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              // style={{ height: '50%', width: '50%', objectFit: 'cover' }}
              className="d-block w-100"
              src="/C1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <All>
        <section className="vendor" id="vendor">
          <div className="heading">
            <h1>Our Newest Friends</h1>
            <img src="header-img.png" alt="" />
          </div>
          <div className="box-container">
            <div className="box">
              <img
                src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="info">
                <h3>Meet Our Loyal Companions</h3>
                <p>
                  Browse our selection of dogs and find your perfect companion.
                  From playful puppies to wise old souls. Adopt your new friend
                  today!
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="info">
                <h3>Adopt a Feline Friend</h3>
                <p>
                  Cats make wonderful companions and are known for their
                  independent nature and loving personalities. Browse our
                  selection of cats and find the perfect feline friend to share
                  your home with.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/463732/pexels-photo-463732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="info">
                <h3>Adopt a Gentle Giant</h3>
                <p>
                  Cows are intelligent, social animals that make wonderful
                  companions. Whether you're looking for a pet cow or a
                  companion for another farm animal, we have a variety of cows
                  available for adoption.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="info">
                <h3>Hop into Happiness with a Rabbit</h3>
                <p>
                  Rabbits are playful that make great pets. We have a variety of
                  breeds available. Adopt a rabbit today and experience the joy
                  of having a furry friend by your side.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://a-z-animals.com/media/2023/03/iStock-1381052918.jpg"
                alt=""
              />
              <div className="info">
                <h3>Find Your Perfect Companion</h3>
                <p>
                  Looking for a unique and loving animal companion? Browse our
                  selection of mixed animals, from lovable mutts to adorable
                  crossbreeds.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://i0.wp.com/roomfruit.com/wp-content/uploads/2020/07/vastu-for-pets.jpg?fit=1200%2C800&ssl=1"
                alt=""
              />
              <div className="info">
                <h3>Meet Our Featured Animal</h3>
                <p>
                  We feature a special animal in need of a loving home. From
                  senior pets to special needs animals, our featured animals
                  have unique stories and personalities that make them extra
                  special.
                </p>
              </div>
            </div>
          </div>
        </section>
      </All>
    </>
  );
}

export default HomePage;
const All = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap");

  section {
    padding: 3rem 9%;
  }
  .carousel-headline {
    font-family: "Montserrat", sans-serif;
    font-size: 36px;
    font-weight: 500;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .vendor .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .vendor .box-container .box {
    flex: 1 1 30rem;
    margin: 1rem;
    overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
    height: 20rem;
    cursor: pointer;
  }

  .vendor .box-container .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .vendor .box-container .box .info {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    transform: scale(1.3);
    opacity: 0;
  }

  .vendor .box-container .box:hover .info {
    transform: scale(1);
    opacity: 1;
  }

  .vendor .box-container .box:hover img {
    transform: scale(1.3);
  }

  .vendor .box-container .box .info h3 {
    font-size: 3rem;
    color: var(--black);
  }

  .vendor .box-container .box .info p {
    font-size: 1.7rem;
    color: #333;
    padding: 1rem;
  }

  .box-container .box .img {
    height: 30rem;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2rem solid #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
  }
  .box-container .box .info {
    padding: 2rem 0;
  }
  .box-container .box .info h3 {
    font-size: 2.5rem;
    color: #fff;
  }
  .box-container .box .info p {
    font-size: 1.7rem;
    color: #aaa;
    padding: 1rem 0;
    font-style: italic;
  }

  .box-container .box .info p i {
    color: var(--pink);
    padding: 0 0.5rem;
  }
  .heading {
    padding-bottom: 2rem;
    text-align: center;
    color: #31656f;
  }
  .heading h1 {
    font-size: 4rem;
    color: #1b9eb9;
    padding-bottom: 1rem;
    text-transform: uppercase;
  }
`;
