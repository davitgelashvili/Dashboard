import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import Loading from '../Loading/Loading';

export default function CarsList() {
    const [data, setData] = useState();
    const [params, setParams] = useState({
        page: 1,
        limit: 10
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/cars?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        }

        fetchData();
    }, [params]);

    const handleNext = () => {
        if (params.page < totalPages) {
            setParams(prev => ({ ...prev, page: prev.page + 1 }));
        }
    };

    const handlePrev = () => {
        if (params.page > 1) {
            setParams(prev => ({ ...prev, page: prev.page - 1 }));
        }
    };
    return (
        <Section>
            {!data && <Loading />}
            <div className='carslist'>
                <div className='container'>
                    <SectionTitle title={'მანქანები'} />
                    <div className='row'>
                        {data?.map((item) => {
                            return (
                                <div className='col-3 d-flex' key={item._id}>
                                    <Card item={item} />
                                </div>
                            )
                        })}
                    </div>
                    {/* გვერდების გადამრთველი */}
                    <div className={''}>
                        <button onClick={handlePrev} disabled={params.page === 1}>
                            წინ
                        </button>
                        <span>გვერდი: {params.page} / {totalPages}</span>
                        <button onClick={handleNext} disabled={params.page === totalPages}>
                            შემდეგი
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
