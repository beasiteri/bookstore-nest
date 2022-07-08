import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoiceDto } from './dto/invoice.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  async createInvice(@Res() response, @Body() invoiceDto: InvoiceDto) {
    try {
      const newInvoice = await this.invoicesService.createInvoice(invoiceDto);
      return response.status(HttpStatus.CREATED).json({
        newInvoice,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Invoice not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getAllInvoices(@Res() response) {
    try {
      const invoicesData = await this.invoicesService.getAllInvoices();
      return response.status(HttpStatus.OK).json({
        invoicesData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getInvoiceById(@Res() response, @Param('id') id: string) {
    try {
      const invoiceById = await this.invoicesService.getInvoiceById(id);
      return response.status(HttpStatus.OK).json({
        invoiceById,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  async updateInvoice(
    @Res() response,
    @Param('id') id: string,
    @Body() invoiceDto: InvoiceDto,
  ) {
    try {
      const invoiceById = await this.invoicesService.updateInvoice(
        id,
        invoiceDto,
      );
      return response.status(HttpStatus.OK).json({
        invoiceById,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':id')
  async deleteInvoice(@Res() response, @Param('id') id: string) {
    try {
      const deleteInvoice = await this.invoicesService.deleteInvoice(id);
      return response.status(HttpStatus.OK).json({
        deleteInvoice,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
