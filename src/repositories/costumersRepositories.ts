import { connectionDB } from '../config/database.js';
import { Customer } from '../schemas/CustomerSchemas.js';

export const CustomerRepository = {
  async createCustomer(name: string, phone: string, cpf: string, birthday: Date): Promise<void> {
    await connectionDB.query('INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)',
      [name, phone, cpf, birthday]
    );
  },

  async retrieveCustomers(): Promise<Customer[]> {
    const result = await connectionDB.query('SELECT id, name, phone, cpf, birthday FROM customers');
    return result.rows as Customer[];
  },

  async getCustomerById(id: number): Promise<Customer> {
    const result = await connectionDB.query('SELECT id, name, phone, cpf, birthday FROM customers WHERE id = $1', [id]);
    return result.rows[0] as Customer;
  },

  async updateCustomer(id: number, name: string, phone: string, cpf: string, birthday: Date): Promise<void> {
    await connectionDB.query('UPDATE customers SET name = $2, phone = $3, cpf = $4, birthday = $5 WHERE id = $1',
      [id, name, phone, cpf, birthday]
    );
  },

  async deleteCustomer(id: number): Promise<void> {
    await connectionDB.query('DELETE FROM customers WHERE id = $1', [id]);
  },

  async getCustomerByCpf(cpf: string): Promise<Customer> {
    const result = await connectionDB.query('SELECT id, name, phone, cpf, birthday FROM customers WHERE cpf = $1', [cpf]);
    return result.rows[0] as Customer;
  }
};

