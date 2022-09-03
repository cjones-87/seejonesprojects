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
                    value={this.state.firstName}
                    onChange={(event) =>
                      this.setState({ firstName: event.target.value })
                    }
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
                    value={this.state.lastName}
                    onChange={(event) =>
                      this.setState({ lastName: event.target.value })
                    }
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
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
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
                    value={this.state.phoneNumber}
                    placeholder="(999) 999-9999"
                    onChange={(event) =>
                      this.setState({ phoneNumber: event.value })
                    }
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
                    value={this.state.jobDetails}
                    onChange={(event) =>
                      this.setState({ jobDetails: event.target.value })
                    }
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
                    value={this.state.preferredContactMethod}
                    onChange={(event) =>
                      this.setState({
                        preferredContactMethod: event.target.value,
                      })
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
                    value={this.state.budget}
                    onChange={(event) =>
                      this.setState({ budget: event.target.value })
                    }
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
                loading={this.state.loading}
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
