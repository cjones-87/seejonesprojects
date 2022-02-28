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

import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

import './Slider.css';

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
      additionalInfo: '',
      availability: '',
      preferredResponseDate: '',
      budgetOrSalary: [0, 100],
      selectedCategory: this.categories[0],
      totalSize: 0,
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

    //drag and drop
    this.onUpload = this.onUpload.bind(this);
    this.onTemplateUpload = this.onTemplateUpload.bind(this);
    this.onTemplateSelect = this.onTemplateSelect.bind(this);
    this.onTemplateRemove = this.onTemplateRemove.bind(this);
    this.onTemplateClear = this.onTemplateClear.bind(this);
    this.onBasicUpload = this.onBasicUpload.bind(this);
    this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    this.headerTemplate = this.headerTemplate.bind(this);
    this.itemTemplate = this.itemTemplate.bind(this);
    this.emptyTemplate = this.emptyTemplate.bind(this);
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

  //drag and drop
  onUpload() {
    this.toast.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  onTemplateSelect(e) {
    let totalSize = this.state.totalSize;
    e.files.forEach((file) => {
      totalSize += file.size;
    });

    this.setState({
      totalSize,
    });
  }

  onTemplateUpload(e) {
    let totalSize = 0;
    e.files.forEach((file) => {
      totalSize += file.size || 0;
    });

    this.setState(
      {
        totalSize,
      },
      () => {
        this.toast.show({
          severity: 'info',
          summary: 'Success',
          detail: 'File Uploaded',
        });
      }
    );
  }

  onTemplateRemove(file, callback) {
    this.setState(
      (prevState) => ({
        totalSize: prevState.totalSize - file.size,
      }),
      callback
    );
  }

  onTemplateClear() {
    this.setState({ totalSize: 0 });
  }

  onBasicUpload() {
    this.toast.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }

  onBasicUploadAuto() {
    this.toast.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
  }

  headerTemplate(options) {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = this.state.totalSize / 10000;
    const formatedValue = this.fileUploadRef
      ? this.fileUploadRef.formatSize(this.state.totalSize)
      : '0 B';

    return (
      <div
        className={className}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <ProgressBar
          value={value}
          displayValueTemplate={() => `${formatedValue} / 10 MB`}
          style={{ width: '300px', height: '20px', marginLeft: 'auto' }}
        ></ProgressBar>
      </div>
    );
  }

  itemTemplate(file, props) {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => this.onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  }

  emptyTemplate() {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: '5em',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-b)',
            color: 'var(--surface-d)',
          }}
        ></i>
        <span
          style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  }

  //submit loading
  onLoadingClick() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  //form render

  render() {
    const chooseOptions = {
      icon: 'pi pi-fw pi-images',
      iconOnly: true,
      className: 'custom-choose-btn p-button-rounded p-button-outlined',
    };
    const uploadOptions = {
      icon: 'pi pi-fw pi-cloud-upload',
      iconOnly: true,
      className:
        'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
    };
    const cancelOptions = {
      icon: 'pi pi-fw pi-times',
      iconOnly: true,
      className:
        'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
    };

    return (
      <div
        className="bg-black-alpha-90"
        style={{
          paddingLeft: 10,
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
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

          <div className="card"></div>

          <div>
            <Toast
              ref={(el) => {
                this.toast = el;
              }}
            ></Toast>

            <Tooltip
              target=".custom-choose-btn"
              content="Choose"
              position="bottom"
            />
            <Tooltip
              target=".custom-upload-btn"
              content="Upload"
              position="bottom"
            />
            <Tooltip
              target=".custom-cancel-btn"
              content="Clear"
              position="bottom"
            />

            <div className="card">
              <h5 style={{ fontSize: '1em', color: 'silver' }}>
                Proposal &/or Offer Letter
              </h5>
              <FileUpload
                ref={(el) => (this.fileUploadRef = el)}
                name="dragAndDrop"
                url="https://primefaces.org/primereact/showcase/upload.php"
                multiple
                accept="image/*"
                maxFileSize={10000000}
                onUpload={this.onTemplateUpload}
                onSelect={this.onTemplateSelect}
                onError={this.onTemplateClear}
                onClear={this.onTemplateClear}
                headerTemplate={this.headerTemplate}
                itemTemplate={this.itemTemplate}
                emptyTemplate={this.emptyTemplate}
                chooseOptions={chooseOptions}
                uploadOptions={uploadOptions}
                cancelOptions={cancelOptions}
              />
            </div>
          </div>

          <div className="card"></div>

          <div style={{ textAlign: 'center' }}>
            <Button
              label="Submit"
              loading={this.state.loading}
              onClick={this.onLoadingClick}
            />
          </div>

          <div className="card"></div>
        </div>
      </div>
    );
  }
}
