
import NavBar from '../components/NavBar';
import 'animate.css';
import { useUserContext } from '../context/UserContext';

import BustosLogo from '../assets/imagenes/bustos2.jpeg'
import cuidamosTiempo from '../assets/imagenes/cuidamostutiempo .svg'
import Footer from '../components/Footer';


const Home = () => {
    
    const { user } = useUserContext()
    
    return (
      <>
        <NavBar />
        <div className="home-background_container">
           
          <div className="home-content">
            <div className='animate__animated animate__fadeInLeft home-title_container'>
                <img src={BustosLogo} alt="MecanicaBustoslogo" />
                <h1 className='home-title'>MECANICA BUSTOS</h1>
            </div>
          </div>

          <img src={cuidamosTiempo} alt="" />
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
                <ul className="list-inline text-center">
                    <li className="list-inline-item display-4">MARCA</li>
                    <li className="list-inline-item display-4">MARCA</li>
                    <li className="list-inline-item display-4">MARCA</li>
                    <li className="list-inline-item display-4">MARCA</li>
                  
                </ul>
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
                        <button className='btn btn-outline-danger'>Cliquea aca para sacar tu turno</button>
                    </div>
                </div>
            </div>
            
            

        <Footer />
      </>
    );
}

export default Home;
