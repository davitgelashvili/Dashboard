import React, { useState } from 'react'
import { Link } from 'react-router'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
    const [openSection, setOpenSection] = useState('')
    const data = [
        {
            _id: '542gda3',
            title: 'მთავარი',
            url: '/adminpanel'
        },
        {
            _id: '2352gfef',
            title: 'მანქანები',
            url: '/adminpanel/cars'
        },
    ]

    function open(_id) {
        if (openSection === _id) {
            setOpenSection('');
        } else {
            setOpenSection(_id);
        }
    }

    return (
        <div className={`${styles['sidebar']}`}>
            <ul className={`${styles['sidebar__menu']}`}>
                {data?.map((item) => {
                    return (
                        <li className={`${styles['sidebar__menu--item']}`} key={item._id} onClick={() => open(item._id)}>
                            {item.url && (
                                <Link className={`${styles['sidebar__menu--link']}`} to={item.url}>
                                    <p className={`${styles['sidebar__menu--title']}`}>{item.title}</p>
                                </Link>
                            )}
                            {item.links && <p className={`${styles['sidebar__menu--title']}`}>{item.title}</p>}
                            {item.links && openSection === item._id && (
                                <ul className={`${styles['sidebar__menu']}`}>
                                    {item?.links?.map((link) => {
                                        return (
                                            <li key={link.url} className={`${styles['sidebar__menu--item']}`}>
                                                <Link className={`${styles['sidebar__menu--link']}`} to={link.url}>
                                                    <p className={`${styles['sidebar__menu--title']}`}>{link.title}</p>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
