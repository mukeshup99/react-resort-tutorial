import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero hero='defaultHero'>
          <Banner
            title='luxurious rooms'
            subtitles='deluxe rooms starting at 299'
          >
            <Link to='/rooms' className='btn-primary'>
              our rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
      </>
    );
  }
}
