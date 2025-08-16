// Local storage utilities for demo purposes
// In production, this would be replaced with API calls

export const storage = {
  // Users
  getUsers: (): any[] => {
    return JSON.parse(localStorage.getItem('agriconnect_users') || '[]');
  },
  
  saveUsers: (users: any[]) => {
    localStorage.setItem('agriconnect_users', JSON.stringify(users));
  },

  // Products
  getProducts: (): any[] => {
    return JSON.parse(localStorage.getItem('agriconnect_products') || '[]');
  },
  
  saveProducts: (products: any[]) => {
    localStorage.setItem('agriconnect_products', JSON.stringify(products));
  },

  // Orders
  getOrders: (): any[] => {
    return JSON.parse(localStorage.getItem('agriconnect_orders') || '[]');
  },
  
  saveOrders: (orders: any[]) => {
    localStorage.setItem('agriconnect_orders', JSON.stringify(orders));
  },

  // Initialize with default admin users
  initializeDefaultUsers: () => {
    const existingUsers = storage.getUsers();
    if (existingUsers.length === 0) {
      const defaultUsers = [
        {
          id: 'admin-1',
          name: 'Admin User',
          email: 'admin@demo.com',
          role: 'admin',
          location: { lat: -1.9441, lng: 30.0619, address: 'Kigali, Rwanda' },
          phone: '+250788000001',
          createdAt: new Date(),
          isActive: true
        },
        {
          id: 'superadmin-1',
          name: 'Super Admin',
          email: 'superadmin@demo.com',
          role: 'superadmin',
          location: { lat: -1.9441, lng: 30.0619, address: 'Kigali, Rwanda' },
          phone: '+250788000000',
          createdAt: new Date(),
          isActive: true
        }
      ];
      storage.saveUsers(defaultUsers);
    }
  }
};

// Initialize default users on app start
storage.initializeDefaultUsers();