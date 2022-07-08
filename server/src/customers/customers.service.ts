import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './entities/customer.entity';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async createCustomer(customerDto: CustomerDto) {
    const newCustomer = await new this.customerModel(customerDto);
    return newCustomer.save();
  }

  async getAllCustomers() {
    const allCustomers = await this.customerModel.find().exec();

    if (!allCustomers || allCustomers.length == 0) {
      throw new Error('Customers data not found!');
    }
    return allCustomers;
  }

  async getCustomerById(id: string) {
    const customerById = await this.customerModel.findById(id).exec();

    if (!customerById) {
      throw new Error(`Customer with ${id} not found!`);
    }
    return customerById;
  }

  async updateCustomer(id: string, customerDto: CustomerDto) {
    const customerById = await this.customerModel.findByIdAndUpdate(
      id,
      customerDto,
    );

    if (!customerById) {
      throw new Error(`Customer with ${id} not found!`);
    }
    return customerById;
  }

  async deleteCustomer(id: string) {
    const deletedCustomer = await this.customerModel.findByIdAndDelete(id);

    if (!deletedCustomer) {
      throw new Error(`Customer with ${id} not found!`);
    }
    return deletedCustomer;
  }
}
