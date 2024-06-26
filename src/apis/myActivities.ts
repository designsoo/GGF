import {
  MY_ACTIVITIES_API,
  RESERVATION_DASHBOARD_API,
  RESERVED_SCHEDULE_API,
  RESERVATIONS_API,
  DEFAULT_PAGE_SIZE,
} from '@/constants';

import { ReservationStatus, EditReservationStatusBody, MyActivitiesBody } from '@/types';

import instance from './axios';

export const MyActivities = {
  getList: () =>
    instance.get(`${MY_ACTIVITIES_API}`, {
      params: {
        size: DEFAULT_PAGE_SIZE,
      },
    }),

  getMonthlyReservationList: (activityId: number, year: string, month: string) =>
    instance.get(`${MY_ACTIVITIES_API}/${activityId}${RESERVATION_DASHBOARD_API}`, {
      params: {
        year,
        month,
      },
    }),

  getDailyReservationList: (activityId: number, date: string) =>
    instance.get(`${MY_ACTIVITIES_API}/${activityId}${RESERVED_SCHEDULE_API}`, {
      params: {
        date,
      },
    }),

  getDetailReservationList: (activityId: number, scheduleId: number, status: ReservationStatus) =>
    instance.get(`${MY_ACTIVITIES_API}/${activityId}${RESERVATIONS_API}`, {
      params: {
        size: DEFAULT_PAGE_SIZE,
        scheduleId,
        status,
      },
    }),

  editReservationStatus: (activityId: number, reservationId: number, status: EditReservationStatusBody) =>
    instance.patch(`${MY_ACTIVITIES_API}/${activityId}${RESERVATIONS_API}/${reservationId}`, status),

  delete: (activityId: number) => instance.delete(`${MY_ACTIVITIES_API}/${activityId}`),

  /**
   * 내 체험 수정
   * @param activityId
   * @param myActivities
   * @returns
   */
  edit: (activityId: number, myActivities: MyActivitiesBody) =>
    instance.patch(`${MY_ACTIVITIES_API}/${activityId}`, myActivities),
};
