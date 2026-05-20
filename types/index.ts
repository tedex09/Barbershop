// API Response Types
export interface ApiResponse<T> {
  data?: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  error?: string;
  message?: string;
  statusCode?: number;
}

// Auth Types
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
  memberships: Membership[];
}

export interface Membership {
  id: string;
  tenantId: string;
  role: string;
}

// Tenant Types
export interface Tenant {
  id: string;
  name: string;
  slug: string;
}

// Appointment Types
export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Appointment {
  id: string;
  status: AppointmentStatus;
  startsAt: string;
  endsAt: string;
  customerId: string;
  barberId: string;
  serviceId: string;
  customer?: Customer;
  barber?: Barber;
  service?: Service;
}

// Customer Types
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  tenantId: string;
}

// Barber Types
export interface Barber {
  id: string;
  name: string;
  email: string;
  tenantId: string;
  commission?: number;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  tenantId: string;
}
