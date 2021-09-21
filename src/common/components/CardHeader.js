import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'common/components';

export default function CardHeader({ icon, title, subTitle }) {
  return (
    <Box display="flex" alignItems="flex-start">
      <Box>{icon}</Box>
      <Box display="flex" flexDirection="column" pl={3}>
        <Heading fontFamily="Rubik" fontSize={[4, null, 5]} pt={1} pb={2} m={0}>
          {title}
        </Heading>
        <Text fontSize={[1, null, 2]} color="blueGray400" pt={1}>
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
