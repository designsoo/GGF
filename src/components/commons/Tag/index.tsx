import classNames from 'classnames/bind';

import { formatPostTypeToKR } from '@/utils';

import { PostTypesEN } from '@/types';

import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

type TagProps = {
  postType: PostTypesEN | string;
};

const Tag = ({ postType }: TagProps) => {
  return <div className={cx(`tag-${postType}`)}>{formatPostTypeToKR(postType)}</div>;
};

export default Tag;
