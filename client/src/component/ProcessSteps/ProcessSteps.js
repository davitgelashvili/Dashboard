import React from 'react'
import './ProcessSteps.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomButton from '../CustomButton/CustomButton';
import Section from '../SectionTitle/Section';

export default function ProcessSteps() {
    const steps = [
        'ნაბიჯი 1: პროექტის ანალიზი',
        'ნაბიჯი 2: მოთხოვნების შეგროვება',
        'ნაბიჯი 3: დიზაინის შექმნა',
        'ნაბიჯი 4: პროტოტიპის შექმნა',
        'ნაბიჯი 5: ფუნქციონალური დეველოპმენტი',
        'ნაბიჯი 6: ტესტირება',
        'ნაბიჯი 7: საიტის/აპლიკაციის ინტეგრაცია',
        'ნაბიჯი 8: უსაფრთხოების უზრუნველყოფა',
        'ნაბიჯი 9: საბოლოო გამოშვება',
    ];
    return (
        <Section>
            <div className='container'>
                <SectionTitle title={'სამუშაო პროცესი'} />
                <ol className="process-steps">
                    {steps.map((step, index) => (
                        <li key={index} className="process-step">
                            <div className="step-number">
                                <CustomButton>{index + 1}</CustomButton>
                            </div>
                            <div className="step-description">{step}</div>
                        </li>
                    ))}
                </ol>
            </div>
        </Section>
    )
}
