import React from 'react'

const Pagination=({itemsPerPage,totalItems,pageFunc}) =>{

    const pageNo=[]

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage);i++) {
        pageNo.push(i)
    }
    return (
        <div> 
            {/* build pagination */}
            <ul className="pagination d-flex justify-content-center m-2">
                {pageNo.map(number=>(
                    <li className="page-item" key={number}>
                        <a href="#" onClick={()=>pageFunc(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
