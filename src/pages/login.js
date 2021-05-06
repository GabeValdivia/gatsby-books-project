import React, { useEffect, useState } from "react";
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Seo from "../components/seo"

const SecondPage = () => {

    const [formValues, setFormValues] = useState({email: '', password: ''});
    
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleInputChange(e) {
        e.persist();
        setFormValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }
    
    return(
        <Layout>
            <form onSubmit={handleSubmit}>
                <input value={formValues.email } name="email" onChange={handleInputChange} placeholder="email" type="email" />
                <input value={ formValues.password} name="password" onChange={handleInputChange} placeholder="email" type="password" />
                <button type="submit">
                    Login
                </button>
            </form>
        </Layout>
    );
}

export default SecondPage
