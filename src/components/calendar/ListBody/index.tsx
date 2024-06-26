import classNames from 'classnames/bind';

import ListCard from '@/components/calendar/ListCard';
import EmptyCard from '@/components/layout/empty/EmptyCard';

import { MonthlyReservationResponse } from '@/types';

import styles from './ListBody.module.scss';

const cx = classNames.bind(styles);

type ListBodyProps = {
  schedules?: MonthlyReservationResponse[];
  onClick: (date: string) => void;
};

const ListBody = ({ schedules, onClick }: ListBodyProps) =>
  schedules?.length ? (
    <ul>
      {schedules?.map(({ date, reservations }) => {
        const handleClick = () => onClick(date);

        return (
          <li className={cx('card-container')} key={`schedule-${date}`}>
            <button className={cx('card-container-button')} onClick={handleClick}>
              <ListCard date={date} reservations={reservations} />
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={cx('card-empty')}>
      <EmptyCard text='No Reservation' />
    </div>
  );

export default ListBody;
