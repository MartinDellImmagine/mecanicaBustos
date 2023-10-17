
import NavBar from '../components/NavBar';
import { useUserContext } from '../context/UserContext';

import BustosLogo from '../assets/imagenes/bustos2.jpeg'
import FrenosFoto from '../assets/imagenes/frenos.jpeg'
import Footer from '../components/Footer';


const Home = () => {
    
    const { user } = useUserContext()
    
    return (
      <>
        <NavBar />

        <div className="home-background_container">
          <div className="home-content">
            <div className='home-title_container'>
                <img src={BustosLogo} alt="" />
                <h1 className='home-title'>MECANICA BUSTOS</h1>
            </div>
          </div>
        </div>

 

      
            <div className='home-section_nosotros contianer'>
                <h5  className='home-subtitle text-center my-5 '>ACERCA DE NOSOTROS</h5>
                <h1 className='text-center my-5'>Servicios principales</h1>
                <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <h3 className=''>Cambio de filtro y aceite en el momento</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, minima?</p>
                    </div>
                    <div className='col-4'>
                        <h3 className=''>Cambio de filtro y aceite en el momento</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, minima?</p>
                    </div>
                    <div className='col-4'>
                        <h3 className=''>Cambio de filtro y aceite en el momento</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, minima?</p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className='home-section_marcas'>
                <h5 className='home-subtitle text-center mb-5'>MARCAS TRABAJADAS</h5>
                <div className='d-flex justify-content-center mt-5'>
                        <h3 className='marca'>MARCA</h3>
                        <h3 className='marca'>MARCA</h3>
                        <h3 className='marca'>MARCA</h3>
                        <h3 className='marca'>MARCA</h3>
                        <h3 className='marca'>MARCA</h3>
                </div>
            </div>
            
            <hr />
            <div className='container mb-5'>
                <div className='row featurette'>
                    <div className='col-md-7'>
                        <h2 className='featurete-heading'>
                        ¿Sentis ruido al frenar?
                        </h2>
                        <p className='lead'>Saca tu turno para un chequeo en el momento.</p>
                    </div>
                    <div className='col-md-5'>
                        <button className='btn btn-link'>Cliquea aca para sacar tu turno</button>
                    </div>
                </div>
            </div>
            
            <main>{user && <h1>Bienvenido al sitio {user.email}</h1>}</main>

        <Footer />
      </>
    );
}

export default Home;