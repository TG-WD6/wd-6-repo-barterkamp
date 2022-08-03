function FunctionalComponent({ change, setChange }) {
  const onChangeHandler = (e) => {
    setChange(e.target.value);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <form>
        <input value={change} type="text" onChange={onChangeHandler} />
      </form>
      <h3>Hello Function {change}</h3>
    </div>
  );
}

export default FunctionalComponent;
