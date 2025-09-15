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
  cuentas.map(cuenta => {
    if (cuenta.id === idCuenta) {
      cuenta.saldo += monto;
      cuenta.transacciones.push({ tipo: "Depósito", monto });
    }
    return cuenta;
  });
}

console.log(consultarSaldo(1));  
depositar(1, 200);     
console.log(consultarSaldo(1)); 