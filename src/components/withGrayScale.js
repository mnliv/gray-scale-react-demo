import React from "react";
import Filter from 'react-css-filter';

export default function(ChildrenComponent, option = { value: 0.8 }) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Filter effects={{'grayscale':`${option.value*100}%`}}>
          <ChildrenComponent {...this.props} />
        </Filter>
      );
    }
  };
}
