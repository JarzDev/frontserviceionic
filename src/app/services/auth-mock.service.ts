import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {

  // Usuarios mock para simular autenticación
  private mockUsers = [
    { email: 'admin@test.com', password: 'admin123', token: 'mock-token-admin-123' },
    { email: 'user@test.com', password: 'user123', token: 'mock-token-user-456' },
    { email: 'demo@demo.com', password: 'demo', token: 'mock-token-demo-789' }
  ];

  constructor() { }

  createUser({ email = '', password = '' }): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verificar si el usuario ya existe
        const existingUser = this.mockUsers.find(user => user.email === email);
        if (existingUser) {
          reject({ message: 'El usuario ya existe' });
        } else {
          // Crear nuevo usuario mock
          const newUser = {
            email,
            password,
            token: `mock-token-${Date.now()}`
          };
          this.mockUsers.push(newUser);
          
          resolve({
            user: {
              email: newUser.email,
              accessToken: newUser.token,
              uid: `mock-uid-${Date.now()}`
            }
          });
        }
      }, 1000); // Simular delay de red
    });
  }

  loginUser({ email = '', password = '' }): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Buscar usuario en la lista mock
        const user = this.mockUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
          resolve({
            user: {
              email: user.email,
              accessToken: user.token,
              uid: `mock-uid-${user.email.replace('@', '-').replace('.', '-')}`
            }
          });
        } else {
          reject({ 
            message: 'Credenciales inválidas. Intenta con:\nadmin@test.com / admin123\nuser@test.com / user123\ndemo@demo.com / demo' 
          });
        }
      }, 1000); // Simular delay de red
    });
  }

  logoutUser(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simular logout exitoso
        resolve({ message: 'Logout exitoso' });
      }, 500);
    });
  }

  // Método auxiliar para obtener usuarios mock (útil para desarrollo)
  getMockUsers() {
    return this.mockUsers.map(user => ({ 
      email: user.email, 
      password: user.password 
    }));
  }
}
