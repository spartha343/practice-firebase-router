const useStoreUserToDB = () => {
  return (user) => {
    const { email } = user;
    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email })
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

export default useStoreUserToDB;
