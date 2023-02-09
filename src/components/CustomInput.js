function CustomInput(props) {
  const {type,name,className,placeholder} = props;

  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        className={`form-control ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
