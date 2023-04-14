import React, { useEffect, useRef, useState } from 'react';
import ContactFormData from './data/ContactFormData';

const ContactForm = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const budget = useRef();
  const jobDetails = useRef();
  const availability = useRef();
  const preferredContactMethod = useRef();

  const [minDate, setMinDate] = useState(() => {
    const today = new Date();
    const threeDaysFromNow = new Date(today.getTime() + 72 * 60 * 60 * 1000);
    return threeDaysFromNow.toISOString().split('T')[0];
  });

  const refs = [firstName, lastName, email, phoneNumber, budget, availability];

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        height: innerHeight,
        width: innerWidth,
      });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  return (
    <div
      style={{
        color:
          localStorage.getItem('lightMode') === 'true'
            ? '#ba68c8'
            : 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        textAlign: 'center',
      }}
    >
      <form
        data-netlify="true"
        name="contactForm"
        method="post"
        onSubmit="submit"
        style={{ marginTop: '2rem' }}
      >
        <input name="form-name" type="hidden" value="contactForm" />

        {ContactFormData.map((data, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <label
              htmlFor={data.name}
              style={{
                display: 'flex',
                justifySelf: 'left',
                marginBottom: '.5rem',
                marginTop: '.5rem',
              }}
            >
              <i className={data.iconClassName} />
              &nbsp;{data.labelText}
            </label>
            <input
              min={minDate}
              name={data.name}
              ref={refs[index]}
              pattern={data.pattern ? data.pattern : ''}
              placeholder={data.placeholder ? data.placeholder : ''}
              style={{
                borderRadius: '10px',
                height: dimensions.height / 20,
                width: dimensions.width / 2,
              }}
              type={data.type}
            />
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="preferredContactMethod"
            style={{
              display: 'flex',
              justifySelf: 'left',
              marginBottom: '.5rem',
              marginTop: '.5rem',
            }}
          >
            <i className="pi pi-at" />
            &nbsp;Preferred Contact Method:
          </label>
          <select
            name="preferredContactMethod"
            ref={preferredContactMethod}
            style={{
              borderRadius: '10px',
              height: dimensions.height / 20,
              width: dimensions.width / 2,
            }}
          >
            <option value="">Please choose an option</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="telephone">Telephone</option>
            <option value="zoom">Zoom</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="jobDescription"
            style={{
              display: 'flex',
              justifySelf: 'left',
              marginBottom: '.5rem',
              marginTop: '.5rem',
            }}
          >
            <i className="pi pi-info-circle" />
            &nbsp;Job Description:
          </label>
          <textarea
            name="jobDescription"
            ref={jobDetails}
            style={{
              borderRadius: '10px',
              height: dimensions.height / 20,
              overflowX: 'hidden',
              resize: 'vertical',
              width: dimensions.width / 2,
            }}
            type="text"
          />
        </div>
        <button
          // onClick={handleSubmit}
          style={{
            backgroundColor: '#ba68c8',
            color: 'indigo',
            borderRadius: '10px',
            height: dimensions.height / 30,
            marginTop: '1.5rem',
            width: dimensions.width / 4,
          }}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
