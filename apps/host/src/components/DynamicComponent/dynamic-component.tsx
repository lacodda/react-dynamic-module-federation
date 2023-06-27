import React from 'react';

const DynamicComponent = ({ is }: { is: any }): JSX.Element => {
  if (!is) {
    return <></>;
  }
  return React.createElement(
    is.type,
    is.props,
    is.props.children,
  );
};

export default DynamicComponent;
