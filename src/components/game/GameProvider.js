import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [games, setGames] = useState([])
    const [gameTypes, setTypes] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const createGame = (newGame) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(newGame)
        })
            .then(getGames)
    }

    const getGameTypes = () => {
        return fetch("http://localhost:8000/gametypes", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setTypes)
    }

    return (
        <GameContext.Provider value={{ games, gameTypes, getGames, createGame, getGameTypes }} >
            { props.children}
        </GameContext.Provider>
    )
}