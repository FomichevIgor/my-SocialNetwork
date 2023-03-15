import React from 'react';
import  axios from 'axios';


let Users = (props) => {
  
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(respons=>{
        props.setUsers( respons.data.items  )
      
     
  
      });
    
    
  }
 

  return (<div>
    {
      props.users.map(item => <div key={item.id}>
        <div>
          <img height={70} src={item.photos.small!=null?item.photos.small:"https://avatars.mds.yandex.net/i?id=18c3830cb6cc6d125ad185628231b0da973a83f8-9181115-images-thumbs&n=13"} alt="foto" />
        </div>
        <div>
          {
            item.followed
              ? <button onClick={() => { props.unfollow(item.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(item.id) }}>Follow</button>
          }
        </div>
        <div>
          <div>
            <div>{item.fullName}</div>
            <div>{item.status}</div>
          </div>
          <div>
            <div>{"item.location.country"}</div>
            <div>{"item.location.city"}</div>
          </div>
        </div>
      </div>

      )

    }


  </div>

  )
}

export default Users;