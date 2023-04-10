import React, { Component, useEffect, useState } from 'react'
import Music from './Music'
import axios from 'axios'

import { toggleIsFetchingMusic, setMusic } from '../../Redux/music-reducer';
import { connect } from 'react-redux';

class MusicContainer extends React.Component {

  componentDidMount() {

   
    /*
    
     const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ce51a69061msh7af2cd1c6a9e195p1daaedjsnf41dba197e4e',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
      }
    };
    
    fetch('https://theaudiodb.p.rapidapi.com/track-top10.php?s=taylor%20swift', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    */
   
    /*
   this.props.toggleIsFetchingMusic(true)
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=56e048f0bcb144328e87509e60ecead0`)
      .then(res => {
        this.props.toggleIsFetchingMusic(false)
        const persons = res.data.articles;
        this.props.setMusic(persons)
        
        
      })
  
  */

  }


  render() {

    return (<Music {...this.props} />



    )
  }
}
let mapStateToProps = (state) => {

  return {
    isFetching: state.musicPage.isFetching,
    music: state.musicPage.music,

  }
}
export default connect(mapStateToProps, { toggleIsFetchingMusic, setMusic })(MusicContainer);



/*
async function Test () {
  const url = 'https://api.vk.com/method/newsfeed.get?source_ids=groups&count=10&access_token=vk1.a.w3k6SuF3mIbtiUByt5V1NM2fStudMg5TClHxgBvh89xDMTE3VOjrMpBke5bvBa3ehhpST01n24l_1Gg48ws5q4_rAVULVB0ziGaV2JiquLIzJI0ENAb3CKFQzNfcoqGeIa4cEp-Ax-ZHKOIt1WdIBFijMgfeXjAOGaNoR9yN74KTHYn_AfuWIz_OCML0YDOfxSoTC-KiMoD5rZ3n5XcLqg&v=5.131'
  const params = {param1: 1, param2: 2}
 
  const response =await  jsonp(url, {data: params});
  console.log( response.response.items);
 
}
Test();
*/






