import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tag from '../../../components/Tag';
import {
  fetchAppointments,
  selectAppointmentIsLoading,
  selectAppointments,
} from '../../../store/slices/appointmentsSlice';
import {
  fetchClinics,
  selectClinics,
} from '../../../store/slices/clinicsSlice';

const AppointmentItem = ({ appointment, clinic }) => {
  return (
    <div className="appointment-item">
      <img
        src={appointment.doctor.avatar}
        className="doctor-avatar"
        alt="doctor-avt"
      />
      <div className="info">
        <h3 className="doctor-name">{appointment.doctor.full_name}</h3>
        <p className="appointment-date">
          <span className="date">
            {moment(appointment.date).format('DD-MM-YYYY')}
          </span>
          <span> - </span>
          <span className="time">{appointment.time}</span>
        </p>
        <p className="clinic">
          {appointment.is_online ? 'Online appointment' : 'Offline appointment'}
        </p>
        <p className="clinic">
          {clinic && Object.keys(clinic).length > 0 && clinic.clinic_name}
        </p>
        <div className="status">
          <Tag status={appointment.status}></Tag>
        </div>
        {appointment.is_online && (
          <a
            href={`https://meet.medcares.net/${appointment.meeting_room}`}
            target="_blank"
            rel="noreferrer"
            className="square button--join--call"
            type="button"
          >
            <span>Join Call</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default function AppointmentList() {
  const dispatch = useDispatch();
  const appointments = useSelector(selectAppointments);
  const clinics = useSelector(selectClinics);
  const isLoading = useSelector(selectAppointmentIsLoading);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  useEffect(() => {
    if (clinics.length === 0) {
      dispatch(fetchClinics());
    }
  }, [clinics.length, dispatch]);

  return (
    <div className="appointment-container">
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => {
          const clinic = clinics.find(
            (item) => item.clinic_id === appointment.clinic_id
          );
          return (
            <AppointmentItem
              appointment={appointment}
              key={index}
              clinic={clinic}
            />
          );
        })
      ) : (
        <p className="title">No appointment yet!</p>
      )}
    </div>
  );
}
