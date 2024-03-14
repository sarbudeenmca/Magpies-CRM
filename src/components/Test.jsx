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

    const [country, setCountry] = useState(0);

    const handleCountry = (e) => {
        setCountry(e.target.value)
        console.log(e.target.value)
    }

    const [items, setItems] = useState(["Play cricket", "Play video game", "Read book"]);
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheck = (index) => {
        const newCheckedItems = [...checkedItems];
        if (newCheckedItems.includes(index)) {
            newCheckedItems.splice(newCheckedItems.indexOf(index), 1);
        } else {
            newCheckedItems.push(index);
        }
        setCheckedItems(newCheckedItems);
    };

    const handleDelete = (index) => {
        const newItems = items.filter((item, i) => i !== index);
        setItems(newItems);
        setCheckedItems(checkedItems.filter(item => item !== index));
    };


    return (
        <div className='text-white 2xl mt-10'>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={checkedItems.includes(index)}
                            onChange={() => handleCheck(index)}
                        />
                        {item}
                        {checkedItems.includes(index) && (
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>

            {/* <select className='bg-dark' onChange={handleCountry}>
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
            </select> */}



        </div >
    )
}

export default Test