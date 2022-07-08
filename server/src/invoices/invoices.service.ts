import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from './entities/invoice.entity';
import { InvoiceDto } from './dto/invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>,
  ) {}

  async createInvoice(invoiceDto: InvoiceDto) {
    const newInvoice = await new this.invoiceModel(invoiceDto);
    return newInvoice.save();
  }

  async getAllInvoices() {
    const allInvoices = await this.invoiceModel.find().exec();

    if (!allInvoices || allInvoices.length == 0) {
      throw new Error('Invoices data not found!');
    }
    return allInvoices;
  }

  async getInvoiceById(id: string) {
    const invoiceById = await this.invoiceModel.findById(id).exec();

    if (!invoiceById) {
      throw new Error(`Invoice with ${id} not found!`);
    }
    return invoiceById;
  }

  async updateInvoice(id: string, invoiceDto: InvoiceDto) {
    const invoiceById = await this.invoiceModel.findByIdAndUpdate(
      id,
      invoiceDto,
    );

    if (!invoiceById) {
      throw new Error(`Invoice with ${id} not found!`);
    }
    return invoiceById;
  }

  async deleteInvoice(id: string) {
    const deletedInvoice = await this.invoiceModel.findByIdAndDelete(id);

    if (!deletedInvoice) {
      throw new Error(`Invoice with ${id} not found!`);
    }
    return deletedInvoice;
  }
}
