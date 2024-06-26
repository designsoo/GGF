import { NextPageContext } from 'next';

import Image from 'next/image';

import classNames from 'classnames/bind';

import { WEBPS } from '@/constants';

import styles from './error.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = WEBPS.errorPage.error;

export type ErrorProps = {
  statusCode: number | undefined;
};

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <>
      {statusCode ? (
        <div className={cx('error')}>
          <div className={cx('container')}>
            <div className={cx('error-title')}>
              <div className={cx('error-title-image')}>
                <Image src={url} alt={alt} fill />
              </div>
              <span className={cx('error-title-status')}>{statusCode}-Occurred On Server</span>
            </div>
            <p className={cx('error-description')}>
              <span>서비스 이용에 불편을 드려 죄송합니다</span>
              <span>현재 이용할 수 없는 페이지입니다</span>
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
