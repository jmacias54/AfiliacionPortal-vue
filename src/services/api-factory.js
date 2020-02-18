import CargaArchivoApertura from '../repository/registro/afore-movil/apertura-cuentas/carga-archivo-api'

const repositories = {
  cargaArchivoApertura: CargaArchivoApertura,
}

export const ApiFactory = {
         get: name => repositories[name],
       }
