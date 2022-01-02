import React, { Component } from "react";
import QrReader from "react-qr-scanner";

class QrReaderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 10000,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
    if (data) {
      if (data.text.includes(window.location.origin)) {
        console.log("Valid Qr Code!" + data.text);
        window.location.href = data.text;
      }
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
      display: "flex",
      justifyContent: "center",
    };
    const camStyle = {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
    };
    // const textStyle = {
    //   fontSize: "30px",
    //   textAlign: "center",
    //   marginTop: "-50px",
    // };

    return (
      <div style={camStyle}>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }
}

export default QrReaderComp;
