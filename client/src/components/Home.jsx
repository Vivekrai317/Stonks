import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { Footer } from './Footer';

export function Home(props) {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);

    function handlePrev() {
        setPage(page - 1);
        window.scrollTo({ top: 0 });
    }
    function handleNext() {
        setPage(page + 1);
        window.scrollTo({ top: 0 });
    }

    let pageSize = 16;
    useEffect(() => {
        setLoading(true)
        fetch(`https://stonks-backend-one.vercel.app/local-news?page=${page}&pageSize=${pageSize}`)
            .then(response => {
                if (response.ok) {
                    console.log("inside first then");
                    return response.json();
                }
            })
            .then(myJson => {
                setTotalResults(myJson.data.totalResults)
                console.log(totalResults);
                console.log('inside second then');
                setData(myJson.data.articles)
                console.log(data);

            })
        setLoading(false);
    }, [page]);

    return (
        <>
            <h1 className='text-4xl font-bold text-[#babde2] mt-24 p-5 text-center mb-5 h-full'>
            Local Financial Buzz: Key Updates from Your Region</h1>
            <div className='grid grid-cols-4 gap-8  px-12'>
                {!loading ? data.map((element, index) => (
                    // <h1>heya</h1>
                    <Card
                        title={element.title}
                        description={element.description}
                        urlToImage={element.urlToImage}
                        publishedAt={element.publishedAt}
                        url={element.url}
                        author={element.author}
                        source={element.source}
                        key={index}
                    />
                ))
                    :
                    <div>No data to show</div>
                }
            </div>
            {!loading && data.length > 0 && (
                <div className="flex justify-center gap-14 my-10 items-center">
                    <button disabled={page <= 1} className='pagination-btn text-center' onClick={handlePrev}>&larr; Prev</button>
                    <p className='font-semibold opacity-80'>{page} of {Math.ceil(totalResults / pageSize)}</p>
                    <button className='pagination-btn text-center' disabled={page >= Math.ceil(totalResults / pageSize)} onClick={handleNext}>Next &rarr;</button>
                </div>
            )}
            <Footer/>
        </>
    )
}
