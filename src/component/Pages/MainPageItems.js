import React from 'react'
import { Link } from 'react-router-dom'


const MainPageItems = props =>  {
     

        //for distructuring
        const {avatar_url,login}=props
        return (
                <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 card ml-5 mr-3 shadow">
                    {/* every user has a card */}
                    <br/>

                    {/* card of image */}
                    <img className="card-img m-auto "
                    src={avatar_url}
                    style={{width:'100px',height:'100px'}}
                    alt="avatar_image"
                    />

                    {/* card of title */}
                    <div className="card-title text-center mt-2">
                        {login}
                    </div>

                    {/* more for redirect  */}
                    <Link className="btn btn-info ml-5 mr-5 mb-3 mt-0"
                    
                    to={`/user/${login}`}
                    >
                       See more
                    </Link>
                </div>

            
        )
    }


export default MainPageItems
