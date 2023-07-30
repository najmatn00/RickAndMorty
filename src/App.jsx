import { useEffect, useState } from 'react'
import axios from 'axios';
import useFetchDate from './date';
import Card from './card';
import Search from './search';

function App() {

  let { respanse, isLoding } = useFetchDate("https://rickandmortyapi.com/api/character")
  let [filteredItem, setFilteredItem] = useState("")

  useEffect(()=>{
    if (!isLoding)
      setFilteredItem(respanse.results)
    
  },[isLoding])
 console.log(filteredItem);
  return (
    <div className='flex flex-wrap gap-2'>
      <Search respanse={respanse} setFilteredItemState={setFilteredItem} />
      {!isLoding && filteredItem ?
        filteredItem.map((char) => {
          return <Card {...char} />
        })
        :
        <h1>is lodaing</h1>
      }

    </div>)

}

export default App
