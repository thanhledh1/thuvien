import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

function BookCreate(props) {
    let navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        price: ""
    })
    const handSubmit = (values) => {
        console.log(values);
        BookModel.store(values).then( function(data){
            alert('Them thanh cong')
            // Chuyen huong
            navigate('/')
            
        }).catch( function(error){
            alert('Da co loi xay ra')
        })
    }
    return (
        <div>
            <Link to={'/'}> Back </Link>
            <h1> BookCreate </h1>
            <Formik
                initialValues={form}
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

export default BookCreate;