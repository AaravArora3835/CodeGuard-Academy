# CodeGuard Academy — Planned API Routes (Oct 27, 2025)

## Auth
- POST /login → verify credentials → return user info
- POST /signup → register new student/tutor
- GET /logout → clear session

## Student
- POST /execute → receive code → return output
- POST /hint → return one AI hint
- GET /student/<id>/sessions → list past code sessions

## Tutor
- GET /tutors → return tutor list / mock data
- POST /feedback → submit tutor comments

## Admin
- GET /analytics → (placeholder for later)
