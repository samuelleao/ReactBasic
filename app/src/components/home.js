import React from 'react'

const Home = props => {
    document.title = 'Exactly'
    return (
        <div className='indexStart'>
            <div className='start'>
                <img src='/images/img1.png' title='' alt='' className='animate__animated animate__fadeInLeft' />
                <div>
                    <h6 className="title">Exactly Now</h6>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                    <button className='button_primary'>Start Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home