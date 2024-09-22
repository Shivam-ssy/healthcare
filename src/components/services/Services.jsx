// Services.jsx
import React, { useState } from 'react';
import './services.css';
import Card from "../card/Card.jsx";

function Services() {
  const [servicesData, setServicesData] = useState([]);
  const [dataAdd, setDataAdd] = useState({
    id: '',
    title: '',
    details: '',
    price: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataAdd({ ...dataAdd, [name]: value });
  };

  const handleSaveChanges = () => {
    if (dataAdd.title && dataAdd.details && dataAdd.price) {
      if (isEditMode) {
        const updatedServices = servicesData.map((service) =>
          service.id === editId ? { ...dataAdd, id: editId } : service
        );
        setServicesData(updatedServices);
        setIsEditMode(false);
        setEditId(null);
      } else {
        const newService = {
          id: Date.now().toString(), 
          title: dataAdd.title,
          details: dataAdd.details,
          price: dataAdd.price,
        };
        setServicesData([...servicesData, newService]);
      }

      setDataAdd({
        id: '',
        title: '',
        details: '',
        price: '',
      });
    }
    
  };

  const handleEdit = (service) => {
    setDataAdd({
      id: service.id,
      title: service.title,
      details: service.details,
      price: service.price,
    });
    setIsEditMode(true);
    setEditId(service.id);

   
 
  };
  return (
    <div className='services-class'>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {isEditMode ? 'Edit Service' : 'Add Service'}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Form for adding/editing service */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Service Title</label>
                <input type="text" className="form-control" id="title" name="title" value={dataAdd.title} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="details" className="form-label">Service Details</label>
                <textarea className="form-control" id="details" name="details" rows="3" value={dataAdd.details} onChange={handleChange}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={dataAdd.price} onChange={handleChange} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges} data-bs-dismiss="modal">
                {isEditMode ? 'Update changes' : 'Save changes'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className='d-flex justify-content-around'>
          <h2>Services List</h2>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              setIsEditMode(false);
              setDataAdd({ id: '', title: '', details: '', price: '' });
            }}
          >
            Add New Service
          </button>
        </div>
        {servicesData.length > 0 ? (
          <div className="d-flex gap-5 mt-5 p-5 flex-wrap">
            {servicesData.map((service) => (
              <div key={service.id}>
                <Card
                  title={service.title}
                  price={service.price}
                  details={service.details}
                  handleEdits={() => handleEdit(service)} // Pass the service object to edit
                />
              </div>
            ))}
          </div>
        ) : (
          <div className='d-flex flex-column align-items-center'>
            <img src="./OIP.jpeg" alt="" />
            <h5 className='text-danger'>No Services found. Please add any service</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                setIsEditMode(false);
                setDataAdd({ id: '', title: '', details: '', price: '' });
              }}
            >
              Add New Service
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
