import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';

import { Button } from 'primereact/button';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    //calendar touchui
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    //preferred category
    this.categories = [
      { name: 'Email', key: 'E' },
      { name: 'SMS', key: 'S' },
      { name: 'Zoom', key: 'Z' },
      { name: 'Telephone', key: 'T' },
    ];

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      jobDetails: '',
      availability: '',
      budget: '',
      preferredContactMethod: '',
      loading: false,
    };

    //submit loading
    this.onLoadingClick = this.onLoadingClick.bind(this);

    //calendar touchui
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);

    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    this.invalidDates = [today];

    this.dateTemplate = this.dateTemplate.bind(this);
    this.monthNavigatorTemplate = this.monthNavigatorTemplate.bind(this);
    this.yearNavigatorTemplate = this.yearNavigatorTemplate.bind(this);
    this.onVisibleChange = this.onVisibleChange.bind(this);

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
  }

  //calendar touch ui
  dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
      return (
        <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
      );
    }

    return date.day;
  }

  monthNavigatorTemplate(e) {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        style={{ lineHeight: 1 }}
      />
    );
  }

  yearNavigatorTemplate(e) {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        className="ml-2"
        style={{ lineHeight: 1 }}
      />
    );
  }

  onVisibleChange(event) {
    this.setState(
      (prevState) => ({
        visible: event.type === 'dateselect' || !prevState.visible,
      }),
      event.callback
    );
  }

  onLoadingClick() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  // onSubmitEvent() {
  //   this.onLoadingClick();
  //   const audio = new Audio(SlotMachineJackpot);
  //   const formSubmit = () =>
  //     'https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957';
  //   let playAudio = () => audio.play();
  //   playAudio();
  //   formSubmit();
  // }

  //form render

  render() {
    return (
      <form
        action="https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957"
        method="POST"
      >
        <div
          className="bg-black-alpha-90"
          style={{
            textAlign: 'center',
            paddingTop: '1rem',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              color: 'rebeccapurple',
              paddingBottom: '1rem',
            }}
          >
            Hire Me
          </h1>
          <div className="card" style={{ paddingTop: 10 }}>
            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-id-card" />

              <InputText
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={(event) =>
                  this.setState({ firstName: event.target.value })
                }
                required
              />
              <label
                htmlFor="firstName"
                style={{ color: 'silver', fontSize: '.9em' }}
              >
                First Name
              </label>
            </span>

            <div className="card" style={{ paddingTop: 10 }}></div>

            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-id-card" />
              <InputText
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={(event) =>
                  this.setState({ lastName: event.target.value })
                }
                required
              />
              <label
                htmlFor="lastName"
                style={{ color: 'silver', fontSize: '.9em' }}
              >
                Last Name
              </label>
            </span>

            <div
              className="card"
              style={{ paddingTop: 10, textAlign: 'center' }}
            ></div>

            <span
              className="p-float-label p-input-icon-right"
              style={{ justifyContent: 'center' }}
            >
              <i className="pi pi-envelope" />
              <InputText
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
                required
              />
              <label
                htmlFor="email"
                style={{ color: 'silver', fontSize: '.9em' }}
              >
                Email
              </label>
            </span>

            <div className="card" style={{ paddingTop: 10 }}></div>

            <span
              className="p-float-label p-input-icon-right"
              style={{ colorScheme: 'red' }}
            >
              <i className="pi pi-phone" />
              <InputMask
                id="phone"
                name="phoneNumber"
                mask="(999) 999-9999"
                value={this.state.phoneNumber}
                placeholder="(999) 999-9999"
                onChange={(event) =>
                  this.setState({ phoneNumber: event.value })
                }
                required
              />
            </span>

            <div className="card" style={{ paddingTop: 10 }}></div>

            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-info-circle" />
              <InputTextarea
                id="jobDetails"
                name="jobDetails"
                value={this.state.jobDetails}
                onChange={(event) =>
                  this.setState({ jobDetails: event.target.value })
                }
                rows={5}
                cols={30}
                autoResize
                required
              />
              <label
                htmlFor="jobDetails"
                style={{ color: 'silver', fontSize: '.9em' }}
              >
                Job Details
              </label>
            </span>

            <div className="card" style={{ paddingTop: 10 }}></div>

            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-at" />
              <InputText
                id="preferredContactMethod"
                name="preferredContactMethod"
                value={this.state.preferredContactMethod}
                onChange={(event) =>
                  this.setState({ preferredContactMethod: event.target.value })
                }
                required
              />
              <label
                htmlFor="preferredContactMethod"
                style={{ color: 'silver', fontSize: '.9em' }}
              >
                Preferred Contact Method
              </label>
            </span>

            <div className="card" style={{ paddingTop: 10 }}></div>

            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-dollar" />
              <InputText
                id="budget"
                name="budget"
                value={this.state.budget}
                onChange={(event) =>
                  this.setState({ budget: event.target.value })
                }
                required
              />
              <label
                htmlFor="budget"
                style={{ color: 'silver', fontSize: '.9em' }}
              >
                Budget - USD
              </label>
            </span>

            <div className="card" style={{ paddingTop: 10 }}></div>

            <div style={{ color: 'lightgrey' }}>
              <div
                className="p-fluid grid formgrid"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div className="card" style={{ paddingTop: 10 }}></div>

                <div className="field col-12 md:col-4">
                  <label
                    htmlFor="datesAvailableToSpeak"
                    style={{ color: 'silver', fontSize: '.9em' }}
                  >
                    Availability To Speak
                  </label>
                  <Calendar
                    id="datesAvailableToSpeak"
                    name="datesAvailableToSpeak"
                    value={this.state.availability}
                    onChange={(event) =>
                      this.setState({ availability: event.value })
                    }
                    selectionMode="multiple"
                    disabledDays={[0, 1, 5, 6]}
                    showIcon
                    touchUI
                    showTime
                    required
                  />
                </div>
              </div>
            </div>

            <div className="card"></div>

            <div style={{ textAlign: 'center' }}>
              <Button
                label="Hire Me"
                loading={this.state.loading}
                // onClick={this.onSubmitEvent}
                onClick={() =>
                  'https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957'
                }
                action="https://formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957"
                method="POST"
              />
            </div>

            <div className="card"></div>
          </div>
        </div>
      </form>
    );
  }
}
