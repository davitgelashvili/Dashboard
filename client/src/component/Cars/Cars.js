import React, { useEffect, useState } from 'react'
import styles from './Cars.module.scss'
import Card from '../Card/Card'
import SectionTitle from '../SectionTitle/SectionTitle'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import Section from '../SectionTitle/Section';
import Loading from '../Loading/Loading';

export default function Cars() {
    const [data, setData] = useState();
    const [params, setParams] = useState({
        page: 1,
        limit: 4
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

    return (
        <Section>
            {!data && <Loading />}
            <div className={`${styles['cars']}`}>
                <div className='container'>
                    <SectionTitle title={'მანქანები'}>
                        <Link to={'/cars'}>
                            ყველა მაქნანა
                        </Link>
                    </SectionTitle>
                    <div className='row'>
                        {data?.map((item) => {
                            return (
                                <div className='col-6 col-lg-3 d-flex' key={item._id}>
                                    <Card item={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
}
