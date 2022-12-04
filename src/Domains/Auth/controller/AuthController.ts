class AuthController {
  singin(request: any, response: any) {
    const { username, password } = request.body;
    return response.send({ username, password });
  }
}

export default new AuthController();
