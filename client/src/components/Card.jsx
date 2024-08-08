import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export function Card(props) {
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    const placeHolder=["/1.jpg","/2.jpg","/3.jpg","/4.jpg","/5.jpg","/6.jpg","/7.jpg","/8.jpg","/9.jpg","/10.jpg","/11.jpg","/12.jpg","/13.jpg"];
    return (
        <>
            <div className='bg-[#fffcf5] hover:scale-105 transition-all hover:shadow-md flex flex-col rounded-lg shadow-md '>
                <div className=''>
                    <img
                    loading='lazy'
                    effect='blur'
                     className='rounded-xl h-[200px] w-full object-cover overflow-hidden' src={props.urlToImage ? props.urlToImage : placeHolder[Math.floor(Math.random() * (12 - 0 + 1)) + 0]} alt="" />
                </div>
                <div className='px-6 flex flex-col h-full justify-between'>
                    <div>
                        <div className='flex flex-nowrap items-center justify-between mt-3 text-sm font-medium text-gray-400'>
                            <p className='overflow-hidden'>
                                {props.author}
                            </p>
                            <p className=''>
                                {props.publishedAt.substring(0, 10)}
                            </p>
                        </div>
                        <div>
                            <h1 className='mt-2 text-xl font-bold'>{props.title}</h1>
                        </div>
                        {/* <div className='mt-2 font-normal text-base text-gray-400'>
                            <p>
                                {props.description?.substring(0, 200)}
                            </p>
                        </div> */}
                    </div>
                    <div>
                    <Link to={props.url} target='_blank'>
                        <div className='flex flex-row items-center mt-2 mb-2 text-blue-600'>
                            <span>Read More &rarr;</span>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
