import React, { useState, useEffect } from 'react';
import Layouts from '../../Layouts';
import { customerData } from '../../../data/customerData.js';
import { IoSearchOutline } from 'react-icons/io5';
import Table from '../../Shared/Table.jsx';
import { IoIosArrowForward } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';

function CustomersList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(customerData);

  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();

    const filtered = customerData.filter((customer) =>
      Object.values(customer).some(
        (value) =>
          value &&
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTermLower)
      )
    );

    setFilteredData(filtered);
  }, [searchTerm]);

  const handleExport = () => {
    // Create a CSV data
    const csvData = generateCSV(filteredData);
    // Create a blob from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    // Create a URL from the blob
    const url = URL.createObjectURL(blob);
    // Create a link element
    const link = document.createElement('a');
    // Set the link's attributes
    link.setAttribute('href', url);
    link.setAttribute('download', 'customers.csv');
    // Simulate click on the link to trigger download
    link.click();
    // Clean up by revoking the URL
    URL.revokeObjectURL(url);
  };

  const generateCSV = (data) => {
    // Create a CSV string
    let csv = '';
    // Add header row
    const headers = Object.keys(data[0]);
    csv += headers.join(',') + '\n';
    // Add data rows
    data.forEach((row) => {
      const values = headers.map((header) => row[header]);
      csv += values.join(',') + '\n';
    });
    return csv;
  };

  return (
    <Layouts>
    <div>
      <div className="flex items-center justify-between mr-12">
        <h1 className="text-2xl font-bold pl-2 pb-8">Customers</h1>
        <div className="flex items-center gap-3">
          <span>Customer</span>
          <span>
            <IoIosArrowForward />
          </span>
          <span>Customers' List</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-white rounded-xl p-8" style={{ width: '100%' }}>
          <div>
            <div className="flex justify-between items-center mx-20 py-6">
              <div className="flex gap-6 items-center">
                <div className="w-80 flex items-center justify-between border-gray-400 rounded-lg p-2 mx-2" style={{ borderWidth: '1px' }}>
                  <input
                    type="text"
                    placeholder="Search here..."
                    style={{ outline: 'none' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <IoSearchOutline />
                </div>
              </div>
              <button
                className="p-3 w-52 text-l rounded-lg flex items-center gap-3 font-semibold bg-blue-100 text-blue-600"
                onClick={handleExport}
              >
                <IoDocumentTextOutline /> Export all Customers
              </button>
            </div>
          </div>
          <Table data={filteredData} />
        </div>
      </div>
    </div>
  </Layouts>
  )
}

export default CustomersList;
