import React from 'react'

const Home = () => {
  return (
    <section id='home'>
    <div className='container'>
        <div className='row align-items-center my-5 '>
            <div className=' left col-md-6'>
            <h1 className='large'>Hello , Im <span className='highlight'><br/> sai kumar</span></h1>
            <p className='para'>Intrested to develop new things <br/>passionate in software </p>
            <a href="/Resume.pdf" download="Resume.pdf" className="btn btn-primary mx-5">
          Download Resume
        </a>
            </div>
            <div className=' right col-md-6 '>
          <img src='/images/image.png' alt=''/>
            </div>

        </div>
      
    </div>
    </section>
  )
}

export default Home
