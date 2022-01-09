export class AuthService {
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
