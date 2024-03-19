import Image from 'next/image';

import { useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import { SVGS } from '@/constants';

import useTogglePopup from '@/hooks/useTogglePopup';

import styles from './FormDropdown.module.scss';

const cx = classNames.bind(styles);

const { url: defaultUrl, alt: defaultAlt } = SVGS.arrow.down.default;
const { url: activeUrl, alt: activeAlt } = SVGS.arrow.down.active;

type FormDropdownProps = {
  name: string;
  options: { title: string; value: number }[];
  label?: string;
  isSmall?: boolean;
  isDisabled?: boolean;
};

export const FormDropdown = ({ name, label = '', options, isSmall = false, isDisabled = false }: FormDropdownProps) => {
  const { register, setValue } = useFormContext();
  const { isOpen, popupRef, buttonRef, togglePopup } = useTogglePopup();
  const [currentOptionTitle, setCurrentOptionTitle] = useState(options[0].title);

  const handleOptionChange = (title: string, value: number) => {
    setValue(name, value);
    setCurrentOptionTitle(title);
    togglePopup();
  };

  return (
    <div className={cx('dropdown')} ref={popupRef}>
      <span className={cx('label')}>{label}</span>
      <div className={cx('select-group')}>
        <select
          className={cx('select-group-select')}
          {...register(name, {
            value: options[0].value,
          })}
        >
          {options.map((option, index) => (
            <option key={`dropdown-${index}`} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>

        <div className={cx('select-group-input-group')}>
          <input
            className={cx('input', { sm: isSmall }, { opened: isOpen })}
            type='text'
            value={currentOptionTitle}
            disabled={isDisabled}
            onClick={togglePopup}
            readOnly
          />
          <button
            className={cx('arrow-btn', { rotate: isOpen })}
            ref={buttonRef}
            type='button'
            disabled={isDisabled}
            onClick={togglePopup}
          >
            {isOpen ? (
              <Image src={activeUrl} alt={activeAlt} width={24} height={24} />
            ) : (
              <Image src={defaultUrl} alt={defaultAlt} width={24} height={24} />
            )}
          </button>
        </div>

        <div className={cx('select-group-container', { sm: isSmall }, { show: isOpen })}>
          {isOpen && (
            <ul className={cx('select-group-container-list')}>
              {options.map((option, index) => (
                <button
                  className={cx('select-group-container-list-btn', { sm: isSmall })}
                  key={`dropdown-item-${index}`}
                  onClick={() => handleOptionChange(option.title, option.value)}
                >
                  <li>
                    <label>{option.title}</label>
                  </li>
                </button>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};