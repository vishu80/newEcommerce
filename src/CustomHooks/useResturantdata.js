import React,{useState,useEffect} from "react";

const useResturantdata = (restId)=>{

    const [menuCardDetails, setMenuCardDetails] = useState([]);
    const [itemName, setItemName] = useState("");

    useEffect(()=>{
        getMenuDetails();

    },[])

    async function getMenuDetails() {
      // const api_url =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
      const api_url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`;
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data.data,'inide custom hooks')
        setItemName(data?.data.cards?.[0]?.card?.card.text);
        setMenuCardDetails(
          data?.data.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
            .card.itemCards
        );
      }

return { name:itemName,menuCardDetails:menuCardDetails}

}
export default useResturantdata;