import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import FilterDeals from './FilterDeals';

const generateRandomData = () => {
    // Function to generate random data
    const randomName = () => {
        const names = ['Emma Johnson', 'Mohammed Ali', 'Li Wei', 'Ana Rodriguez', 'Amit Patel', 'Yuki Tanaka', 'Alice Williams', 'Carlos Gomez', 'Anna Petrov', 'Rahul Singh', 'Olga Ivanova', 'Khaled Ahmed', 'Sofia Rodriguez', 'Chen Wei', 'Maria Sanchez'];
        return names[Math.floor(Math.random() * names.length)];
    };

    const randomCompany = () => {
        const companies = ['Global Innovations', 'Tech Solutions Ltd.', 'Dragon Enterprises', 'InnovaTech Solutions', 'Future Dynamics', 'TechVision Japan', 'Data Dynamics', 'LatinTech Solutions', 'EastWest Innovations', 'Global Solutions', 'Volga Tech', 'Middle East Dynamics', 'SouthTech Solutions', 'Great Wall Technologies', 'South American Innovations'];
        return companies[Math.floor(Math.random() * companies.length)];
    };

    const randomTelephone = () => `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;

    const randomMobile = () => `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;

    const randomEmail = () => {
        const domains = ['email.com', 'gmail.com', 'yahoo.com', 'company.com'];
        return `${randomName().toLowerCase().replace(/\s+/g, '.')}.${Math.floor(Math.random() * 900) + 100}@${domains[Math.floor(Math.random() * domains.length)]}`;
    };

    const randomCountry = () => {
        const countries = ['United States', 'United Kingdom', 'China', 'Spain', 'India', 'Japan', 'Russia', 'Mexico', 'Egypt', 'Argentina'];
        return countries[Math.floor(Math.random() * countries.length)];
    };

    const randomStatus = () => (Math.random() < 0.5 ? 'Active' : 'Inactive');

    const data = [];

    for (let i = 0; i < 10; i++) {
        data.push({
            leadName: randomName(),
            company: randomCompany(),
            telephone: randomTelephone(),
            mobile: randomMobile(),
            email: randomEmail(),
            country: randomCountry(),
            status: randomStatus(),
        });
    }

    return data;
};

const ViewDeals = () => {
    const tableData = generateRandomData();
    return (

        <>
            <FilterDeals />
            <table className='datatable'>
                <thead>
                    <tr>
                        <th><input type='checkbox' className='check' /> </th>
                        <th>Deal Name</th>
                        <th>Company</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th className='w-[85px]'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => {
                        const statusClass = row.status ? row.status.toLowerCase() : '';
                        return (
                            <tr key={index}>
                                <td><input type='checkbox' className='check' /></td>
                                <td>
                                    {row.leadName}
                                    <br />
                                    <a href={`tel:${row.telephone}`}>{row.telephone}</a>
                                </td>
                                <td>
                                    {row.company}
                                    <br />
                                    <a href={`mailto:${row.email}`}>{row.email}</a>
                                </td>
                                <td>{row.country}</td>
                                <td className={statusClass}><label>{row.status}</label></td>
                                <td className='w-[85px]'>
                                    <button className='edit-icon'><FontAwesomeIcon icon={faPencilAlt} /></button>
                                    <button className='trash-icon'><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ViewDeals