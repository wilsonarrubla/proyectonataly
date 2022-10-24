import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_producto">Ultimos productos</h1>

        <section id="productos" className='container-mt-5'>

            <div className='row'>
                {/* producto 1 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src = './images/abii.jpg' alt='Cuadro abii'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3001'>Cuadro de Abigail arrubla, Tecnica Oleo sobre lienzo</a></h5>
                            <div className='rating mt-auto '>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'> $500.000</p><a href='http://localhost:3001'id='view_btn' className='btn btn-block'>
                                ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin producto 1 */}

                {/* producto 2 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src = './images/edenoi.jpg' alt='Cuadro edenoi'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3001'>Cuadro de Edenoi Maxico, Tecnica Oleo sobre lienzo</a></h5>
                            <div className='rating mt-auto '>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 2 reviews</span>
                            </div>
                            <p className='card-text'> $1.500.000</p><a href='http://localhost:3001'id='view_btn' className='btn btn-block'>
                                ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin producto 2 */}

                {/* producto 3 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src = './images/mama.jpg' alt='Cuadro mama'></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id='titulo_producto'><a href='http://localhost:3001'>Regala Arte, Tecnica Oleo sobre lienzo</a></h5>
                                            <div className='rating mt-auto '>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner'></div>
                                                </div>
                                                <span id='No_de_opiniones'> 12 reviews</span>
                                            </div>
                                            <p className='card-text'> $500.000</p><a href='http://localhost:3001'id='view_btn' className='btn btn-block'>
                                                ver detalles
                                            </a>
                                        </div>
                                    </div>
                                </div>
                {/*Fin  producto 3 */}

                  {/* producto 4 */}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src = './images/patilla.jpg' alt='Cuadro patilla'></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id='titulo_producto'><a href='http://localhost:3001'>Patilla, Tecnica Oleo sobre lienzo</a></h5>
                                            <div className='rating mt-auto '>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner'></div>
                                                </div>
                                                <span id='No_de_opiniones'> 15 reviews</span>
                                            </div>
                                            <p className='card-text'> $900.000</p><a href='http://localhost:3001'id='view_btn' className='btn btn-block'>
                                                ver detalles
                                            </a>
                                        </div>
                                    </div>
                                </div>
                {/*Fin  producto 4 */}
            </div>
         </section>


        
    </Fragment>
  )
}

export default Home