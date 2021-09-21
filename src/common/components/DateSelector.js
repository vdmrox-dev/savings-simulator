import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { Box, IconButton } from 'common/components';
import { ReactComponent as ArrowLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/chevron-right.svg';

export default function DateSelector({ onDateChange }) {
  dayjs.extend(duration);
  const today = dayjs();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(
    dayjs((today.month() + 1).toString()).format('MMMM')
  );
  const [selectedYear, setSelectedYear] = useState(
    dayjs(today.year().toString()).format('YYYY')
  );

  const formatMonth = (month) => {
    return dayjs((month + 1).toString()).format('MMMM');
  };

  const formatYear = (year) => {
    return dayjs(year.toString()).format('YYYY');
  };

  const isPastDate = () => currentDate.isBefore(today) || currentDate === today;

  const handleNextDate = () => {
    const nextDate = currentDate.add(1, 'month');
    setCurrentDate(nextDate);
    const formattedMonth = formatMonth(nextDate.month());
    const formattedYear = formatYear(nextDate.year());

    setSelectedMonth(formattedMonth);
    setSelectedYear(formattedYear);
  };

  const handlePreviousDate = () => {
    // Prevents going back to dates earlier than today.
    if (isPastDate()) return;

    const previousDate = currentDate.subtract(1, 'M');
    setCurrentDate(previousDate);
    const formattedMonth = formatMonth(previousDate.month());
    const formattedYear = formatYear(previousDate.year());

    setSelectedMonth(formattedMonth);
    setSelectedYear(formattedYear);
  };

  const handleKeyAction = (key) => {
    key === 'ArrowRight' && handleNextDate();
    key === 'ArrowLeft' && handlePreviousDate();
  };

  useEffect(() => {
    const num = dayjs.duration(currentDate.diff(today)).asMonths();
    const roundNum = Math.abs(Math.round(num));
    onDateChange({ selectedMonth, selectedYear, monthsDuration: roundNum });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  return (
    <Box
      tabIndex={-1}
      onKeyDown={(e) => {
        handleKeyAction(e.key);
      }}
      border="solid 1px"
      borderColor="blueGray50"
      borderRadius="softRound"
      display="flex"
      alignItems="center"
      height="3.5rem"
      py={3}
      px={2}
      overflow="hidden"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton onClick={() => handlePreviousDate()} disable={isPastDate()}>
          <ArrowLeft />
        </IconButton>
        <Box
          display="flex"
          flexBasis="100%"
          flexDirection="column"
          alignItems="center"
        >
          <Box fontSize={[1, null, 2]} lineHeight="1.5rem" fontWeight="600">
            {selectedMonth}
          </Box>
          <Box fontSize={[1, null, 2]} lineHeight="1.5rem" fontWeight="400">
            {selectedYear}
          </Box>
        </Box>
        <IconButton onClick={() => handleNextDate()}>
          <ArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}

DateSelector.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};
