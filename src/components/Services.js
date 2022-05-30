import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, laborum.',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, laborum.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttleVan',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, laborum.',
      },
      {
        icon: <FaBeer />,
        title: 'strong as Beer',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, laborum.',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
