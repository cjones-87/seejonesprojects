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

  const refs = [firstName, lastName, email, phoneNumber, budget];

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
      <form style={{ marginTop: '2rem' }}>
        {ContactFormData.map((data, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <label
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
            ref={jobDetails}
            style={{
              borderRadius: '10px',
              height: dimensions.height / 20,
              width: dimensions.width / 2,
            }}
            type="text"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            style={{
              display: 'flex',
              justifySelf: 'left',
              marginBottom: '.5rem',
              marginTop: '.5rem',
            }}
          >
            <i className="pi pi-calendar" />
            &nbsp;Availability:
          </label>
          <input
            ref={availability}
            style={{
              borderRadius: '10px',
              height: dimensions.height / 20,
              width: dimensions.width / 2,
            }}
            type="date"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
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
      </form>
    </div>
  );
};

export default ContactForm;
