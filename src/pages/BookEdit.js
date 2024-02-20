import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import BookModel from '../models/BookModel';

const createSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    price: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function BookEdit(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    const [form, setForm] = useState({
        id:0,
        name: "",
        price: "",
        image:""
    })

    useEffect( () => {
        BookModel.find( id ).then( function(data){
            setForm(data.data);
        }).catch( function(error){

        })
    },[] )

    const handSubmit = (values) => {
        console.log(values);
        BookModel.update(id,values).then( function(data){
            alert('Cap nhanh thanh cong')
            // Chuyen huong
            navigate('/')
            
        }).catch( function(error){
            alert('Da co loi xay ra')
        })
    }
    return (
        <div>
            <Link to={'/'}> Back </Link>
            <h1> BookEdit </h1>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={createSchema}
                onSubmit={(values) => handSubmit(values)}

            >
                {({ errors, touched }) => (
                    <Form>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="name">Name</label></td>
                                    <td><Field name="name" />
                                        {errors.name && touched.name ? (
                                            <div style={ { color:'red' } }>{errors.name}</div>
                                        ) : null}</td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="price">Price</label></td>
                                    <td><Field name="price" />
                                        {errors.price && touched.price ? (
                                            <div style={ { color:'red' } }>{errors.price}</div>
                                        ) : null}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BookEdit;
