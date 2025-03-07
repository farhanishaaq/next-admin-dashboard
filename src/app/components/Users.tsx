// pages/users.js (or app/users/page.js if using App Router)
'use client'; // Add this if using App Router

import { useState } from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample user data (you can replace this with your API data)
const initialData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Mike Wilson', email: 'mike@example.com', role: 'Admin' },
    { id: 6, name: 'Jane Smith', email: 'js@example.com', role: 'User' },
    { id: 7, name: 'Bob Johnson', email: 'bj@example.com', role: 'Editor' },
    { id: 8, name: 'Alice Brown', email: 'ab@example.com', role: 'User' },
    { id: 9, name: 'Mike Wilson', email: 'mk@example.com', role: 'Admin' },
    { id: 10, name: 'Mike Willium', email: 'willium@example.com', role: 'Admin' },
];

const Users = () => {
    // Table columns configuration
    const columns = [
        {
            name: 'ID',
            selector: row    => row.id,
            sortable: true,
            width: '80px'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        }
    ];

    // State for pagination
    const [data] = useState(initialData);
    const [loading] = useState(false);
    const [perPage, setPerPage] = useState(5);

    // Pagination component customization
    const paginationComponentOptions = {
        rowsPerPageText: 'Rows per page:',
        rangeSeparatorText: 'of',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'All'
    };

    // Custom styles for Bootstrap-like appearance
    const customStyles = {
        table: {
            style: {
                border: '1px solid #dee2e6',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#343a40',
                borderBottom: '2px solid #dee2e6',
            },
        },
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#ffffff',
                padding: '12px',
            },
        },
        cells: {
            style: {
                fontSize: '13px',
                padding: '12px',
                borderBottom: '1px solid #dee2e6',
            },
        },
        rows: {
            style: {
                '&:hover': {
                    backgroundColor: '#f8f9fa',
                },
            },
        },
        pagination: {
            style: {
                borderTop: '1px solid #dee2e6',
                padding: '10px',
            },
        },
    };

    // Handle rows per page change
    const handlePageChange = page => {
        console.log('Page changed to:', page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 fw-bold">Users List</h1>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <DataTable
                            columns={columns}
                            data={data}
                            progressPending={loading}
                            pagination
                            paginationServer={false}
                            paginationTotalRows={data.length}
                            paginationPerPage={perPage}
                            paginationRowsPerPageOptions={[5, 10, 15, 20]}
                            paginationComponentOptions={paginationComponentOptions}
                            onChangePage={handlePageChange}
                            onChangeRowsPerPage={handlePerRowsChange}
                            customStyles={customStyles}
                            highlightOnHover
                            pointerOnHover
                            responsive
                            noDataComponent={
                                <div className="p-4 text-center text-muted">
                                    No records to display
                                </div>
                            }
                            progressComponent={
                                <div className="p-4 text-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;