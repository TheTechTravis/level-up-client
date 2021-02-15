import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"
import { EventForm } from "./event/EventForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            {/* GameList Route */}
            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
            </GameProvider>

            {/* EventList Route */}
            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
            </EventProvider>

            {/* GameForm Route */}
            <GameProvider>
                <Route exact path="/games/new">
                    <GameForm />
                </Route>
            </GameProvider>

            {/* EventForm Route */}
            <EventProvider>
                <GameProvider>
                    <Route exact path="/events/new">
                        <EventForm />
                    </Route>
                </GameProvider>
            </EventProvider>
        </main>
    </>
}