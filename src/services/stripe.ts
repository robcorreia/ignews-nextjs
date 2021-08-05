import Stripe from 'stripe';
import { version } from '../../package.json'

//ESTRATEGIAS DE AUTENTICACAO USUARIO

// JWT (Storage)
// Next Auth (Login social, )
// Codnito, Auth0



export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    }
  }
);