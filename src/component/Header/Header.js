import React from 'react'

const Header = () => {
    return (
        <div className="navbar bg-dark">
            <div className="text-light container-fluid h5 d-flex justify-content-between mt-2">
                <div >
                    <i className="fab fa-github"/>
                    <span className="ml-2">Github Users</span> 
                </div>

                <div className="d-flex ">
                    <a href="https://github.com/" className="text-light small text-decoration-none">Github Link</a>
                </div>
            </div>
        </div>
    )
}

export default Header
