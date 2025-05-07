import React, { useState } from 'react'
import styles from './Services.module.scss'
import Card from '../Card/Card'
import SectionTitle from '../SectionTitle/SectionTitle'
import Section from '../SectionTitle/Section'

export default function Services() {
    const [data, setData] = useState([
        {
            _id: 'dsgdvz',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'პროფესიონალური რჩევა ავტომობილის შერჩევის პროცესში',
        },
        {
            _id: 'gwgew',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
        {
            _id: 'vsvds',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
        {
            _id: 'fsdgr',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
        {
            _id: 'hffssgd',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
        {
            _id: 'vbfbf',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
        {
            _id: 'gregcsvcxvv',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
        {
            _id: 'hgfh3h4f',
            cover: 'https://2mcars.ge/wp-content/uploads/2022/05/group_25.svg',
            title: 'TOYOTA',
        },
    ])

    return (
        <Section>
            <div className={`${styles['services']}`}>
                <div className='container'>
                    <SectionTitle title={'სერვისები'} />
                    <div className='row'>
                        {data?.map((item) => {
                            return (
                                <div className='col-6 col-sm-4 col-md-3 col-lg-2' key={item._id}>
                                    <Card cover={item} style={{ width: '50%' }}>
                                        <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '10px' }}>{item.title}</div>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
}
