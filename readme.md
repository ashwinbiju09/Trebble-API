
# API Security Hackathon by Treblle
## Introduction
    This project is submitted to API Security hackthon conducted by [trebble](https://blog.treblle.com/api-security-hackathon/)




## Deploy Locally






## API Reference

#### login

```http
  GET api/v1/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Name of the user |
| `email` | `string` | Email id of the user  |
| `password` | `string` | password for the email handel  |
| `password_confirmation` | `string` | Retyped password |

| Status Code | Structure | Example |
| ---------- |--------- | ------ |
| 200 | { <br> status: string , <br> token: string, <br> user: <br> "user object" <br>} | {<br>status: "success",<br>token: "3\|TNc0pHeT9AdQjlTjHiRBKy7ksxqFFV2lCaahuC6T",<br>user: {<br> id: 2, <br>name: "user-1",<br>email: "test1@2test.com",<br>email_verified_at: null,<br>created_at: "2023-07-06T09:55:38.000000Z",<br>updated_at: "2023-07-06T09:55:38.000000Z"<br>}<br>} |



#### register user

```http
  GET api/v1/auth/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Name of new user |
| `email`      | `string` | Email Id of new user |
| | | |
#### add(num1, num2)

Takes two numbers and returns the sum.

