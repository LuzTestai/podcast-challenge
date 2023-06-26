import React from "react";

export const cortarStrPorGuionOComa = (str) => {
    const indexGuion = str.indexOf("-");
    const indexComa = str.indexOf(",");
    const indexCorte = Math.min(indexGuion !== -1 ? indexGuion : Infinity, indexComa !== -1 ? indexComa : Infinity);
    
    return indexCorte !== Infinity ? str.slice(0, indexCorte) : str;
  }

export const convertirFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-AR');
}

export const convertirDuracion = (duracionMinutos) => {
  const horas = Math.floor(duracionMinutos / 60);
  const minutos = duracionMinutos % 60;
  const segundos = 0;
  
  const duracionFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
  return duracionFormateada;
}

export const convertirAHTML = ( stringHTML) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = stringHTML;
  return divElement.innerHTML;
  };

