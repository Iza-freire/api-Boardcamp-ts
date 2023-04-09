import { Request, Response } from 'express';
import { CustomerService } from '../services/costumersService.js';

async function createCustomer(req: Request, res: Response): Promise<void> {
  const { name, phone, cpf, birthday } = req.body;

  try {
    await CustomerService.createCustomer(name, phone, cpf, birthday);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function allCustomers(req: Request, res: Response): Promise<void> {
  try {
    const customers = await CustomerService.retrieveCustomers();
    res.send(customers);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getCustomerById(req: Request, res: Response): Promise<void> {
  const customerId: number = parseInt(req.params.id);

  try {
    const customer = await CustomerService.getCustomerById(customerId);

    if (!customer) {
      res.status(404).send({ error: 'Customer not found.' });
      return;
    }

    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function putUpdateCustomer(req: Request, res: Response): Promise<void> {
  const customerId: number = parseInt(req.params.id);
  const { name, phone, cpf, birthday } = req.body;

  try {
    const customer = await CustomerService.updateCustomer(customerId, name, phone, cpf, birthday);

    if (!customer) {
      res.status(404).send({ error: 'Customer not found.' });
      return;
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function deleteCustomer(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await CustomerService.deleteCustomer(Number(id));
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
export default {
  createCustomer,
  allCustomers,
  getCustomerById,
  putUpdateCustomer,
  deleteCustomer
}

