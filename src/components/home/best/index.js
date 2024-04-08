import React from 'react';
import Button from '../../button';
import "./style.scss";
import { bestData } from '../../../assets/data';
import Card from '../../card';
import BuyIcon from '../../svgs/buy';

const Best = () => {
    return (
        <section className='best'>
            <div className='best__header'>
                <h2 className='best__title'>The best of the best</h2>
                <Button variant='medium'>Sign up now</Button>
            </div>
            <div className='best__cards-block'>
              {
                    bestData.map((item)=>{
                        return <Card title={item.title} image={item.img} text={item.text} key={item.img} background='#0F172A'>
                            <Button variant='small-long' color='white'><BuyIcon/> <span>Buy Now</span></Button>
                        </Card>
                    })
                }
              </div>
        </section>
    );
};

export default Best;