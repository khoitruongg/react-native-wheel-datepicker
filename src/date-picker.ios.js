import React, { PureComponent } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import PropTypes from 'prop-types';

export default class DatePicker extends PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    maximumDate: PropTypes.instanceOf(Date),
    minimumDate: PropTypes.instanceOf(Date),
    mode: PropTypes.oneOf(['date', 'time', 'datetime']),
    onDateChange: PropTypes.func.isRequired,
    minuteInterval: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]),
  };

  static defaultProps = {
    mode: 'date',
    date: new Date(),
  };

  state = {
    date: null,
  };

  onDateChange = (date) => {
    this.setState({ date });
    this.props.onDateChange(date);
  };

  UNSAFE_componentWillMount() {
    this.setState({ date: this.props.date });
  }

  UNSAFE_componentWillReceiveProps({ date }) {
    this.setState({ date });
  }

  render() {
    return (
      <DateTimePicker
        {...this.props}
        onDateChange={this.onDateChange}
        date={this.state.date}
      />
    );
  }

  getValue() {
    return this.state.date;
  }
}
