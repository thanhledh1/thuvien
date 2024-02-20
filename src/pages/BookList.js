import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookModel from '../models/BookModel';

function BookList(props) {
    // bookList
    const [bookList,setBookList] = useState([])
    const [loading,setLoading] = useState(true)
    // Goi API
    useEffect( () => {
        BookModel.all().then( function(data){
            // Log data trả về để kiểm tra dữ liệu
            setBookList(data.data)
            setLoading(false)
        }).catch( function(error){
            alert('500 error')
        })
    },[] );

    return (
        <div>
            <Link to={'/create'}> Add new </Link>
            { loading ? <p>Data is loading</p> : null }
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map( (book,key) => (
                            <tr key={key}>
                                <th>{ book.id }</th>
                                <th>{ book.name }</th>
                                <th>{ book.price }</th>
                                <th>
                                    <Link to={'edit/' + book.id}> Edit </Link>
                                    <Link to={'delete/' + book.id}> Delete </Link>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default BookList;
