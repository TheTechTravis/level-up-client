import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__game"> Game: {event.game.title} </div>
                        <div> Location: {event.location}</div>
                        <div>
                            {'When: '}
                            {
                                new Date(event.date).toLocaleDateString("en-US",
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })
                            }
                            {' @'} {event.time}
                        </div>
                        <div> Scheduler: {event.scheduler.user.first_name} {event.scheduler.user.last_name}</div>
                        <br />
                    </section>
                })
            }
        </article >
    )
}