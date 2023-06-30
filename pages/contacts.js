
import Contacts from './contacts/ShowContacts';
import Link from 'next/link';
const Home = () => {
    return (
        <div className="container mt-4 mb-4">
       
        <div className="col home_top_bar">
            <h2>All Contacts</h2>
        
          
         <Link href="/add-contacts" className="add_contact_button text-light btn btn-success">Add New Contact</Link>
       
       </div>
        <Contacts />
        </div>
    )
}

export default Home;