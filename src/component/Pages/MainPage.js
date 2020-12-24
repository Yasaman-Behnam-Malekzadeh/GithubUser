import React from 'react'
import MainPageItems from './MainPageItems'

const MainPage =(props)=> {
    return (
        <div>
            <div className="row ml-4 pl-5 mr-1">
                {props.items.map(i =>(
                    <MainPageItems //get a structure from MainPageItems
                    key={i.id}             
                    login = {i.login}
                    avatar_url={i.avatar_url}
                    html_url={i.html_url}
                    />
                ))}
            </div>
            
        </div>
      
    )
    
}

export default MainPage
