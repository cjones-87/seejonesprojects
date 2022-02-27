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
import { RadioButton } from 'primereact/radiobutton';
import { Slider } from 'primereact/slider';

import './Slider.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

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
      additionalInfo: '',
      availability: '',
      preferredResponseDate: '',
      budgetOrSalary: [0, 100],
      selectedCategory: this.categories[0],
    };
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

  render() {
    return (
      <div>
        <div className="card" style={{ paddingTop: 10 }}>
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-id-card" />

            <InputText
              id="firstName"
              value={this.state.firstName}
              onChange={(event) =>
                this.setState({ firstName: event.target.value })
              }
            />
            <label htmlFor="firstName" style={{ color: 'silver' }}>
              First Name
            </label>
          </span>

          <div className="card" style={{ paddingTop: 10 }}></div>

          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-id-card" />
            <InputText
              id="lastName"
              value={this.state.lastName}
              onChange={(event) =>
                this.setState({ lastName: event.target.value })
              }
            />
            <label htmlFor="lastName" style={{ color: 'silver' }}>
              Last Name
            </label>
          </span>

          <div className="card" style={{ paddingTop: 10 }}></div>

          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-envelope" />
            <InputText
              id="email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
            <label htmlFor="email" style={{ color: 'silver' }}>
              Email
            </label>
          </span>

          <div className="card" style={{ paddingTop: 10 }}></div>

          <span
            className="p-float-label p-input-icon-right"
            style={{ colorScheme: 'red' }}
          >
            <i className="pi pi-phone" />
            {/* <label htmlFor="phone">Phone</label> */}
            <InputMask
              id="phone"
              mask="(999) 999-9999"
              value={this.state.phoneNumber}
              placeholder="(999) 999-9999"
              onChange={(event) => this.setState({ phoneNumber: event.value })}
            />
          </span>

          <div className="card" style={{ paddingTop: 10 }}></div>

          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-info-circle" />
            <InputTextarea
              value={this.state.additionalInfo}
              onChange={(event) =>
                this.setState({ additionalInfo: event.target.value })
              }
              rows={5}
              cols={30}
              autoResize
            />
            <label htmlFor="additionalInfo" style={{ color: 'silver' }}>
              Additional Info
            </label>
          </span>

          <div className="card"></div>

          <div style={{ color: 'lightgrey' }}>
            <div className="p-fluid grid formgrid">
              <div className="field col-12 md:col-4">
                <label htmlFor="datesAvailableToSpeak">Availability</label>
                <Calendar
                  id="datesAvailableToSpeak"
                  value={this.state.availability}
                  onChange={(event) =>
                    this.setState({ availability: event.value })
                  }
                  selectionMode="multiple"
                  readOnlyInput
                  showIcon
                  touchUI
                />

                <div className="card"></div>

                <label htmlFor="responseDate">Date Response Requested By</label>
                <Calendar
                  id="touchUI"
                  value={this.state.preferredResponseDate}
                  onChange={(event) =>
                    this.setState({ preferredResponseDate: event.value })
                  }
                  touchUI
                  showIcon
                />
              </div>
            </div>
          </div>

          <div className="card"></div>

          <div className="card" style={{ color: 'silver' }}>
            <h5 style={{ fontSize: '1em' }}>Preferred Contact Method</h5>
            {this.categories.map((category) => {
              return (
                <div key={category.key} className="field-radiobutton">
                  <RadioButton
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={(event) =>
                      this.setState({ selectedCategory: event.value })
                    }
                    checked={this.state.selectedCategory.key === category.key}
                    disabled={category.key === 'R'}
                  />
                  <label htmlFor={category.key}>{category.name}</label>
                </div>
              );
            })}
          </div>

          <div className="card"></div>

          <div className="slider" style={{ color: 'silver' }}>
            <div className="card">
              <h5 style={{ fontSize: '1em' }}>
                Budget/Salary Range(increments of 5k): [
                {this.state.budgetOrSalary[0]}, {this.state.budgetOrSalary[1]}]
              </h5>
              <Slider
                value={this.state.budgetOrSalary}
                onChange={(e) => this.setState({ budgetOrSalary: e.value })}
                range
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
