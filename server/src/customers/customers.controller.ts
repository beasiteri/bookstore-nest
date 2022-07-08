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
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async createCustomer(@Res() response, @Body() customerDto: CustomerDto) {
    try {
      const newCustomer = await this.customersService.createCustomer(
        customerDto,
      );
      return response.status(HttpStatus.CREATED).json({
        newCustomer,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Customer not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getAllCustomers(@Res() response) {
    try {
      const customersData = await this.customersService.getAllCustomers();
      return response.status(HttpStatus.OK).json({
        customersData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getCustomerById(@Res() response, @Param('id') id: string) {
    try {
      const customerById = await this.customersService.getCustomerById(id);
      return response.status(HttpStatus.OK).json({
        customerById,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch('/:id')
  async updateCutomer(
    @Res() response,
    @Param('id') id: string,
    @Body() customerDto: CustomerDto,
  ) {
    try {
      const customerById = await this.customersService.updateCustomer(
        id,
        customerDto,
      );
      return response.status(HttpStatus.OK).json({
        customerById,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteCustomer(@Res() response, @Param('id') id: string) {
    try {
      const deleteCustomer = await this.customersService.deleteCustomer(id);
      return response.status(HttpStatus.OK).json({
        deleteCustomer,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
