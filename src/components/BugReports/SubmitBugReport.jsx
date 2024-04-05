import React, { useState, useEffect } from 'react';
import addBugReport from '../../hooks/addBugReport';

const SubmitBugReport = () => {
  const [page, setPage] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImagesChange = (e) => {
    const file = e.target.files[0];
    setImages([file]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBug = {
      page,
      description,
      image: images[0], // Assuming you only allow a single image for simplicity
    };

    const success = await addBugReport(newBug); // Use the updated function

    if (success) {
      // Reset form fields or navigate to another page as needed
      setPage('');
      setDescription('');
      setImages([]);
    } else {
      // Handle error, show user feedback, etc.
      console.error('Bug report submission failed.');
    }
  };

  return (
      <div className="container mt-5"> 
          <h1 className="fw-bold text-center">Submit a Bug Report</h1>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
              <label htmlFor="page" className="form-label">
                  Page Bug Was Found On
              </label>
              <select
                  className="form-select"
                  id="page"
                  value={page}
                  onChange={handlePageChange}
                  required
              >
                  <option value="" disabled>
                  Select a page
                  </option>
                  <option value="/protected/home">/protected/home</option>
                  <option value="/protected/add_stock">/protected/add_stock</option>
                  <option value="/protected/expired_products">/protected/expired_products</option>
                  <option value="/protected/add_bug_report">/protected/add_bug_report</option>
              </select>
              </div>

              <div className="mb-3">
              <label htmlFor="description" className="form-label">
                  Description of Bug
              </label>
              <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  value={description}
                  onChange={handleDescriptionChange}
                  required
              ></textarea>
              </div>

              <div className="mb-3">
              <label htmlFor="images" className="form-label">
                  Images of Bug (optional)
              </label>
              <input
                  type="file"
                  className="form-control"
                  id="images"
                  accept="image/*"
                  onChange={handleImagesChange}
              />
              </div>

              <button type="submit" className="btn btn-primary mb-5">
              Submit Bug Report
              </button>
          </form>
      </div>
  )
}

export default SubmitBugReport
