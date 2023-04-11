const ContactFormData = [
  {
    iconClassName: 'pi pi-id-card',
    labelText: 'First Name:',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-id-card',
    labelText: 'Last Name:',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-id-envelope',
    labelText: 'Email:',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-phone',
    labelText: 'Phone Number:',
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    placeholder: '(999) 999-9999',
    type: 'tel',
  },
  {
    iconClassName: 'pi pi-dollar',
    labelText: 'Budget:',
    type: 'text',
  },
  {
    iconClassName: 'pi pi-calendar',
    labelText: 'Availability:',
    type: 'date',
  },
];

export default ContactFormData;
