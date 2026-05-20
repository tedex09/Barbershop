## BACKEND STATUS

Backend is fully implemented.

Stack:
- NestJS
- Prisma
- PostgreSQL
- Redis
- BullMQ
- Stripe
- JWT Authentication

---

## ARCHITECTURE

- Modular architecture
- Repository pattern
- DTO validation
- Tenant-scoped resources
- Event-driven architecture

---

## MULTI-TENANT RULES

All resources are tenant scoped.

Every request MUST include:

x-tenant-id

Users may belong to multiple tenants.

Frontend must support:
- active tenant switching
- tenant-aware cache
- tenant-aware navigation

---

## AUTHENTICATION

JWT Bearer authentication.

Main endpoints:

POST /auth/register
POST /auth/login
GET /auth/me

---

## MAIN MODULES

- Auth
- Tenants
- Users
- RBAC
- Customers
- Barbers
- Services
- Appointments
- Payments
- Subscriptions
- Commissions
- Reports
- Notifications
- WhatsApp
- AI

---

## APPOINTMENT STATUSES

- pending
- confirmed
- cancelled
- completed

---

## BUSINESS RULES

- appointments cannot overlap
- barber availability required
- services have duration
- commissions are automatically calculated
- tenant isolation is mandatory

---

## EVENTS

BullMQ events:

- appointment.created
- appointment.confirmed
- payment.completed
- customer.no_show

---

## API ERROR FORMAT

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request"
}
```

---

## PAGINATION FORMAT

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```