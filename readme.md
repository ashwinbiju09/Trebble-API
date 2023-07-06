
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
| 200 |  | json <br> 
hellwow roddl  |



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

