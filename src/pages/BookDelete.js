import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookModel from '../models/BookModel';

function BookDelete(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    const handleDelete = () => {
        const ask = window.confirm("Are you sure ?")
        if( ask ){
            BookModel.destroy( id ).then( function(data){
                alert('Xoa thanh cong')
                // Chuyen huong
                navigate('/')
            }).catch( function(error){
                alert('Xoa that bai')
            })
        }
    }
    return (
        <div>
            <button onClick={ handleDelete }>OK</button>
            <Link to={'/'}>Tro lai</Link>
        </div>
    );
}

export default BookDelete;
