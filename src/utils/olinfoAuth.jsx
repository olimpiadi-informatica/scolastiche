import { useEffect, useState } from "react";
import cookie from "cookie";

import { NoAuth, useStudent } from "quizms/student";

export function OlinfoAuth({ children, ...props }) {
  return (
    <NoAuth {...props}>
      <OlinfoWrapper>{children}</OlinfoWrapper>
    </NoAuth>
  );
}

function OlinfoWrapper({ children }) {
  const { student, setStudent } = useStudent();
  const [olinfoUser, setOlinfoUser] = useState();

  useEffect(() => {
    getUser()
      .then(setOlinfoUser)
      .catch((err) => console.log(`Error: failed to get user: ${err.message}`));
  }, []);

  useEffect(() => {
    const information = student.personalInformation;
    if (
      olinfoUser &&
      (olinfoUser.name !== information.name || olinfoUser.surname !== information.surname)
    ) {
      setStudent({
        ...student,
        personalInformation: { ...information, ...olinfoUser },
      });
    }
  }, [student, olinfoUser]);

  return children;
}

async function getUser() {
  const cookies = cookie.parse(window.document.cookie);
  const token = cookies.training_token;
  if (!token) {
    throw new Error("Not logged in");
  }

  const [_key, data, _signature] = token.split(".");
  const base64 = data.replace(/-/g, "+").replace(/_/g, "/");
  const decodedBase64 = atob(base64);
  const decoded = JSON.parse(decodedBase64);
  const username = decoded.username;

  const resp = await fetch("https://training.olinfo.it/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "get", username }),
  });
  const user = await resp.json();
  console.log("user", user);

  return {
    name: user.first_name,
    surname: user.last_name,
  };
}
