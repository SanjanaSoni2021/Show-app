import React from 'react'
import "../Styles/contact.css";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Contact() {
    const initialData = {
        name:"",
        email:"",
        message:"",
    }
    const validate = Yup.object({
        name: Yup.string().required("required!"),
        email: Yup.string()
            .email('Invalid email format!')
            .required('required!'),
        message: Yup.string().required("required!"),

    })
    const submit = (values,{resetForm})=>{
        console.log('form data', values)
        localStorage.setItem("Name",values.name)
        localStorage.setItem("email",values.email)
        localStorage.setItem("message",values.message)
    resetForm({values:''})

    }
    return (
        <section className='product pb-5' style={{paddingTop:"40px"}}>
        <div class="contentbx m-auto">

            <div class="formbx card shadow border-0 p-auto my-5">
                <h4 className='pt-4 text-center' style={{color:"#ff4584"}}>Contact US</h4>
                <Formik  initialValues={initialData}
                validationSchema={validate}
                onSubmit={submit} >
                    <Form className='card-body'>
                    <div class="inputbx">
                        <span>Username</span>
                        <Field type="text" id="usr"  name="name"/>
                        <ErrorMessage name='name'/>
                    </div>
                    
                    <div class="inputbx">
                        <span>Email ID</span>
                        <Field type="text" id="eml" name="email" />
                        <ErrorMessage name='email' className='text-danger'/>
                    </div>
                    <div class="inputbx">
                        <span>Message</span>
                        <Field type="text" id="msg" name="message" />
                        <ErrorMessage name='message' className='text-danger'/>
                    </div>
                    <div class="inputbx">
                        <Field type="submit" value="Submit" name=""/>
                    </div>
                </Form>
                </Formik>
            </div>
        </div>
    </section>
    )
}

export default Contact