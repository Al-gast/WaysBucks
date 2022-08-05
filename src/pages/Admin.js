import { Container, Row, Col } from "react-bootstrap"
import Nav from "../components/Nav/navbar"
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import DummyIncomeTransaction from '../DummyData/IncomeTransaction'

function Admin() {
    
    const [incomeTransaction] = useState(DummyIncomeTransaction)
    
    return(
        <Container>
            <Nav/>
            <div className="mt-3 px-5">
                <h3 className="colorPrimary mb-4">Income Transaction</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Income</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* MAPPING */}
                        {incomeTransaction.map((item,index) => (
                            <tr key={index}>
                            <td>{item?.no}</td>
                            <td>{item?.name}</td>
                            <td>{item?.address}</td>
                            <td>{item?.postCode}</td>
                            <td className="tdPrice">{item?.income}</td>
                            <td className={
                                item.status === 'Success'
                                ? 'statusSuccess'
                                : item.status === 'Cancel'
                                ? 'statusCancel'
                                : item.status === 'Waiting Approve'
                                ? 'statusWaiting'
                                :'statusWay'
                            }>{item?.status}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default Admin