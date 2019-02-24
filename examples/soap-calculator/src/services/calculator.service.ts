import {getService, juggler} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {CalculatorDataSource} from '../datasources/calculator.datasource';

export interface MultiplyResponse {
  result: {
    return: number;
  };
}
export interface AddResponse {
  result: {
    return: number;
  };
}
export interface SubtractResponse {
  result: {
    return: number;
  };
}
export interface DivideResponse {
  result: {
    return: number;
  };
}

export interface CalculatorParameters {
  intA: number;
  intB: number;
}

export interface CalculatorService {
  multiply(args: CalculatorParameters): Promise<MultiplyResponse>;
  add(args: CalculatorParameters): Promise<AddResponse>;
  divide(args: CalculatorParameters): Promise<DivideResponse>;
  subtract(args: CalculatorParameters): Promise<SubtractResponse>;
}

export class CalculatorServiceProvider implements Provider<CalculatorService> {
  constructor(
    @inject('datasources.calculator')
    protected dataSource: juggler.DataSource = new CalculatorDataSource(),
  ) {}

  value(): Promise<CalculatorService> {
    return getService(this.dataSource);
  }
}
