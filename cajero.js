const cuentas = [
  { id: 1, nombre: "Ana", saldo: 500, transacciones: [] },
  { id: 2, nombre: "Luis", saldo: 1000, transacciones: [] },
  { id: 3, nombre: "Marta", saldo: 300, transacciones: [] },
];

function consultarSaldo(idCuenta) {
  return cuentas
    .filter(cuenta => cuenta.id === idCuenta)
    .map(cuenta => `Saldo de ${cuenta.nombre}: $${cuenta.saldo}`)[0];
}

console.log(consultarSaldo(1));

function depositar(idCuenta, monto) {
const existe = cuentas.some(cuenta => cuenta.id === idCuenta);
  if (!existe) return "Cuenta no encontrada";

  cuentas.map(cuenta => {
    if (cuenta.id === idCuenta) {
      if (cuenta.saldo >= monto) {
        cuenta.saldo -= monto;
        cuenta.transacciones.push({ tipo: "Retiro", monto });
      } else {
        console.log("Fondos insuficientes");
      }
    }
    return cuenta;
  });
}

console.log(consultarSaldo(1));  
depositar(1, 300);     
console.log(consultarSaldo(1)); 