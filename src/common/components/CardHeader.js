import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'common/components';

export default function CardHeader({ icon, title, subTitle }) {
  return (
    <Box display="flex" alignItems="center">
      <Box>{icon}</Box>
      <Box display="flex" flexDirection="column" pl={3}>
        <Heading pb={1} m={0}>
          {title}
        </Heading>
        <Text fontFamily="Work Sans" fontSize={3} color="blueGray400">
          {subTitle}
        </Text>
      </Box>
    </Box>
  );
}

CardHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
