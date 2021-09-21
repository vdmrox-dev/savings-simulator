/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import { Box, IconButton } from 'common/components';
import { ReactComponent as ArrowLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/chevron-right.svg';

export default function DateSelector() {
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
    const nextDate = currentDate.add(1, 'M');
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

  return (
    <Box
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
        <Box display="flex" flexDirection="column" alignItems="center">
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
