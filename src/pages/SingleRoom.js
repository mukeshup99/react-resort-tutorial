import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import defaultBCG from '../images/room-1.jpeg';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
  state = {
    slug: '',
    defaultBCG: defaultBCG,
  };
  componentDidMount() {
    let url = window.location.href;
    let currentURL = url.slice(28);
    this.setState({
      slug: currentURL,
    });
  }

  static contextType = RoomContext;
  render() {
    const { getRoom, rooms } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className='error'>
          <h3>no such room could be found</h3>
          <Link to='/rooms' className='btn-primary'>
            back to rooms page
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      images,
      capacity,
      size,
      price,
      pets,
      breakfast,
      extras,
    } = room;
    const [mainImg, ...remImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBCG}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {remImg.map((item) => (
              <img src={item} alt={name} />
            ))}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                maxsize :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? `pets allowed` : `no pets allowed`}</h6>
              <h6>{breakfast && `breakfast is included`}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export { SingleRoom };
