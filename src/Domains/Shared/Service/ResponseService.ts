import { HttpResponse } from '../Protocols/ControllerProtocols';

class ResponseService {
  // todo: pedir o mota para fazer uma lib de response codes
  ok(httpResponse: HttpResponse, data: any): HttpResponse {
    return this.buildResponse(
      httpResponse,
      200,
      data,
    );
  }

  private buildResponse(httpResponse: HttpResponse, statusCode: number, body: any) {
    return httpResponse.status(statusCode).json(body);
  }
}

export default new ResponseService();
