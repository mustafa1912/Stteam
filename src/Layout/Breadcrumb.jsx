import React from 'react'

function Breadcrumb() {
    return (
        <React.Fragment  >
            <div className='breadcrumb position-relative pt-5 pb-5'>
                <div className='container w-100'>
                    <div className='row'>
                        <div className='col-2 d-flex justify-content-around align-items-center'>
                            <div className='dote'></div>
                            <div className='dote'></div>
                            <div className='dote'></div>
                            <div className='dote'></div>
                            <div className='dote'></div>
                            <div className='dote'></div>
                            <div className='dote'></div>
                            <div className='dote'></div>
                        </div>
                        <div className='col-10'>
                            <h1 className='text-light'>
                                our<strong>  contacts </strong>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='position-absolute'>
                    <div className='dote'></div>
                    <div className='dote'></div>
                    <div className='dote'></div>
                    <div className='dote'></div>
                    <div className='dote'></div>
                    <div className='dote'></div>
                    <div className='dote'></div>
                    <div className='dote'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Breadcrumb