import { useRef, useState } from 'react';
import useTheme from '../../../misc/customHooks/useTheme';
import ContactFormData, { OptionData } from './data/ContactFormData';

const ContactForm = () => {
  const { darkMode } = useTheme();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const budget = useRef();
  const jobDetails = useRef();
  const availability = useRef();
  const preferredContactMethod = useRef();

  const [minDate] = useState(() => {
    const today = new Date();
    const threeDaysFromNow = new Date(today.getTime() + 72 * 60 * 60 * 1000);
    return threeDaysFromNow.toISOString().split('T')[0];
  });

  const refs = [firstName, lastName, email, phoneNumber, budget, availability];

  return (
    <fieldset
      style={{
        color: !darkMode ? '#ba68c8' : 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        textShadow: '2px 2px 2px indigo',
      }}
    >
      <legend>
        <h1>Let's work together!</h1>
      </legend>

      <form
        data-netlify='true'
        name='contactForm'
        method='post'
        onSubmit='submit'
      >
        <input name='form-name' type='hidden' value='contactForm' />

        <div hidden>
          <input name='bot-field' />
        </div>

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
              placeholder={data.placeholder}
              ref={refs[index]}
              required
              style={{
                backgroundColor: 'gray',
                borderRadius: '10px',
                height: '5vh',
                width: '50vw',
              }}
              type={data.type}
            />
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor='preferredContactMethod'
            style={{
              display: 'flex',
              justifySelf: 'left',
              marginBottom: '.5rem',
              marginTop: '.5rem',
            }}
          >
            <i className='pi pi-at' />
            &nbsp;Preferred Contact Method:
          </label>

          <select
            name='preferredContactMethod'
            ref={preferredContactMethod}
            required
            style={{
              backgroundColor: 'gray',
              borderRadius: '10px',
              height: '5vh',
              width: '50vw',
            }}
          >
            {OptionData.map((data, index) => (
              <option key={index} value={data.value}>
                {data.content}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor='jobDescription'
            required
            style={{
              display: 'flex',
              justifySelf: 'left',
              marginBottom: '.5rem',
              marginTop: '.5rem',
            }}
          >
            <i className='pi pi-info-circle' />
            &nbsp;Job Description:
          </label>

          <textarea
            name='jobDescription'
            ref={jobDetails}
            style={{
              backgroundColor: 'gray',
              borderRadius: '10px',
              height: '5vh',
              overflowX: 'hidden',
              resize: 'vertical',
              width: '50vw',
            }}
            type='text'
          />
        </div>

        <div style={{ fontSize: '1vmin' }}>
          <button
            style={{
              background: !darkMode
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: !darkMode ? '#ba68c8' : 'whitesmoke',
              borderRadius: '10px',
              fontSize: '2em',
              height: '2.5em',
              marginTop: '1.5rem',
              textShadow: '2px 2px 2px indigo',
              width: '5em',
            }}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </fieldset>
  );
};

export default ContactForm;
