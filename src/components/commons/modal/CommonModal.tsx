import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';
import ReactModal from 'react-modal';

import styles from './CommonModal.module.scss';

const cx = classNames.bind(styles);

type ConfirmModalProps = {
  openModal: boolean;
  onClose: () => void;
  title: string;
  renderContent: ReactNode;
};

const CommonModal = ({ openModal, onClose, title, renderContent }: ConfirmModalProps) => {
  return (
    <ReactModal
      isOpen={openModal}
      onRequestClose={onClose}
      closeTimeoutMS={250}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={cx('modal')}
      overlayClassName={cx('overlay')}
      bodyOpenClassName={cx('body-open')}
      contentLabel='modal-common'
    >
      <p className={cx('modal-rec-top')}></p>
      <div className={cx('modal-inner')}>
        <header className={cx('modal-header')}>
          <h1 className={cx('modal-header-title')}>{title}</h1>
        </header>
        <main className={cx('modal-content')}>{renderContent}</main>
      </div>
      <p className={cx('modal-rec-bottom')}></p>
    </ReactModal>
  );
};

export default CommonModal;