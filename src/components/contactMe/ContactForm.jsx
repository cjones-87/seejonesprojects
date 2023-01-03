import React, { useEffect, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';

const ContactForm = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        height: innerHeight,
        width: innerWidth,
      });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;

  //preferred category
  const categories = useState([
    { name: 'Email', key: 'E' },
    { name: 'SMS', key: 'S' },
    { name: 'Zoom', key: 'Z' },
    { name: 'Telephone', key: 'T' },
  ]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const [availability, setAvailability] = useState('');
  const [budget, setBudget] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  //submit loading

  //calendar touchui
  let minDate = new Date();
  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);

  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);

  const invalidDates = [today];

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Claro',
  });

  //calendar touch ui
  const dateTemplate = (date) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
      );
    }

    return date.day;
  };

  const monthNavigatorTemplate = (e) => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        style={{ lineHeight: 1 }}
      />
    );
  };

  const yearNavigatorTemplate = (e) => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        className="ml-2"
        style={{ lineHeight: 1 }}
      />
    );
  };

  // const onVisibleChange = (event) => {
  //   setVisible(
  //     (prevState) => ({
  //       visible: event.type === 'dateselect' || !prevState.visible,
  //     }),
  //     event.callback
  //   );
  // };

  const onLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  //form render

  return (
    <form
      action="https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957"
      method="POST"
    >
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20 button'
            : 'bg-black-alpha-90 button'
        }
        style={{
          textAlign: 'center',
          paddingTop: '1rem',
          width: dimensions.width,
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: 'rebeccapurple',
            paddingBottom: '1rem',
            textShadow:
              localStorage.getItem('lightMode') === 'true'
                ? '1px 1px 1px indigo'
                : '1px 1px 1px whitesmoke',
          }}
        >
          Hire Me
        </h1>
        <div className="card" style={{ paddingTop: 10 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                paddingRight: 25,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                className="p-float-label p-input-icon-right"
                style={{ paddingBlockEnd: 5 }}
              >
                <i className="pi pi-id-card" />

                <InputText
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  autoResize
                  autofocus
                  tooltip="Please enter your first name"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />

                <label
                  htmlFor="firstName"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  First Name
                </label>
              </span>

              <span
                className="p-float-label p-input-icon-right"
                style={{ paddingBlockEnd: 5 }}
              >
                <i className="pi pi-id-card" />
                <InputText
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  autoResize
                  tooltip="Please enter your last name"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
                <label
                  htmlFor="lastName"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  Last Name
                </label>
              </span>

              <span
                className="p-float-label p-input-icon-right"
                style={{ paddingBlockEnd: 5 }}
              >
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoResize
                  tooltip="Please enter your email address"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
                <label
                  htmlFor="email"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  Email
                </label>
              </span>

              <span
                className="p-float-label p-input-icon-right"
                style={{ colorScheme: 'red' }}
              >
                <i className="pi pi-phone" />
                <InputMask
                  id="phone"
                  name="phoneNumber"
                  mask="(999) 999-9999"
                  value={phoneNumber}
                  placeholder="(999) 999-9999"
                  onChange={(event) => setPhoneNumber(event.value)}
                  required
                  autoResize
                  tooltip="Please enter your phone number"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="p-float-label p-input-icon-right"
                style={{ paddingBlockEnd: 5.5 }}
              >
                <i className="pi pi-info-circle" />
                <InputTextarea
                  id="jobDetails"
                  name="jobDetails"
                  value={jobDetails}
                  onChange={(event) => setJobDetails(event.target.value)}
                  rows={4}
                  cols={19}
                  required
                  autoResize
                  tooltip="Please enter additional info, if applicable"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
                <label
                  htmlFor="jobDetails"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  Job Details
                </label>
              </span>
              <span
                className="p-float-label p-input-icon-right"
                style={{ paddingBlockEnd: 5.5 }}
              >
                <i className="pi pi-at" />
                <InputText
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  value={preferredContactMethod}
                  onChange={(event) =>
                    setPreferredContactMethod(event.target.value)
                  }
                  required
                  autoResize
                  tooltip="What's the best way to reach you?"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
                <label
                  htmlFor="preferredContactMethod"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  Preferred Contact Method
                </label>
              </span>
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-dollar" />
                <InputText
                  id="budget"
                  name="budget"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  required
                  autoResize
                  tooltip="Please enter available budget"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
                <label
                  htmlFor="budget"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  Budget - USD
                </label>
              </span>
            </div>
          </div>

          <div
            style={{
              color: 'silver',
              paddingBlockStart: 5.5,
            }}
          >
            <div
              className="p-fluid grid formgrid"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <div className="field col-12 md:col-4">
                <label
                  htmlFor="datesAvailableToSpeak"
                  style={{ color: 'silver', fontSize: '.9em' }}
                >
                  Schedule A Chat
                </label>
                <Calendar
                  id="datesAvailableToSpeak"
                  name="datesAvailableToSpeak"
                  value={availability}
                  dateTemplate={dateTemplate}
                  monthNavigatorTemplate={monthNavigatorTemplate}
                  yearNavigatorTemplate={yearNavigatorTemplate}
                  onChange={(event) => setAvailability(event.value)}
                  // onVisibleChange={onVisibleChange}
                  selectionMode="multiple"
                  disabledDays={[0, 1, 5, 6]}
                  showIcon
                  touchUI
                  showTime
                  required
                  autoResize
                  tooltip="When possible, 72 hours prior notice is preferred"
                  tooltipOptions={{ position: 'bottom', mouseTrack: true }}
                />
              </div>
            </div>
          </div>

          <div className="card"></div>

          <div style={{ textAlign: 'center', paddingBlockEnd: 10 }}>
            <Button
              label="Hire Me"
              loading={loading}
              onClick={() =>
                'https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957'
              }
              action="https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957"
              method="POST"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
