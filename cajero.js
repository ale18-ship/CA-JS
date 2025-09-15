const readline = require("readline");

const cuentas = [
  { id: 1, nombre: "Ana", saldo: 500, transacciones: [] },
  { id: 2, nombre: "Luis", saldo: 1000, transacciones: [] },
  { id: 3, nombre: "Marta", saldo: 300, transacciones: [] },
  { id: 4, nombre: "Carlos", saldo: 2000, transacciones: [] },
  { id: 5, nombre: "Sofía", saldo: 1500, transacciones: [] },
  { id: 6, nombre: "Pedro", saldo: 750, transacciones: [] },
  { id: 7, nombre: "Lucía", saldo: 1200, transacciones: [] },
  { id: 8, nombre: "Jorge", saldo: 50, transacciones: [] },
  { id: 9, nombre: "Elena", saldo: 800, transacciones: [] },
  { id: 10, nombre: "Andrés", saldo: 5000, transacciones: [] }
]
function consultarSaldo(idCuenta) {
  return cuentas
    .filter(cuenta => cuenta.id === idCuenta)
    .map(cuenta => `Saldo de ${cuenta.nombre}: $${cuenta.saldo}`)[0];
}

function depositar(idCuenta, monto) {
  const cuenta = cuentas.find(c => c.id === idCuenta);
  if (!cuenta) return console.log("Cuenta no encontrada");
  
  cuenta.saldo += monto;
  cuenta.transacciones.push({ tipo: "Depósito", monto });
  console.log(`Depósito de $${monto} realizado con éxito`);
}
function retirar(idCuenta, monto) {
  const cuenta = cuentas.find(c => c.id === idCuenta);
  if (!cuenta) return console.log("Cuenta no encontrada");
  if (cuenta.saldo >= monto) {
    cuenta.saldo -= monto;
    cuenta.transacciones.push({ tipo: "Retiro", monto });
  } else {
    console.log("Fondos insuficientes");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("\n=== Cajero Automático ===");
  console.log("1. Consultar saldo");
  console.log("2. Depositar dinero");
  console.log("3. Retirar dinero");
  console.log("4. Salir");

  rl.question("Elige una opción: ", (opcion) => {
    if (opcion === "4") {
      console.log("¡Gracias por usar el cajero!");
      rl.close();
      return;
    }

    rl.question("Ingresa el ID de la cuenta (1-3): ", (id) => {
      const idCuenta = parseInt(id);

      if (opcion === "1") {
        console.log(consultarSaldo(idCuenta));
        mostrarMenu();
      } else if (opcion === "2") {
        rl.question("Monto a depositar: ", (monto) => {
          depositar(idCuenta, parseFloat(monto));
          console.log("Depósito realizado.");
          mostrarMenu();
        });
      } else if (opcion === "3") {
        rl.question("Monto a retirar: ", (monto) => {
          retirar(idCuenta, parseFloat(monto));
          console.log("Operación realizada.");
          mostrarMenu();
        });
      } else {
        console.log("Opción no válida");
        mostrarMenu();
      }
    });
  });
}

mostrarMenu();