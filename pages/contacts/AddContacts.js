import { useState } from "react";
import { Form, Button , Card } from 'react-bootstrap';
import axios from "axios";
import Link from "next/link";


function AddUsers() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to your backend endpoint for saving the data to the database
        axios.post('http://localhost:5000/users', formData)
            .then((response) => {
                console.log(response.data); // Handle success or display a success message
                setFormSubmitted(true);
            })
            .catch((error) => {
                console.error(error); // Handle error or display an error message
            });

        // Send an email to the admin using your preferred email sending method/library
        // Example: axios.post('/api/send-email', formData)
    };


    if (formSubmitted) {
        return (
            <div className="container success_message d-flex flex-column align-items-center justify-center">
                <h3>Contact Added Successfully!</h3>
                
              
                <Link href="/" className="add_contact_button m-1 mt-3 text-light btn btn-dark ">See Contacts List</Link>
        
            </div>
        );
    }

    return (
        <div className="container user_add_form">
            <h2>Add New Contact</h2>
          
            <div className="row">
                <div className="col-sm-12 col-lg-12 col-md-12">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className="form-fields">
                           
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="email" className="form-fields">
                            
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="phone" className="form-fields">
                           
                            <Form.Control
                                type="tel"
                                name="mobile"
                                placeholder="Mobile No."
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        
<center>
                        <Button variant="success" className="mt-3 user_form_submit_button" type="submit">
                            Add Contact Now
                        </Button>
                        </center>
                    </Form>
                </div>
                
                

                </div>
            </div>
        
    );
}

export default AddUsers;
