import { Btn } from "@/UI/btn/btn";
import React from "react";

const NavContainer = () => {
  return (
    <div>
      <div>NavContainer</div>
      <Btn href="" text="Iniciar Sesion" id={() => new Date()} btnColor="linkWhite" />
      <Btn href="" text="INICIAR SESIONS" id={() => new Date()} btnColor="linkBlack" />
      <Btn text="Iniciar Sesion" id={() => new Date()} btnColor="white" />
      <Btn text="Iniciar Sesion" id={() => new Date()} btnColor="black" />
      <Btn text="Enviar" id={() => new Date()} btnColor="transparent" />
    </div>
  );
};

export default NavContainer;
