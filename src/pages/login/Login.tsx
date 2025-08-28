// import { useState } from "react"
// import Home from "../home/Home";

// function Login() {
//   const [isLogged, setIsLogged] = useState(false);

//   return (
//   <>
//     {isLogged ? (
//       <Home/>
//     ) : ( 
//       <>
//       ç<div>
//         <h1>Login</h1>
//         <button onClick = {() => setIsLogged(true)}>Entrar</button>
//       </div>
//       </>
//       )}
//     </>
//   );
// }

// export default Login

// //home, login, tarefa e contador criar algo novo


// src/login/Login.tsx
import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ? (
        <Home />
      ) : (
        <div>
          <h1>Login</h1>
          <button onClick={() => setIsLogged(true)}>Entrar</button>
        </div>
      )}
    </>
  );
}

export default Login;
