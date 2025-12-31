import { Session } from 'inspector/promises'
import React from 'react'
import { ExploreBtn } from './components/ExploreBtn'
import EventCard from './components/EventCard'
import { eventsData } from '@/lib/events'



const page = () => {
  return (
  <section>
      <h1 className='text-center'>Welcome to DevEvents!<br/>Events you can't Miss</h1>
      <p className='text-center mt-5'>Hackathonas,Meetups and Conferences,All in one place</p>
      <ExploreBtn/>

      <div className='mt-20 space-y-7'>
          <h3>Featured Events</h3>

          <ul className='events'>
            {eventsData.map((event)=>(
              <li key={event.title}>
                <EventCard {...event}/>
              </li>
            ))}
          </ul>
      </div>
  </section>
  )
}

export default page