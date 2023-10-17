import React, { useState } from 'react';



import Register from '../components/Register';
import CrudForm from '../components/CrudForm';
const Admin = () => {
    const [toggleRegister, setToggleRegister ] = useState(false)
    const [toggleCrudForm, setToggleCrudForm ] = useState(false)



    const handleToogle = (toggle, setToggle) =>{
        toggle ? setToggle(false) : setToggle(true)
    }

    
    return (
        <div className='row '>
            <div className='col-3'>
            <ul className="list-group">
                    <li className="list-group-item"><a href="#" onClick={()=>handleToogle(toggleRegister,setToggleRegister)}>Registrar un usuario</a></li>
                    <li className="list-group-item"><a href='#' onClick={()=>handleToogle(toggleCrudForm,setToggleCrudForm)}>Modificar productos</a></li>
                    <li className="list-group-item"><a href="">Deudores</a></li>
            </ul>
            </div>
            <div className='col-6'>
                <h1 className='text-center'>Panel de administracion</h1>
                {toggleRegister ? <Register /> : console.log('')}
                {toggleCrudForm ? <CrudForm /> : console.log('')}
              
            </div>

        </div>
    );
}

export default Admin;
