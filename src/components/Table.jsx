import React, { Component } from 'react';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Table extends Component {
    
        state = {
            data: [
                {
                    id: '1',
                    name: 'name 1',
                    address: 'New York',
                    phone: '91243646'
                },
                {
                    id: '2',
                    name: 'name 2',
                    address: 'Miami',
                    phone: '91756636'
                },
                {
                    id: '3',
                    name: 'name 3',
                    address: 'Los Angels',
                    phone: '91566686'
                },
                {
                    id: '4',
                    name: 'name 4',
                    address: 'Dhaka',
                    phone: '6366363'
                },
                {
                    id: '5',
                    name: 'name 5',
                    address: 'Sydny',
                    phone: '4774774'
                },
                {
                    id: '6',
                    name: 'name 6',
                    address: 'Parice',
                    phone: '91566686'
                },
                {
                    id: '7',
                    name: 'name 7',
                    address: 'Los Angels',
                    phone: '91566686'
                },
                {
                    id: '8',
                    name: 'name 8',
                    address: 'London',
                    phone: '887746644'
                },
                {
                    id: '9',
                    name: 'name 9',
                    address: 'Los Angels',
                    phone: '91566686'
                },
                {
                    id: '10',
                    name: 'name 10',
                    address: 'Canada',
                    phone: '8765555'
                },
                {
                    id: '11',
                    name: 'name 11',
                    address: 'Singapore',
                    phone: '6776666'
                },
                {
                    id: '12',
                    name: 'name 12',
                    address: 'India',
                    phone: '91566686'
                },
                {
                    id: '13',
                    name: 'name 13',
                    address: 'Iataly',
                    phone: '8663553'
                },
                {
                    id: '14',
                    name: 'name 14',
                    address: 'Malaysia',
                    phone: '635535353'
                },
                {
                    id: '15',
                    name: 'name 15',
                    address: 'Thailand',
                    phone: '91566686'
                }

            ],
            columns: [{
                dataField: 'id',
                text: 'ID'
            },
            {
                dataField: 'name',
                text: 'Name'
            },
            {
                dataField: 'address',
                text: 'Address'
            },{
                dataField: 'phone',
                text: 'Phone'
            },
            
            
            ]
        }
    
    render() {
        return (
            <div className="table-container" style={{marginTop: 50}}>
                <h3>User List</h3>
               <BootstrapTable 
                striped
                hover
                keyField='id'
                data={this.state.data}
                columns={this.state.columns}
                pagination={paginationFactory() }/> 
                               
            </div>
        );
    }
}

export default Table;