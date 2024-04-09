import React from 'react';
import Button from '../../button';
import "./style.scss";
import { bestData } from '../../../assets/data';
import Card from './card';

const Best = () => {
    return (
        <section className='best'>
            <div className='best__header'>
                <h2 className='best__title heading-2'>The best of the best</h2>
                <Button variant='medium'>Sign up now</Button>
            </div>
            <div className='best__cards-block'>
              {
                    bestData.map((item)=>{
                        return <Card 
                        title={item.title}
                         image={item.img}
                          text={item.text}
                           key={item.img}
                        />
                    })
                }
              </div>
              <div className='pink-square pink-square_position position'></div>
              <div className='blue-square blue-square_position position'></div>
              <div className='brown-square brown-square_position position'></div>
              <div className='purple-square purple-square_position position'></div>
              <div className='green-square green-square_position position'></div>
        </section>
    );
};

export default Best;