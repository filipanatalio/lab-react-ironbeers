import './HomePages.css';
import React from 'react'
import { Link } from 'react-router-dom';
import beerImg from '../../assets/beers.png';
import randomBeer from '../../assets/random-beer.png'
import newbeer from '../../assets/new-beer.png'


function HomePages() {
  return (
    <div>
        <Link className='links' to="/all-beers">
        <img src={beerImg} alt="img beer" />
        <h2>All Beers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti incidunt suscipit illo quasi dolorem minima illum dolores labore corrupti nemo excepturi, est sequi consequatur aperiam odio modi dolorum eveniet.</p>
        </Link>

        <Link className='links' to="/random-beer">
        <img src={randomBeer} alt="img random beer" />
        <h2>Random Beer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae tenetur repellat iure, voluptatem quia nostrum ratione fugit numquam. Laboriosam suscipit harum, aut recusandae voluptates veniam cum facere at natus.</p>
        </Link>

        <Link className='links' to="/new-beer">
        <img src={newbeer} alt=" new beer img" />
        <h2>New Beer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim cupiditate non sed dolor accusamus suscipit a recusandae excepturi eaque dicta at saepe asperiores earum, nam, autem reprehenderit in facere?</p>
        </Link>



    </div>
  )
}

export default HomePages