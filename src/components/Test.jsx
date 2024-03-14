import React, { useState } from 'react'

const Test = () => {

    const countries = [
        {
            name: 'India', value: 'IN', cities: [
                'Delhi',
                'Mumbai'
            ]
        },
        {
            name: 'United States', value: 'US', cities: [
                'New York',
                'Los Angeles'
            ]
        }, {
            name: 'Germany', value: 'DE', cities: [
                'Berlin',
                'Munich'
            ]
        }, {
            name: 'Japan', value: 'JP', cities: [
                'Tokyo',
                'Osaka'
            ]
        }
    ]

    const [country, setCountry] = useState('');

    const handleCountry = (e) => {
        setCountry(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='text-white 2xl mt-10'>
            <select className='bg-dark' onChange={handleCountry}>
                {
                    countries.map((item, index) => {
                        return (
                            <option value={index}>
                                {item.name}
                            </option>
                        )
                    })
                }
            </select>

            <select className='bg-dark' value={country}>
                {countries[country].cities.map((item, index) => {
                    return <option value={index}>{item}</option>
                })}
            </select>
        </div >
    )
}

export default Test