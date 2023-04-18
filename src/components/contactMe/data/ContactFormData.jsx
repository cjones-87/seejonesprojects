const ContactFormData = [
  {
    iconClassName: 'pi pi-id-card',
    labelText: 'First Name:',
    name: 'firstName',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-id-card',
    labelText: 'Last Name:',
    name: 'lastName',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-id-envelope',
    labelText: 'Email:',
    name: 'email',
    type: 'email',
  },
  {
    iconClassName: 'pi pi-phone',
    labelText: 'Phone Number:',
    name: 'phoneNumber',
    placeholder: '(999) 999-9999',
    type: 'tel',
  },
  {
    iconClassName: 'pi pi-dollar',
    labelText: 'Budget:',
    name: 'budget',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-calendar',
    labelText: 'Availability:',
    name: 'availability',
    type: 'date',
  },
];

export const OptionData = [
  { content: 'Please choose an option', value: '' },
  { content: 'Email', value: 'email' },
  { content: 'SMS', value: 'sms' },
  { content: 'Telephone', value: 'telephone' },
  { content: 'Zoom', value: 'zoom' },
];

export default ContactFormData;
