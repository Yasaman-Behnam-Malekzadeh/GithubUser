import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const User =({user,match,getUser})=> {

    useEffect(() => {
        getUser(match.params.login)
        //eslint-disable-next-line
    }, [])
  
    //for get data from ...props
    const {name,
            login,
            avatar_url,
            location,
            blog,
            html_url,
            company,
            followers,
            following,
            public_repos,
        }=user


        return (       //page information of details of user 
            <div className="container">
                <div className=" mt-4 p-3" style={{width:'100%'}}>
                    <Link to="/" className="btn btn-success mr-2 ">
                        <i className="fa fa-arrow-left"></i> Back to home
                    </Link> 
                </div>

                <div className="border shadow p-3 mt-2 d-flex">
                    <div>
                        <img 
                            src={avatar_url} 
                            style={{width:'18rem', height:'18rem'}}
                            className="rounded-circle ml-5"
                            alt="user_avatar"
                            />
                    </div>
                    <div>
                        <div className="d-flex ml-5 mt-3">
                            <p className="font-weight-bold mr-2">Name:</p>{name}
                        </div>
                        <div className="d-flex ml-5 ">
                            <p className="font-weight-bold mr-2">Location:</p>{location}
                        </div>
                        <div className="d-flex ml-5">
                            <p className="font-weight-bold mr-2">Blog:</p>{blog}
                        </div>
                        <div className="d-flex ml-5">
                            <p className="font-weight-bold mr-2">Company:</p>{company}
                        </div>
                        <a className="btn btn-dark ml-5" href={html_url}>
                            <i className="fab fa-github"></i> github {login}
                        </a>
                        <div className="ml-5 mt-3">
                            <span className="badge badge-info">followers : {followers}</span>
                            <span className="badge badge-warning ml-2">following : {following}</span>
                            <span className="badge badge-secondary ml-2">Public repository : {public_repos}</span>

                        </div>
                      
                    </div>
                    
                    
                </div>
                
                    

                
            </div>
        )
    
}

export default User
