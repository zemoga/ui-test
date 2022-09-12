import { useEffect, useState } from 'react'
import RulingItem from './RulingItem/RulingItem';
import { RulingDataTypes } from './PreviousRulings.types';


const PreviousRulings = () => {
  const [previousRulingsList, setPreviousRulingsList] = useState<RulingDataTypes[]>([])

  const fetchData = async () => {
    const data = await fetch('data.json')
    const response = await data.json()
    setPreviousRulingsList(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {previousRulingsList.length !== 0 && (
        <div>
          {previousRulingsList.map((ruling, index) => (
            <RulingItem key={index} data={ruling} />
          ))}
        </div>
      )}
    </>
  )
}

export default PreviousRulings
