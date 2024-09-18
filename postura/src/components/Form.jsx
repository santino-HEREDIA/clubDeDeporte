import React from 'react';

function Form() {
  return (
    <div className="col-md-10 mx-auto col-lg-5">
      <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Usuario</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Recordar
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        <hr className="my-4" />
        <small className="text-body-secondary">Inicia sesión para continuar</small>
      </form>
    </div>
  );
}

export default Form;
