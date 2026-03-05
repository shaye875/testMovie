import React, { use } from 'react'
import { useMovStore } from '../store/zustandStoere'
import usedebouce from '../hooks/usedebouce'
import { useNavigate } from 'react-router'

function Homemovies() {
    const { movies } = useMovStore()
    const { value, delay } = usedebouce("")
    const navigate = useNavigate()
    return (
        <div>
            <div id='sch'>
                <input type="text" id='int' placeholder='Search movie by title...' onChange={((e) => {
                    delay(e)
                })} />
            </div>
            <div id='mvs'>
                {(value == undefined || value == "") && movies.map((item) => {
                    return (
                        <div className='mov'>
                            <img className='img' src={item.Images[0]} alt="" />
                            <h3>{item.Title}</h3>
                            <div id='exm'>
                                <div className='flx'>
                                    <p id='fon'>Year</p>
                                    <p id='fon'>{item.Year}</p>
                                </div>
                                <div className='flx'>
                                    <p id='fon'>Runtime</p>
                                    <p id='fon'>{item.Runtime}</p>
                                </div>
                                <div className='flx'>
                                    <p id='fon'>Ganre</p>
                                    <p id='fon'>{item.Genre}</p>
                                </div>
                                <div className='flx'>
                                    <p id='fon'>Language</p>
                                    <p id='fon'>{item.Language}</p>
                                </div>
                                <button id='sel' onClick={()=>{
                                      navigate(`/movie/${item.imdbID}`,{state:item})
                                }}>Select Seats</button>
                            </div>
                        </div>
                    )

                })}
                {value != undefined && value != "" && movies.filter((item2) => (item2.Title.toLowerCase().includes( value.toLowerCase()) || item2.Genre.toLowerCase().includes(value.toLowerCase())))
                    .map((item) => {
                        return (
                            <div className='mov'>
                                <img className='img' src={item.Images[0]} alt="" />
                                <h3>{item.Title}</h3>
                                <div id='exm'>
                                    <div className='flx'>
                                        <p id='fon'>Year</p>
                                        <p id='fon'>{item.Year}</p>
                                    </div>
                                    <div className='flx'>
                                        <p id='fon'>Runtime</p>
                                        <p id='fon'>{item.Runtime}</p>
                                    </div>
                                    <div className='flx'>
                                        <p id='fon'>Ganre</p>
                                        <p id='fon'>{item.Genre}</p>
                                    </div>
                                    <div className='flx'>
                                        <p id='fon'>Language</p>
                                        <p id='fon'>{item.Language}</p>
                                    </div>
                                    <button id='sel' onClick={()=>{
                                        navigate(`/movie/${item.itemId}`,{state:item})
                                    }}>Select Seats</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Homemovies
