/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { GLOBAL_VARIABLE } from '../App/constants';
import { getMembersList } from './actions';
import { makeSelectMembersList, makeSelectMembersListLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

import H1 from 'components/H1';
import Table from 'components/Table';

export class PageOne extends React.PureComponent {
  componentDidMount() {
    this.props.getMembersList()
  }

  render() {
    const { membersList, membersListLoading } = this.props
    return (
      <div>
        <Helmet>
          <title>Page 1</title>
          <meta
            name="description"
            content="Test"
          />
        </Helmet>
        <H1>
          Page 1
        </H1>
        <p>{GLOBAL_VARIABLE}</p>
        <Table membersList={membersList} membersListLoading={membersListLoading} />
      </div>
    )
  }
}

PageOne.propTypes = {
  getMembersList: PropTypes.func,
  membersList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  membersListLoading: PropTypes.bool,
  membersListSuccess: PropTypes.bool,
  membersListError: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  membersList: makeSelectMembersList(),
  membersListLoading: makeSelectMembersListLoading()
});

export function mapDispatchToProps(dispatch) {
  return {
    getMembersList: () => dispatch(getMembersList())
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'pageOne', reducer });
const withSaga = injectSaga({ key: 'pageOne', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga
)(PageOne)
