import React from "react";
import { useJwt } from "react-jwt";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const JwtToken = () => {
  const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
  //   const decodedToken = decodeToken(token);
  //   const isExpire = isExpired(token);

  console.log("decodedToken", decodedToken);
  console.log("isExpired", isExpired);

  const updateToken = () => {
    const newToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFscGl0IFBldGhhbmkiLCJpYXQiOjE1MTYyMzkwMjJ9.eU0oK3LUZOKHhtIoZpcyqaPwiVvkq45xCPDCYlr3iEQ";
    reEvaluateToken(newToken);
  };
  return (
    <>
      <div>JwtToken</div>
      <button onClick={updateToken}>Update Token</button>
    </>
  );
};

export default JwtToken;
