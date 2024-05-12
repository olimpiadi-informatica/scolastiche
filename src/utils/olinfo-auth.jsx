import { useEffect, useState } from "react";

import { NoAuth, useStudent } from "@olinfo/quizms/student";
import cookie from "cookie";
import { jwtDecode } from "jwt-decode";

import "~/index.css";

/** @type {typeof NoAuth} */
export const OlinfoAuth = ({ children, ...props }) => {
  return (
    <NoAuth {...props}>
      <OlinfoWrapper>{children}</OlinfoWrapper>
    </NoAuth>
  );
};

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
  }, [student, olinfoUser, setStudent]);

  return children;
}

async function getUser() {
  const cookies = cookie.parse(window.document.cookie);
  const token = cookies.training_token;
  if (!token) {
    throw new Error("Not logged in");
  }

  const data = jwtDecode(token);
  const username = data.username;

  const resp = await fetch("https://training.olinfo.it/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "get", username }),
  });
  const user = await resp.json();

  return {
    name: user.first_name,
    surname: user.last_name,
  };
}
