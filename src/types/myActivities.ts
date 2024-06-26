import { MyReservationsStatus } from '@/types';

export type ReservationStatus = Exclude<MyReservationsStatus, 'canceled' | 'completed'>;

export type EditReservationStatusBody = {
  status: ReservationStatus;
};

export type MyActivitiesBody = {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageIdsToRemove: number[];
  subImageUrlsToAdd: string[];
  scheduleIdsToRemove: number[];
  schedulesToAdd: { endTime: string; date: string; startTime: string }[];
};

export type MyActivitiesResponse = {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
};

export type ActivitiesResponse = {
  cursorId: number;
  totalCount: number;
  activities: ActivityDetailResponse[];
};

export type ActivityDetailResponse = {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImages: { id: number; imageUrl: string }[];
  schedules: { id: number; date: string; startTime: string; endTime: string }[];
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export type ReviewResponse = {
  averageRating: number;
  totalCount: number;
  reviews: Review[];
};

export type Review = {
  id: number;
  user: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  activityId: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type changeStatusMutationParams = {
  activityId: number;
  reservationId: number;
  status: EditReservationStatusBody;
};
