import React from "react";

class awesomeImage extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { URL } = this.props;
    return (
        <img src={URL} alt="img" />
    );
  }
}

export default awesomeImage;
