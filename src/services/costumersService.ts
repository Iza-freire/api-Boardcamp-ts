import { CustomerRepository } from '../repositories/costumersRepositories.js';

export const CustomerService = {
  async createCustomer(name: string, phone: string, cpf: string, birthday: Date): Promise<void> {
    await CustomerRepository.createCustomer(name, phone, cpf, birthday);
  },

  async retrieveCustomers(): Promise<any[]> {
    const customers = await CustomerRepository.retrieveCustomers();
    return customers;
  },

  async getCustomerById(id: number): Promise<any> {
    const customer = await CustomerRepository.getCustomerById(id);
    return customer;
  },

  async updateCustomer(id: number, name: string, phone: string, cpf: string, birthday: Date): Promise<any> {
    const customer = await CustomerRepository.updateCustomer(id, name, phone, cpf, birthday);
    return customer;
  }
};



