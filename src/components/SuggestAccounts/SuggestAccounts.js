import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { useState, useEffect } from 'react';
import AccountItem from './AccountIem';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
  const [followerSuggest, setFollowerSuggest] = useState([]);
  useEffect(() => {
    const fetchFollowerSuggest = async () => {
      const response = await searchService.search('Le', 'less');
      setFollowerSuggest(response);
    };
    fetchFollowerSuggest();
  }, []);
  if (!followerSuggest) {
    return null;
  }
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {followerSuggest.map(function (result) {
        return <AccountItem key={result.id} data={result} />;
      })}

      <p className={cx('see-all')}>See all</p>
    </div>
  );
}
SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
