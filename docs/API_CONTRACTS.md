## AUTH

### POST /auth/login

Request:

```json
{
  "email": "user@email.com",
  "password": "123456"
}
```

Response:

```json
{
  "accessToken": "jwt",
  "user": {
    "id": "uuid",
    "name": "John"
  },
  "memberships": []
}
```

---

## APPOINTMENTS

### GET /appointments

Response:

```json
{
  "data": [
    {
      "id": "uuid",
      "status": "confirmed",
      "startsAt": "2026-05-18T15:00:00Z",
      "endsAt": "2026-05-18T16:00:00Z",
      "customer": {},
      "barber": {},
      "service": {}
    }
  ]
}
```

---

### POST /appointments

Request:

```json
{
  "customerId": "uuid",
  "barberId": "uuid",
  "serviceId": "uuid",
  "startsAt": "2026-05-18T15:00:00Z"
}
```

---

## CUSTOMERS

GET /customers
POST /customers
PATCH /customers/:id
DELETE /customers/:id

---

## BARBERS

GET /barbers
POST /barbers
PATCH /barbers/:id
DELETE /barbers/:id

---

## SERVICES

GET /services
POST /services
PATCH /services/:id
DELETE /services/:id

---

## REPORTS

GET /reports/dashboard
GET /reports/revenue
GET /reports/appointments
GET /reports/average-ticket

---

## NOTIFICATIONS

GET /notifications
PATCH /notifications/:id/read