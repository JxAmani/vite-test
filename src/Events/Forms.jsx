function MyForm() {
  const getNameValue = (e) => {
    // console.log(e);
    console.log(e.target.value);
  };

  return (
    <div className="Format">
      <div>
        <p>
          <label>Name</label>
        </p>
        <p>
          <input onChange={getNameValue} type="text" />
        </p>
      </div>
      <div>
        <p>
          <label>Email</label>
        </p>
        <p>
          <input
            type="email"
            onBlur={getNameValue}
          />
        </p>
        <p>
            <label>
                Password
            </label>
        </p>
        <p>
            <input type="Password" onBlur={getNameValue}/>
        </p>
      </div>
    </div>
  );
}

export default MyForm;