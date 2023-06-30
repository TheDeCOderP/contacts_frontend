import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import EditUser from './EditContacts';
import { Button } from 'react-bootstrap';

const UserData = () => {
  const [data, setData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/users/${userId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          console.log('User deleted successfully');
          fetchData(); // Fetch updated data after deletion
        } else {
          console.error('Error deleting user:', response.status);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleUpdate = async (updatedUser) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      });
      if (response.ok) {
        console.log('User updated successfully');
        fetchData(); // Fetch updated data after update
        setEditingUserId(null); // Reset the editing user ID
      } else {
        console.error('Error updating user:', response.status);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setSearchQuery1('');
    setSearchQuery2('');
  };

  const filteredData = data.filter((item) =>

    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    item.email.toLowerCase().includes(searchQuery1.toLowerCase()) &&
    item.mobile.toLowerCase().includes(searchQuery2.toLowerCase())

  );






  return (
    <div className="container product_grid">
      <div className="row contact_search_form">
        <div className="col-sm-12 col-md-3 col-lg-3 ">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 ">
          <input
            type="email"
            placeholder="Search By Email"
            value={searchQuery1}
            onChange={(e) => setSearchQuery1(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 ">
          <input
            type="number"
            placeholder="Search By Phone"
            value={searchQuery2}
            onChange={(e) => setSearchQuery2(e.target.value)}
            className="form-control"
            
          />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 ">
          <Button variant="dark" onClick={handleResetSearch} className="pt-2 pb-2">
            View All Contacts
          </Button>
        </div>

      </div>

      <div className="row">
        {filteredData.map((item) =>


        (

          <div className="col-sm-12 col-md-6 col-lg-6 products_grid" key={item.id}>
            <Card className="products_card">
              <Card.Body>
                {editingUserId === item.id ? (
                  <EditUser user={item} updateUser={handleUpdate} onCancelEdit={handleCancelEdit} />
                ) : (
                  <>
                    <Card.Title>
                      <span>Name : </span>
                      {item.name}
                    </Card.Title>
                    <p>
                      <span>Mobile No : </span>
                      <Link href={`tel:${item.mobile}`}>{item.mobile}</Link>
                    </p>
                    <p>
                      <span>Email : </span>
                      <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    </p>
                    <div className="edit_delete">
                      <button onClick={() => handleEdit(item.id)}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
