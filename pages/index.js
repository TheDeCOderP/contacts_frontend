'use client'

import Link from 'next/link';
const Home = () => {
    return (
        <section className="home-section">



            <Link href="/contacts" className="add_contact_button text-light btn btn-dark">View All Contacts</Link>
            <Link href="/add-contacts" className="add_contact_button text-light btn btn-dark">Add New  Contacts</Link>


        </section>
    )
}

export default Home;