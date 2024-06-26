import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import { getMyActivitiesList } from '@/apis/queryFunctions';
import { QUERY_KEYS } from '@/apis/queryKeys';
import { GAME_FILTERS, GAME_NAME_EN_TO_KR, PAGE_PATHS, PRICE_TO_POST_TYPES, SORT_OPTIONS } from '@/constants';
import {
  formatCategoryToGameNameEN,
  formatCategoryToGameNameKR,
  formatGameToLink,
  splitTitleByDelimiter,
  getPostPageSize,
  getProcessedDataList,
} from '@/utils';

import { RegisteredCard } from '@/components/commons/cards';
import { CardSkeleton } from '@/components/commons/cards/CardSkeleton';
import Dropdown from '@/components/commons/Dropdown';
import Filter from '@/components/commons/Filter';
import Pagination from '@/components/commons/Pagination';
import EmptyCard from '@/components/layout/empty/EmptyCard';
import { useDeviceType } from '@/hooks/useDeviceType';

import { MyActivitiesResponse, Order, SortOption } from '@/types';

import styles from './MyPosts.module.scss';

const cx = classNames.bind(styles);

const initialFilter = {
  category: GAME_FILTERS[0].id,
};

const initialSortOption: SortOption<MyActivitiesResponse> = {
  key: 'createdAt',
  type: 'date',
  order: 'desc',
};

const MyPosts = () => {
  const { data: initialDataList, isLoading } = useQuery({
    queryKey: QUERY_KEYS.myActivities.getList,
    queryFn: getMyActivitiesList,
  });

  const [page, setPage] = useState(1);
  const [selectFilter, setSelectFilter] = useState(initialFilter);
  const [sortOption, setSortOption] = useState(initialSortOption);

  const currentDeviceType = useDeviceType();
  const pageSize = getPostPageSize(currentDeviceType);

  const { pagedDataList, totalCount } = getProcessedDataList({
    initialDataList,
    selectFilter,
    sortOption,
    page,
    postsPerPage: pageSize,
  });

  const isEmptyPost = !isLoading && totalCount === 0;

  const handleClickPage = (pageNumber: number) => setPage(pageNumber);

  const handleSelectFilter = (selectedId: string) => setSelectFilter({ category: selectedId });

  const handleOptionChange = (value: string | number) => setSortOption((prev) => ({ ...prev, order: value as Order }));

  useEffect(() => {
    setPage(1);
  }, [selectFilter, pageSize]);

  return (
    <div className={cx('mypost-container')}>
      <h2 className={cx('selected-game')}>
        <span className={cx('selected-game-title')}>{formatCategoryToGameNameKR(selectFilter.category) ?? '전체'}</span>
        <span className={cx('selected-game-count')}>{totalCount}</span>
      </h2>
      <div className={cx('card-area')}>
        <div className={cx('filter-sort')}>
          <Filter items={GAME_FILTERS} selectedFilterId={selectFilter.category} onChange={handleSelectFilter} />
          <div className={cx('dropdown')}>
            <Dropdown options={SORT_OPTIONS} onChange={handleOptionChange} isSmall color='yellow' />
          </div>
        </div>
        {isLoading &&
          Array(15)
            .fill(0)
            .map((_, index) => <CardSkeleton key={`card-${index}`} />)}

        {isEmptyPost ? (
          <EmptyCard text='No Post' />
        ) : (
          <ul className={cx('card-list')}>
            {pagedDataList.map((data) => {
              const gameNameEN = formatCategoryToGameNameEN(data.category);
              const gameNameKR = GAME_NAME_EN_TO_KR[gameNameEN];
              const gameLink = formatGameToLink(gameNameEN);
              const postType = PRICE_TO_POST_TYPES[data.price];
              const { title } = splitTitleByDelimiter(data.title);

              return (
                <li key={data.id}>
                  <RegisteredCard
                    postId={data.id}
                    path={`/${gameLink}/${data.id}`}
                    editPath={`/${gameLink}/${PAGE_PATHS.edit}/${data.id}`}
                    postType={postType}
                    title={title}
                    address={data.address}
                    category={gameNameKR}
                    createdAt={data.createdAt}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Pagination totalCount={totalCount} pageState={page} postPerPage={pageSize} onClick={handleClickPage} />
    </div>
  );
};

export default MyPosts;
