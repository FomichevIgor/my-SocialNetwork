import React, { Component, useEffect, useState } from 'react'
import News from './News'
import axios from 'axios'
import jsonp from 'simple-jsonp-promise';
import { toggleIsFetching,setNews } from '../../Redux/news-reducer';
import { connect } from 'react-redux';

/*export default*/ class NewsContainer extends React.Component {
 /*state = {
    persons: []
  }

  */ 
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=56e048f0bcb144328e87509e60ecead0`)
      .then(res => {
        this.props.toggleIsFetching(false)
        const persons = res.data.articles;
        this.props.setNews(persons)
        
        //this.setState({ persons });
      })
  }
/*
 <ul>
        { this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>

*/
  render() {
    return (
      <News {...this.props}/>
     
    )
  }
}
let mapStateToProps=(state)=>{

  return {
    isFetching:state.newsPage.isFetching,
    news:state.newsPage.news,
  
  }
}
export default connect(mapStateToProps,{toggleIsFetching,setNews}) (NewsContainer);



    /*
    async function Test () {
      const url = 'https://api.vk.com/method/newsfeed.get?source_ids=groups&count=10&access_token=vk1.a.w3k6SuF3mIbtiUByt5V1NM2fStudMg5TClHxgBvh89xDMTE3VOjrMpBke5bvBa3ehhpST01n24l_1Gg48ws5q4_rAVULVB0ziGaV2JiquLIzJI0ENAb3CKFQzNfcoqGeIa4cEp-Ax-ZHKOIt1WdIBFijMgfeXjAOGaNoR9yN74KTHYn_AfuWIz_OCML0YDOfxSoTC-KiMoD5rZ3n5XcLqg&v=5.131'
      const params = {param1: 1, param2: 2}
    
      const response =await  jsonp(url, {data: params});
      console.log( response.response.items);
     
    }
    Test();
*/

 

  /*
    return (
      <News  />
    )
  
}
export default NewsContainer;*/



