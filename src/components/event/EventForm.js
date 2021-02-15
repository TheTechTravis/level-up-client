import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../game/GameProvider.js"
import { EventContext } from "./EventProvider.js"


export const EventForm = () => {

    const history = useHistory()

    const { games, getGames } = useContext(GameContext)
    const { events, getEvents, createEvent } = useContext(EventContext)

    const [currentEvent, setCurrentEvent] = useState({
        game: 0,
        location: "",
        date: "",
        time: "",
        scheduler: 0
    })

    useEffect(() => {
        // Get all existing games from API
        getGames()
    }, [])

    const changeEventGameState = (event) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState.game = event.target.value
        setCurrentEvent(newEventState)
    }

    const changeEventLocationState = (event) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState.location = event.target.value
        setCurrentEvent(newEventState)
    }

    const changeEventDateState = (event) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState.date = event.target.value
        setCurrentEvent(newEventState)
    }

    const changeEventTimeState = (event) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState.time = event.target.value
        setCurrentEvent(newEventState)
    }

    const changeEventSchedulerState = (event) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState.scheduler = event.target.value
        setCurrentEvent(newEventState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={changeEventGameState}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option key={`game--${game.id}`} value={game.id}> {game.title} </option>
                            ))
                        }
                    </select>

                    <label htmlFor="location"> Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        value={currentEvent.location}
                        onChange={changeEventLocationState}
                    />

                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventDateState}
                    />

                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventTimeState}
                    />
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event
                    const newEvent = {
                        gameId: currentEvent.game,
                        location: currentEvent.location,
                        date: currentEvent.date,
                        time: currentEvent.time
                    }

                    // Once event is created, redirect user to event list
                    createEvent(newEvent)
                        .then(() => history.push("/events"))
                }}
                className="btn btn-2 btn-sep icon-create"> Create </button>
        </form>
    )
}