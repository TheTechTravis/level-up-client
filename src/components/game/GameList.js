import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    let history = useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>

            <article className="games">
                {
                    games.map(game => {
                        return <section key={`game--${game.id}`} className="game">
                            <div className="game__title">Title: {game.title}</div>
                            <div className="game__type">Game Type: {game.game_type.label}</div>
                            <div className="game__players">Players required: {game.number_of_players}</div>
                            <div className="game__description">Description:  {game.description}</div>
                            <br />
                        </section>
                    })
                }
            </article>
        </>
    )
}