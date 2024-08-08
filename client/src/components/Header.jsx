import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Countries from './Countries';
import { Select } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';



export function Header(props) {
    // const []
    const [showCountry, setShowCountry] = useState(false);
    console.log(Countries);
    
    return (
        <>
            <header>
                <nav className=' fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-between px-12 '>
                    <Link to={"/"}>
                        <h3 className='items-center flex relative font-bold md:basis-1/6 xs:basis-4/12 z-50 mb-5 mt-5'>
                            <img className='w-14 h-12 mb-1' src='/icon.png' />
                            <span className='text-3xl text-white'>
                                STONKS
                            </span>
                        </h3>
                    </Link>

                    <ul className='flex items-center text-white gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end'>
                        <li >
                            <Link className='no-underline font-semibold' to={"/local-news"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='no-underline font-semibold' to={"/top-headlines"}>
                                All News
                            </Link>
                        </li>
                        {/* <li>
                            <Translate/>
                        </li> */}
                        <li>
                            <Link className='no-underline font-semibold' to={"/trending"}>
                                Trending
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link className="no-underline font-semibold flex items-center gap-2"
                                onClick={() => {
                                    setShowCountry(!showCountry);
                                }}>
                            </Link>
                            <Select
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.countryName ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.countryName ?? '').toLowerCase().localeCompare((optionB?.countryName ?? '').toLowerCase())
                                }
                                className='w-[175px]'
                                placeholder='Select Country'>
                                {Countries.map((element, index) => {
                                    return (
                                        <Select.Option key={index} onClick={() => { setShowCountry(!showCountry) }}>
                                            <Link to={"/country-headlines/" + element?.iso_2_alpha} className="flex gap-3" type="btn"
                                                onClick={() => {
                                                    setActive(!active)
                                                }}>
                                                <img
                                                    src={element?.png}
                                                    srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png`}
                                                    alt={element?.countryName} />
                                                <span>{element?.countryName}</span>
                                            </Link>
                                        </Select.Option>
                                    )
                                })}
                            </Select>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
