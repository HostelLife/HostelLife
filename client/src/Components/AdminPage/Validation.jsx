function Validation({ props }) {
  console.log(props);
  let errors = {};
  if (!props.userName) {
    errors.props.userName = "Username is required";
  }
  return errors;
}

export default Validation;
