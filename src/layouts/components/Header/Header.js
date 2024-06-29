import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faSignOut,
  faGear,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import style from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(style);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'ja',
          title: 'Japanese',
        },
        {
          type: 'language',
          code: 'th',
          title: 'Thai',
        },
        {
          type: 'language',
          code: 'zh',
          title: 'Chinese',
        },
        {
          type: 'language',
          code: 'ko',
          title: 'Korean',
        },
        {
          type: 'language',
          code: 'fr',
          title: 'French',
        },
        {
          type: 'language',
          code: 'es',
          title: 'Spanish',
        },
        {
          type: 'language',
          code: 'de',
          title: 'German',
        },
        {
          type: 'language',
          code: 'it',
          title: 'Italian',
        },
        {
          type: 'language',
          code: 'ru',
          title: 'Russian',
        },
        {
          type: 'language',
          code: 'pt',
          title: 'Portuguese',
        },
        {
          type: 'language',
          code: 'ar',
          title: 'Arabic',
        },
        {
          type: 'language',
          code: 'hi',
          title: 'Hindi',
        },
        {
          type: 'language',
          code: 'bn',
          title: 'Bengali',
        },
        {
          type: 'language',
          code: 'pa',
          title: 'Punjabi',
        },
        {
          type: 'language',
          code: 'mr',
          title: 'Marathi',
        },
        {
          type: 'language',
          code: 'ta',
          title: 'Tamil',
        },
        {
          type: 'language',
          code: 'te',
          title: 'Telugu',
        },
        {
          type: 'language',
          code: 'ur',
          title: 'Urdu',
        },
        {
          type: 'language',
          code: 'fa',
          title: 'Persian',
        },
        {
          type: 'language',
          code: 'tr',
          title: 'Turkish',
        },
        {
          type: 'language',
          code: 'nl',
          title: 'Dutch',
        },
        {
          type: 'language',
          code: 'pl',
          title: 'Polish',
        },
        {
          type: 'language',
          code: 'ro',
          title: 'Romanian',
        },
        {
          type: 'language',
          code: 'hu',
          title: 'Hungarian',
        },
        {
          type: 'language',
          code: 'el',
          title: 'Greek',
        },
        {
          type: 'language',
          code: 'sv',
          title: 'Swedish',
        },
        {
          type: 'language',
          code: 'fi',
          title: 'Finnish',
        },
        {
          type: 'language',
          code: 'cs',
          title: 'Czech',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };
  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@Hung',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <Link to={config.routes.home}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        {/* thanh tim kiem */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                alt="Vo Hong Hung"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
