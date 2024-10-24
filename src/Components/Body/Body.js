import React,{useContext, useEffect,useState} from 'react'
import { Card } from './Card'//Names Component
import Shimmer from '../Shimmer';
import userData from '../useContext/userData';

export const Body = () => {
  const [restaurants,setResturantsData] =useState([]);
  const [restaurantsList,setRestaurantListData] = useState([]);
  const [searchText,setSearchTextData] = useState('');
  const user=useContext(userData)  
  useEffect(() => {
    fetchDataFROMsWIGGYaPI()
  }, [])

  const fetchDataFROMsWIGGYaPI=async () => {
    let url='https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    const data=await fetch(url)
    const response=await data.json();
    setResturantsData(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantListData(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

const handleSearch=(e) => {
  const filteredData=restaurantsList.filter((item)=> item?.info.name?.toLowerCase().includes(e.target.value.toLowerCase()))
 setResturantsData(filteredData)
  setSearchTextData(e.target.value)
}

const handleUsername=(e) => {
  user.setauthstatus({...user.authstatus,name:e.target.value})


}
const handleUseremail=(e) => {
  user.setauthstatus({...user.authstatus,email:e.target.value})


}
console.log(user)
  return (
    <>
    <div className=' flex justify-center' >
    <input type='text' className='m-10 w-1/2 h-10 rounded-2xl text-center border-2 border-gray-300 ' placeholder='Search Restaurant' value={searchText} onChange={(e)=>handleSearch(e)} />
    {/* <button className='inputBtn' title='Search'>Search</button> */}
    {/* <input type='text' className='m-10 w-1/2 h-10 rounded-2xl text-center border-2 border-gray-300 ' placeholder='User name' value={user.authstatus.name} onChange={(e)=>handleUsername(e)} />
    <input type='text' className='m-10 w-1/2 h-10 rounded-2xl text-center border-2 border-gray-300 ' placeholder='User email' value={user.authstatus.email} onChange={(e)=>handleUseremail(e)} /> */}

    </div>
    {
      restaurants?.length!=0?
    <>
    
    <div className='flex flex-wrap'>
      {restaurants.map((restaurant)=>(
        <Card  restaurant={restaurant?.info} key={restaurant?.info?.id}/>
      ))}
    </div>

    </>:<Shimmer/>
    }
    </>
  )
}
