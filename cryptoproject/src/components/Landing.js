import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
import Loading from './Loading';
import Coin from './Coin';
import Styles from './Landing.module.css';

const Landing = () => {
    const [coins,setCoins] = useState ([]);
    const [search,setSearch] = useState ([])

    useEffect (() => {
        const fetchApi = async () =>{
            const data = await getCoin();
            console.log (data)
            setCoins(data)
        }
            fetchApi();
        },[])

    const searchHandler = event => {
        setSearch (event.target.value)
    }    

    const searchedCoins = coins.filter (coin => coin.name.toLowerCase().includes(search.toString().toLowerCase()))
    
    return (
        <div className = {Styles.mainContainer} >
        <input  className = {Styles.input} type = "text" placeholder="search" value = {search} onChange = {searchHandler} />
        {coins.length?
        <div className = {Styles.coinContainer}>
            {searchedCoins.map(coin => <Coin key= {coin.id}
            name = {coin.name} 
            image = {coin.image}
            symbol = {coin.symbol}
            price = {coin.current_price}
            priceChange = {coin.price_change_24h}
            marketCap = {coin.market_cap}
            />)} 
        </div>:
            <Loading />}
        </div>
    );
};

export default Landing;