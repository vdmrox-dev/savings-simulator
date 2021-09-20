import PropTypes from 'prop-types';

import { Box, Text } from 'common/components';

function FormField({ field, label, ...props }) {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Text as="label" fontSize={[0, null, 1]} pb={2}>
        {label}
      </Text>
      {field}
    </Box>
  );
}

FormField.displayName = 'FormField';

FormField.defaultProps = {
  label: null,
};

FormField.propTypes = {
  field: PropTypes.node.isRequired,
  label: PropTypes.string,
};

export default FormField;
