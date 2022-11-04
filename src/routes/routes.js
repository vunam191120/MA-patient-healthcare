import ClientBookAppointmentPage from '../pages/clientBookAppointment';
import ContactPage from '../pages/contact';
import { PATH_CLIENT_BOOK_APPOINTMENT, PATH_CLIENT_CONTACT } from './path';

const appRoutes = [
  {
    path: PATH_CLIENT_BOOK_APPOINTMENT,
    element: <ClientBookAppointmentPage />,
    // roles: [''],
  },
  {
    path: PATH_CLIENT_CONTACT,
    element: <ContactPage />,
  },
];

export default appRoutes;
